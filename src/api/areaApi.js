import axiosClient from "./axiosClient"

const areaApi = {
  getAll: () => {
    const url = '/areas'
    return axiosClient.get(url)
  },

  get: (id) => {
    const url = `/areas/${id}`
    return axiosClient.get(url)
  }
}

export default areaApi
