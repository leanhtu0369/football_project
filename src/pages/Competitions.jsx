import { useEffect, useState } from "react"

import store from "../redux/store"
import { Col, Row } from "antd"

import competitionApi from "../api/competitionApi"
import Images from '../constants/images';

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

      <Row gutter={[10, 10]}>
        {
          competitionList.map(competition => (
            <Col key={competition.id} xs={12} sm={8} md={8} lg={6} xl={4} xxl={4}>
              {/* {competition.area.countryCode} */}
              <div className="competition-item">
                <div className="custom-thumbnail custom-thumbnail--ratio-1-1 competition-item__thumbnail">
                  <div className="custom-thumbnail__background" 
                    style={{ backgroundImage: `url(${competition.emblemUrl || Images.NO_IMAGE})` }}
                  >

                  </div>
                </div>

                <div className="competition-item__info">
                  <a href={`/competitions/${competition.id}`}>{competition.name} ({competition.code})</a>

                  <div className="competition-item__info__area">
                    <div className="custom-thumbnail custom-thumbnail--flag competition-item__info__area__flag">
                      <div className="custom-thumbnail__background" 
                        style={{ backgroundImage: `url(${competition.area.ensignUrl || Images.NO_IMAGE})` }}
                      >

                      </div>
                    </div>

                    <div className="competition-item__info__area__name">
                      {competition.area.name} ({competition.area.countryCode})
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))
        }
      </Row>
    </>
  )
}

export default Competitions
