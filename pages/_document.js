import Document, { Head, NextScript } from 'next/document';
import { getDomain } from 'jl-apis';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, asPath: ctx.asPath, query: ctx.query };
  }

  render() {
    const { html, asPath = '', query = {} } = this.props;
    const jsPath = asPath ? `/${query.mod}${asPath.split('.')[0]}` : '';
    const dev = process.env.NODE_ENV !== 'production';
    const cssCdn = [];
    const jsCdn = [];
    if (query.mod) {
      if (dev) {
        jsCdn.push(
          <script key="js1" src={`http://localhost:${process.env.PORT || 8083}${jsPath}.js`} />,
        );
      } else {
        const domain = getDomain(query.mod);
        const timeHash = process.env.timeHash;
        cssCdn.push(
          <link key="css1" rel="stylesheet" href={`${domain.host}/member/static/common.css`} />,
          <link
            key="css2"
            rel="stylesheet"
            href={`${domain.assetsPublicPath}vendor.css?time=${timeHash}`}
          />,
          <link
            key="css3"
            rel="stylesheet"
            href={`${domain.assetsPublicPath}${jsPath}.css?time=${timeHash}`}
          />,
        );
        jsCdn.push(
          <script key="js1" src={`${domain.host}/member/static/qundian.js`} />,
          <script key="js2" src={`${domain.assetsPublicPath}manifest.js?time=${timeHash}`} />,
          <script key="js3" src={`${domain.assetsPublicPath}vendor.js?time=${timeHash}`} />,
          <script key="js4" src={`${domain.assetsPublicPath}${jsPath}.js?time=${timeHash}`} />,
        );
      }
    }
    return (
      <html amp="" lang="zh-CN">
        <Head>
          <script src="//at.alicdn.com/t/font_288530_8z02ftjgwwjnhfr.js" />
          <style>{`
                .contentWrap{
                    position:fixed;
                    top:60px;
                    left:180px;
                    right:0;
                    bottom:0;
                    overflow:auto;
                }
            `}</style>
          {cssCdn}
        </Head>
        <body>
          <div id="__next" dangerouslySetInnerHTML={{ __html: html }} />
          <div className="contentWrap">
            <div id="app" />
          </div>
          {jsCdn}
          <NextScript />
        </body>
      </html>
    );
  }
}
