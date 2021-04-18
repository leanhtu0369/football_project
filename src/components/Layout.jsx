import { Breadcrumb, Layout } from "antd"

import { Route, Switch } from "react-router"
import { Link, useLocation } from "react-router-dom"

import Footer from "./Footer"
import Header from "./Header"

import 'antd/dist/antd.css'
import { router } from "../router"
import BreadcrumbComponent from "./Breadcrumb"

const LayoutComponent = () => {
  const { Content } = Layout
  const location = useLocation()

  return (
      <Layout className="layout">
        <Header location={location} />

        <Content className="container">
          <BreadcrumbComponent location={location}/>

          <div className="site-layout-content">
            <Switch>
              {
                router.map((CurrentRoute, index) => (
                  <Route 
                    path={CurrentRoute.path}
                    exact={CurrentRoute.exact}
                    key={index}
                  >
                    {CurrentRoute.Component}
                  </Route>
                ))
              } 
            </Switch>
          </div>
        </Content>

        <Footer />
      </Layout>
  )
}

export default LayoutComponent
