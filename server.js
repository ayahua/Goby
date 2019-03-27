const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
// const { parse } = require('url');
const LRUCache = require('lru-cache');

process.env.timeHash = new Date().getTime();

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60, // 1hour
});

const devProxy = {
  '/fonts': {
    target: `http://localhost:${process.env.PORT || 8083}/`,
    changeOrigin: true,
  },
  '/__webpack_hmr': {
    target: `http://localhost:${process.env.PORT || 8083}/`,
    changeOrigin: true,
  },
};

app
  .prepare()
  .then(() => {
    const server = express();

    if (dev && devProxy) {
      const proxyMiddleware = require('http-proxy-middleware');
      Object.keys(devProxy).forEach(context => {
        server.use(proxyMiddleware(context, devProxy[context]));
      });
    }

    server.use(/\/api/, (req, res) => {
      res.sendStatus(500);
      res.end();
    });
    server.use(/\/page\/sh-crm/, (req, res) => {
      const actualPage = '/oldPage-sh';
      const queryParams = {
        mod: 'sh-crm',
        ...req.query,
      };
      renderAndCache(req, res, actualPage, queryParams);
      // app.render(req, res, actualPage, queryParams)
    });

    server.use(/\/page\/zmc-crm/, (req, res) => {
      const actualPage = '/oldPage-zmc';
      const queryParams = {
        mod: 'zmc-crm',
        ...req.query,
      };
      renderAndCache(req, res, actualPage, queryParams);
      // app.render(req, res, actualPage, queryParams)
    });

    //   server.get(/\/page/, (req, res) => {
    //     const actualPage = '/oldPage';
    //     const parsedUrl = parse(req.url, true);
    //     const { query } = parsedUrl;
    //     const queryParams = {
    //        ...query,
    //        referer:req.headers.referer
    //     } ;
    //     app.render(req, res, actualPage, queryParams)
    //   })

    server.get('/:fMenu/:sMenu', (req, res) => {
      const actualPage = '/';
      const queryParams = {
        ...req.query,
        ...req.params,
      };
      app.render(req, res, actualPage, queryParams);
    });
    // server.get(
    //     /^\/_next\/static\/(runtime|development|chunks)\//,
    //     (req, res, nextHandler) => {
    //       res.setHeader(
    //         "Cache-Control",
    //         "public, max-age=31536000, immutable",
    //       );
    //       res.send()
    //     },
    //   );
    server.get('*', (req, res) => handle(req, res));

    server.listen(3880, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3880');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

function getCacheKey(req) {
  return `${req.url}`;
}

async function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req);
  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT');
    res.send(ssrCache.get(key));
    return;
  }

  try {
    // If not let's render the page into HTML
    const html = await app.renderToHTML(req, res, pagePath, queryParams);

    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html);
      return;
    }

    // Let's cache this page
    ssrCache.set(key, html);

    res.setHeader('x-cache', 'MISS');
    res.send(html);
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams);
  }
}
