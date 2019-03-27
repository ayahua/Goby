import React from 'react';
import { Menu, Dropdown } from 'antd';
import { SvgIcon } from 'jl-components';
import './style.less';

class TopNav extends React.PureComponent {
  constructor(props) {
    super(props);
    const { title } = this.props;
    this.state = {
      title,
    };
  }

  menu = (
    <Menu className="userMenu">
      <Menu.Item>
        <a onClick={this.logout}>退出登录</a>
      </Menu.Item>
    </Menu>
  );

  logout = e => {
    e.preventDefault();
  };

  changeModule = menu => {
    // this.props.history.push('/');
    this.setState({
      title: menu.label,
    });
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.title !== nextProps.title) {
      this.setState({
        title: this.props.title,
      });
    }
  }

  render() {
    const { menus, userInfo } = this.props;
    const { title } = this.state;
    return (
      <header className="topNav">
        <div className="logo">工作台·{title}</div>
        <ul className="topMenus">
          {menus.map(e => (
            <li
              className={title === e.label ? 'active' : ''}
              onClick={() => {
                this.changeModule(e);
              }}
              key={e.value}
            >
              <SvgIcon type={e.icon} />
              {e.label}
            </li>
          ))}
        </ul>
        <Dropdown overlayClassName="userMenuDrop" overlay={this.menu} placement="bottomRight">
          <div className="userMenuButton">
            <span>{userInfo.name}</span>
            <img src={userInfo.imgSrc} alt={userInfo.name} />
          </div>
        </Dropdown>
      </header>
    );
  }
}

export default TopNav;
