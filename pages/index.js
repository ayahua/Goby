import { SideBar, TopNav } from 'jl-components';
import { withRouter } from 'next/router';
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

const SideMenus = [
  {
    label: '甩货素材中心',
    value: 'shMaterial',
    children: [
      {
        label: '素材列表',
        value: 'materialList',
        href: '/page/sh-crm/shMaterial/materialList',
      },
      {
        label: '素材中心入口图片',
        value: 'setMaterial',
        href: '/page/sh-crm/shMaterial/setMaterial',
      },
    ],
  },
  {
    label: '营销活动管理',
    value: 'marketingCampaign-sh',
    children: [
      {
        label: '双倍佣金日管理',
        value: 'missionManager',
        href: '/page/sh-crm/marketingCampaign-sh/missionManager',
      },
    ],
  },
];

const Index = props => (
  <div id="goby">
    <TopNav title="好衣库" menus={TopMenus} userInfo={{ name: '测试' }} />
    <SideBar menus={SideMenus} router={props.router} />
    <div className="contentWrap">
      <p>Hello Next.js</p>
      <p>{props.router.asPath}</p>
    </div>
  </div>
);

export default withRouter(Index);
