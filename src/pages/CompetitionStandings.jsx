import { useEffect, useState } from "react"

import { useParams } from "react-router"
import { Table, Tabs } from "antd"

import competitionApi from "../api/competitionApi"
import Images from "../constants/images"

const CompetitionStandings = () => {
  const { TabPane } = Tabs
  const { Column } = Table;

  const { id } = useParams()
  const [competitionListStandings, setCompetitionListStandings] = useState([])
  const standingType = ['TOTAL', 'HOME', 'AWAY']

  const fetchCompetitionStandings = async () => {
    try {
      const response = await competitionApi.getStandings(id)

      console.log(response);
      setCompetitionListStandings(response.standings)
    } catch (error) {
      console.log('Failed to fetch competition list standings: ', error);
    }
  }

  useEffect(() => {
    fetchCompetitionStandings()
  }, [])

  return (
    <>
      <Tabs defaultActiveKey="0">
        {
          standingType.map((type, index) => (
            <TabPane tab={type} key={index}>
              {
                competitionListStandings.
                filter(standing => standing.type === type).
                sort((a, b) => a.points - b.points).
                map((standing, index) => (
                  <div key={index} className="standing">
                    {
                      standing.group && <div className="standing__group">{standing.group}</div>
                    }
                    
                    <Table 
                      dataSource={standing.table} 
                      rowKey={record => record.position}
                      scroll={{ x: true }}
                      className="standing__table"
                    >
                      <Column 
                        title="Club" 
                        dataIndex="team"
                        className="standing__table__club" 
                        render= {(team, record) => (
                          <>
                            <div className="standing__table__club__position">{record.position}</div>
                            <div className="custom-thumbnail custom-thumbnail--logo-team standing__table__club__logo">
                              <div className="custom-thumbnail__background" 
                                style={{ backgroundImage: `url(${team.crestUrl || Images.NO_IMAGE})` }}
                              >

                              </div>
                            </div>
                            <div>{team.name}</div>
                          </>
                        )} 
                      />
                      <Column title="MP" dataIndex="playedGames" />
                      <Column title="W" dataIndex="won" />
                      <Column title="D" dataIndex="draw" />
                      <Column title="L" dataIndex="lost" />
                      <Column title="GF" dataIndex="goalsFor" />
                      <Column title="GA" dataIndex="goalsAgainst" />
                      <Column title="GD" dataIndex="goalDifference" />
                      <Column title="Pts" dataIndex="points" />
                    </Table>
                  </div>
                ))
              }
            </TabPane>
          ))
        }
      </Tabs>
    </>
  )
}

export default CompetitionStandings
