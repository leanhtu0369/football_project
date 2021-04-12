import { useEffect, useState } from "react";
import { useParams } from "react-router";
import competitionApi from "../api/competitionApi";

const CompetitionsDetail = () => {
  const { id } = useParams()
  const [competition, setCompetition] = useState({})

  const fetchCompetition = async () => {
    try {
      const response = await competitionApi.get(id)
      setCompetition(response)
    } catch (error) {
      console.log('Failed to fetch competition item: ', error);
    }
  }

  useEffect(() => {
    fetchCompetition()
  }, [])

  return (
    <>
      <h2>Đây là page CompetitionsDetail</h2>
      {
        competition.name
      }
    </>
  )
}

export default CompetitionsDetail
