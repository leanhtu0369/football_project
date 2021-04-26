import { Route, Switch } from "react-router"
import { useLocation } from "react-router-dom"
import { Layout } from "antd"
import 'antd/dist/antd.css'

import { router } from "../router"
import Header from "./Header"
import Footer from "./Footer"
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
