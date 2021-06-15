import { useEffect, useState } from "react"

import areaApi from "../api/areaApi"

const Areas = () => {
  const [areaList, setCompetitionList] = useState([])

  const fetchAreaList = async () => {
    try {
      const response = await areaApi.getAll()
      // console.log(response.areas);
      setCompetitionList(response.areas)
    } catch (error) {
      console.log('Failed to fetch area list: ', error)
    }
  }

  useEffect(() => {
    fetchAreaList()
  }, [])

  return (
    <>
      <h2>Đây là page Areas</h2>

      {
        areaList.map(area => (
          // console.log(area)
          <div key={area.id}>{area.name}</div>
        ))
      }
    </>
  )
}

export default Areas
