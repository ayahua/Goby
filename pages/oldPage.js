import { SideBar, TopNav } from 'jl-components';
import { withRouter } from 'next/router';
import Head from 'next/head';
import '../assets/global.less';

const TopMenus = [
  {
    label: '基础配置',
    value: 'default',
    icon: 'icon-tuanduijieshao',
  },
  {
    label: '好衣库',
    value: 'haoyiku',
    icon: 'icon-gongsijieshao',
  },
  {
    label: '甩宝',
    value: 'shuaibao',
    icon: 'icon-fazhanlicheng',
  },
  {
    label: '芝麻云仓',
    value: 'zhima',
    icon: 'icon-fanhuidingbu',
  },
];

const Index = props => (
  <div id="goby">
    <Head>
      <script src="//at.alicdn.com/t/font_288530_8z02ftjgwwjnhfr.js" />
    </Head>
    <TopNav key="tipNav" title="好衣库" menus={TopMenus} userInfo={{ name: '测试' }} />
    <SideBar router={props.router} />
    <div id="app">
      <p>oldPage{console.log(props.router)}</p>
      <p>{props.router.asPath}</p>
    </div>
  </div>
);

export default withRouter(Index);
