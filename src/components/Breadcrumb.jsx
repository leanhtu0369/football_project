import { useState } from "react";

import { Breadcrumb } from "antd"
import { Link } from "react-router-dom";

import competitionApi from "../api/competitionApi";

const BreadcrumbComponent = props => {

  const [snippetName, setSnippetName] = useState(' ')

  const fetchNameCompetition = async id => {
    try {
      const response = await competitionApi.get(id)

      setSnippetName(response.name)
    } catch (error) {
      console.log('Failed to fetch name competition item: ', error);
    }
  }

  const pathSnippets = props.location.pathname.split('/').filter(i => i)
  const extraBreadcrumbItems = pathSnippets.map((pathSnippet, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`

    if (!isNaN(pathSnippet) && pathSnippet > 0) {
      const pathSnippetPre = pathSnippets[index - 1]

      switch (pathSnippetPre) {
        case 'competitions':
          fetchNameCompetition(parseInt(pathSnippet))
          pathSnippet = snippetName
          break;
      
        default:
          break;
      }
    }

    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>
          { pathSnippet[0].toUpperCase() + pathSnippet.substring(1) }
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
