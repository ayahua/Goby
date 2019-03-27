import { SideBar, TopNav } from 'jl-components';
import { withRouter } from 'next/router';
import '../assets/global.less';

const TopMenus = [
  {
    label: '菜单',
    value: 'default',
    icon: 'icon-tuanduijieshao',
  },
  {
    label: '菜单',
    value: 'haoyiku',
    icon: 'icon-gongsijieshao',
  },
  {
    label: '菜单',
    value: 'shuaibao',
    icon: 'icon-fazhanlicheng',
  },
  {
    label: '菜单',
    value: 'zhima',
    icon: 'icon-fanhuidingbu',
  },
];

const SideMenus = [
  {
    label: '菜单',
    value: 'shMaterial',
    children: [
      {
        label: '菜单',
        value: 'materialList',
        href: '/page/sh-crm/shMaterial/materialList',
      },
      {
        label: '菜单',
        value: 'setMaterial',
        href: '/page/sh-crm/shMaterial/setMaterial',
      },
    ],
  },
  {
    label: '菜单',
    value: 'marketingCampaign-sh',
    children: [
      {
        label: '菜单',
        value: 'missionManager',
        href: '/page/sh-crm/marketingCampaign-sh/missionManager',
      },
    ],
  },
];

const Index = props => (
  <div id="goby">
    <TopNav title="甩宝" menus={TopMenus} userInfo={{ name: '测试' }} />
    <SideBar menus={SideMenus} router={props.router} />
  </div>
);

export default withRouter(Index);
