import axios from 'axios'

import queryString from 'query-string'

const request = axios.create({
  baseURL: process.env.baseURL,

  headers: {
    'Content-Type': 'application/json'
  },

  paramsSerializer: params => queryString.stringify(params)
})

export default request
