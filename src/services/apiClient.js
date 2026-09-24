import api from './httpClient.js'

const apiclient = {
  async getAll() {
    const { data } = await api.get('/blueprints')
    return data
  },

  async getByAuthor(author) {
    const { data } = await api.get(`/blueprints/${encodeURIComponent(author)}`)
    return data
  },

  async getByAuthorAndName(author, name) {
    const { data } = await api.get(
      `/blueprints/${encodeURIComponent(author)}/${encodeURIComponent(name)}`,
    )
    return data
  },

  async create(blueprint) {
    const { data } = await api.post('/blueprints', blueprint)
    return data
  },
}

export default apiclient
