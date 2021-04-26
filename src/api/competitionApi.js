import axiosClient from "./axiosClient"

const competitionApi = {
  getAll: () => {
    const url = '/competitions'
    return axiosClient.get(url)
  },

  get: (id) => {
    const url = `/competitions/${id}`
    return axiosClient.get(url)
  },

  getAllTeams: (id) => {
    const url = `/competitions/${id}/teams`
    return axiosClient.get(url)
  },

  getStandings: (id) => {
    const url = `/competitions/${id}/standings`
    return axiosClient.get(url)
  },
}

export default competitionApi
