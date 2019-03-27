const withLess = require('@zeit/next-less');
// const lessToJS = require('less-vars-to-js')
// const fs = require('fs');
const path = require('path');

// const themeVariables = lessToJS(
//   fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
// )

if (typeof require !== 'undefined') {
  require.extensions['.less'] = () => {};
}

module.exports = withLess({
  webpack: config => {
    config.resolve.alias['jl-components'] = path.resolve(__dirname, './components');
    config.resolve.alias['jl-apis'] = path.resolve(__dirname, './apis');
    config.output.jsonpFunction = 'webpackNodeJsonP';
    return config;
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
    // modifyVars: themeVariables
  },
});
