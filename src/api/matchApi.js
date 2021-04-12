import axiosClient from "./axiosClient"

const matchApi = {
  getAll: () => {
    const url = '/matches'
    return axiosClient.get(url)
  },

  get: (id) => {
    const url = `/matches/${id}`
    return axiosClient.get(url)
  }
}

export default matchApi
