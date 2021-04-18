import { Breadcrumb } from "antd"
import { Link } from "react-router-dom";

const BreadcrumbComponent = props => {
  const pathSnippets = props.location.pathname.split('/').filter(i => i)
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`

    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>
          { pathSnippets[index][0].toUpperCase() + pathSnippets[index].substring(1) }
        </Link>
      </Breadcrumb.Item>
    );
  })

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {breadcrumbItems}
    </Breadcrumb>
  )
}

export default BreadcrumbComponent
