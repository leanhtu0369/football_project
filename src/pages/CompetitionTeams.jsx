import { useEffect, useState } from "react";

import { useParams } from "react-router";
import { Collapse } from "antd";

import competitionApi from "../api/competitionApi";
import Images from "../constants/images";

const CompetitionTeams = () => {
  const { Panel } = Collapse;

  const { id } = useParams()
  const [competitionTotalTeam, setcompetitionTotalTeam] = useState(0)
  const [competitionListTeams, setCompetitionListTeams] = useState([])

  const fetchCompetitionTeams = async () => {
    try {
      const response = await competitionApi.getAllTeams(id)

      setcompetitionTotalTeam(response.count)
      setCompetitionListTeams(response.teams)
    } catch (error) {
      console.log('Failed to fetch competition list teams: ', error);
    }
  }

  useEffect(() => {
    fetchCompetitionTeams()
  }, [])

  return (
    <>
      <h2>Total {competitionTotalTeam} teams</h2>
      
      <Collapse accordion="true" expandIconPosition="right">
        {
          competitionListTeams.map(team => (
            <Panel key={team.id} 
              className="team-item"
              header={<div className="team-item__header">
                <div className="custom-thumbnail custom-thumbnail--logo-team team-item__header__logo">
                  <div className="custom-thumbnail__background" 
                    style={{ backgroundImage: `url(${team.crestUrl || Images.NO_IMAGE})` }}
                  >

                  </div>
                </div>

                <div className="team-item__header__name">{team.name} ({team.tla})</div>
              </div>}
            >
              <div className="team-item__body">
                <div>Short Name: {team.shortName}</div>
                <div>Founded: {team.founded}</div>
                <div>Club Colors: {team.clubColors}</div>
                <ul>Contact:
                  <li>Website: <a href={team.website} target="_blank" rel="noopener noreferrer">{team.website}</a></li>
                  <li>Email: <a href={`mailto:${team.email}`}>{team.email}</a></li>
                  <li>Phone: <a href={`tel:+${team.phone}`}>{team.phone}</a></li>
                </ul>
              </div>
            </Panel>
          ))
        }
      </Collapse>

    </>
  )
}

export default CompetitionTeams
