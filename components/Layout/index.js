import Head from 'next/head';

const timeHash = new Date().getTime();

const Layout = props => (
  <div>
    <Head>
      <link rel="stylesheet" href={`${props.domain.host}/member/static/common.css`} />
      <link rel="stylesheet" href={`${props.domain.assetsPublicPath}vendor.css?time=${timeHash}`} />
      <link
        rel="stylesheet"
        href={`${props.domain.assetsPublicPath}${props.jsPath}.css?time=${timeHash}`}
      />
      <script defer src={`${props.domain.host}/member/static/qundian.js`} />
      <script defer src={`${props.domain.assetsPublicPath}manifest.js?time=${timeHash}`} />
      <script defer src={`${props.domain.assetsPublicPath}vendor.js?time=${timeHash}`} />
      <script defer src={`${props.domain.assetsPublicPath}${props.jsPath}.js?time=${timeHash}`} />
    </Head>
    {props.children}
  </div>
);
export default Layout;
