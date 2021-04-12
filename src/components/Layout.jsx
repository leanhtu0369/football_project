import { Breadcrumb, Layout } from "antd"

import { Route, Switch } from "react-router"
import { Link, useLocation } from "react-router-dom"

import Footer from "./Footer"
import Header from "./Header"

import 'antd/dist/antd.css'
import { router } from "../router"

const LayoutComponent = () => {
  const { Content } = Layout
  
  const location = useLocation()
  // console.log(useLocation())
  const pathSnippets = location.pathname.split('/').filter(i => i)
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`

    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{pathSnippets[index]}</Link>
      </Breadcrumb.Item>
    );
  })

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return (
      <Layout className="layout">
        <Header></Header>

        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0', textTransform: 'capitalize' }}>
            {breadcrumbItems}
          </Breadcrumb>

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

        <Footer></Footer>
      </Layout>
  )
}

export default LayoutComponent
