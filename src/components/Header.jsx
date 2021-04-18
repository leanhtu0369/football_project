import { Layout, Menu } from "antd"
import _ from "lodash"
import { useState } from "react"
import { NavLink } from "react-router-dom"

import { router } from "../router"

const Header = props => {
  const { Header } = Layout
  const navLink = router.filter(navLinkItem => navLinkItem.menu.status === true)
  const defaultSelected = navLink.findIndex(item => item.path === props.location.pathname)

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[`${defaultSelected}`]}>
        {
          navLink.map((navLinkItem, index) => {
            return (
              <Menu.Item key={index}>
                <NavLink to={navLinkItem.path} exact={navLinkItem.exact}>
                  {navLinkItem.menu.name}
                </NavLink>
              </Menu.Item>
            )
          })
        }
      </Menu>
    </Header>
  )
}

export default Header
