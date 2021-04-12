import { Layout, Menu } from "antd"
import { NavLink } from "react-router-dom"

import { router } from "../router"

const Header = () => {
  const { Header } = Layout
  const navLink = router.filter(navLinkItem => navLinkItem.menu.status === true)

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
        {
          navLink.map((navLinkItem, index) => (
            <Menu.Item key={index}>
              <NavLink to={navLinkItem.path} exact={navLinkItem.exact}>
                {navLinkItem.menu.name}
              </NavLink>
            </Menu.Item>
          ))
        }
      </Menu>
    </Header>
  )
}

export default Header
