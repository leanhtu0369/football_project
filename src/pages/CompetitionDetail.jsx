
import { useEffect, useState } from "react";

import { useParams } from "react-router";

import competitionApi from "../api/competitionApi";
import Images from "../constants/images";

const CompetitionsDetail = () => {

  const { id } = useParams()
  const [competition, setCompetition] = useState({})
  const [currentSeason, setCurrentSeason] = useState({})
  const [seasonList, setSeasonList] = useState([])

  const fetchCompetition = async () => {
    try {
      const response = await competitionApi.get(id)
      setCompetition(response)
      // console.log(response);

      setCurrentSeason(response.currentSeason)
      // console.log(response.currentSeason);

      // remove current Season return arr not item current Season
      response.seasons.shift()
      setSeasonList(response.seasons)
      // console.log(response.seasons);
    } catch (error) {
      console.log('Failed to fetch competition item: ', error);
    }
  }

  useEffect(() => {
    fetchCompetition()
  }, [])

  return (
    <>
      <h2>Competition {competition.name}</h2>

      {Object.keys(currentSeason).length === 0 || <h3>Current Season {currentSeason.startDate.slice(0, 4)} - {currentSeason.endDate.slice(0, 4)}</h3>}

      <div className="season">
        {
          seasonList.map(season => (
            <div key={season.id} className="season-item">
              {/* <div>currentMatchday: {season.currentMatchday}</div> */}
              <div className="season-item__time">
                Season {season.startDate.slice(0, 4)} - {season.endDate.slice(0, 4)}:
              </div>
              <div className="season-item__winner">
                <div className="season-item__winner__title">Team winner:</div> {
                  season.winner !== null ?
                    <div className="team-item__header"> 
                      <div className="custom-thumbnail custom-thumbnail--logo-team team-item__header__logo">
                        <div className="custom-thumbnail__background" 
                          style={{ backgroundImage: `url(${season.winner.crestUrl || Images.NO_IMAGE})` }}
                        >

                        </div>
                      </div>

                      <div className="team-item__header__name">{season.winner.name} ({season.winner.shortName})</div>
                    </div>
                  :
                    <div>Updating</div>
                }
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default CompetitionsDetail
