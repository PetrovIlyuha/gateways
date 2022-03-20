import {Activity} from "./../layout/models/activity"
import axios, {AxiosResponse} from "axios"

const sleep = (delay: number) => {
  return new Promise(res => {
    setTimeout(res, delay)
  })
}

axios.defaults.baseURL = `http://localhost:5000/api`

axios.interceptors.response.use(res =>
  sleep(1000)
    .then(() => {
      return res
    })
    .catch(err => {
      console.error(err)
      return Promise.reject(err)
    })
)

const responseBody = <T>(response: AxiosResponse<T>) => response.data

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Activities = {
  list: () => requests.get<Activity[]>("/activities"),
}

const agent = {
  Activities,
}

export default agent
