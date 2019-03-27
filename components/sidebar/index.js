import React from 'react';
// import Link from 'next/link'
import { Menu } from 'antd';
import './style.less';

const { SubMenu, Item: MenuItem } = Menu;

export default class extends React.PureComponent {
  renderMenus = menus =>
    menus.map(menu =>
      menu.children && menu.children.length ? (
        <SubMenu key={menu.value} title={menu.label}>
          {this.renderMenus(menu.children)}
        </SubMenu>
      ) : (
        <MenuItem url={menu.href} key={menu.value}>
          <span>{menu.label}</span>
        </MenuItem>
      ),
    );

  clickMenu = e => {
    const { as, url: href } = e.item.props;
    if (href.split('page')[1]) {
      window.location.href = href;
    } else {
      this.props.router.query.mod ? (window.location.href = as) : this.props.router.push(href, as);
    }
  };

  // findSubMenu = (menus,menuUrl) => {
  //     let openSubMenus = [];
  //     const current = menus.find(menu => menu.href === menuUrl);
  //     if(current){
  //       openSubMenus.push(current.value);
  //     }else{
  //       menus.forEach(menu => {
  //         if(menu.children && menu.children.length){
  //           const childMenuHas = this.findSubMenu(menu.children,menuUrl);
  //           childMenuHas.length && (openSubMenus = [menu.value,...childMenuHas]);
  //         }
  //       })
  //     }
  //     return openSubMenus;
  //   }
  render() {
    const { router, menus } = this.props;
    const defaultOpenKeys = router.query.fMenu ? [router.query.fMenu] : router.asPath.split('/');
    const defaultSelectedKeys = router.query.sMenu
      ? [router.query.sMenu]
      : router.asPath.split('/');
    return (
      <div className="sidebarMenus">
        <Menu
          defaultOpenKeys={defaultOpenKeys}
          defaultSelectedKeys={defaultSelectedKeys}
          //   defaultSelectedKeys={['menu11']}
          //   defaultOpenKeys={['menu1']}
          onClick={this.clickMenu}
          mode="inline"
          theme="dark"
        >
          {this.renderMenus(menus)}
          <SubMenu title="测试antd" key="menu1">
            <MenuItem key="menu11" as="/menu1/menu11" url="/">
              {/* <Link as='/menu1/menu11' href='/'> */}
              <span>about</span>
              {/* </Link> */}
            </MenuItem>
            <MenuItem key="menu12" as="/menu1/menu12" url="/">
              {/* <Link > */}
              <span className="menuSpan">主页</span>
              {/* </Link> */}
            </MenuItem>
            <MenuItem key="menu13" as="/menu1/menu13" url="/">
              {/* <Link > */}
              <span className="menuSpan">测试主页</span>
              {/* </Link> */}
            </MenuItem>
          </SubMenu>
          <SubMenu title="菜单" key="menu2">
            <MenuItem key="menu21" as="/menu2/menu21" url="/">
              {/* <Link > */}
              <span className="menuSpan">子菜单一</span>
              {/* </Link> */}
            </MenuItem>
            <MenuItem key="menu22" as="/menu2/menu22" url="/">
              {/* <Link > */}
              <span className="menuSpan">子菜单二</span>
              {/* </Link> */}
            </MenuItem>
            <MenuItem key="menu23" as="/menu2/menu23" url="/">
              {/* <Link > */}
              <span className="menuSpan">子菜单三</span>
              {/* </Link> */}
            </MenuItem>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
