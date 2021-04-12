import { useEffect, useState } from "react"
import competitionApi from "../api/competitionApi"
import store from "../redux/store"

const Competitions = () => {
  const competitionAllow = store.getState().idCompetition.competitionAllow
  const [competitionList, setCompetitionList] = useState([])

  const fetchCompetitionList = async () => {
    try {
      const response = await competitionApi.getAll()
      const responseAllow = response.competitions.filter(competition => competitionAllow.find(item => item === competition.id))
      setCompetitionList(responseAllow)
      console.log(responseAllow);
    } catch (error) {
      console.log('Failed to fetch competition list: ', error)
    }
  }

  useEffect(() => {
    fetchCompetitionList()
  }, [])

  return (
    <>
      <h2>Đây là page Competitions</h2>

      {
        competitionList.map(competition => (
          <div key={competition.id}>
            <a href={`/competitions/${competition.id}`}>{competition.name}</a>
          </div>
        ))
      }
    </>
  )
}

export default Competitions
