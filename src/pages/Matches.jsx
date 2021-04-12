import { useEffect, useState } from "react"
import matchApi from "../api/matchApi"
import store from "../redux/store"

const Matches = () => {
  const competitionAllow = store.getState().idCompetition.competitionAllow
  const [matchList, setMatchList] = useState([])

  const fetchMatchList = async () => {
    try {
      const response = await matchApi.getAll()
      const responseAllow = response.matches.filter(match => competitionAllow.find(item => item === match.competition.id))
      setMatchList(responseAllow)
      console.log(responseAllow);
    } catch (error) {
      console.log('Failed to fetch match list: ', error);
    }
  }

  useEffect(() => {
    fetchMatchList()
  }, [])

  return (
    <>
      <h2>Đây là page Matches</h2>

      {
        matchList.map(match => (
          <div key={match.id}>
            <span>{match.awayTeam.name} - {match.homeTeam.name}</span>
            <a href={`/matches/${match.id}`}>Chi tiết</a>
          </div>
        ))
      }
    </>
  )
}

export default Matches
