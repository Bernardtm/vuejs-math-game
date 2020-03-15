import axios from 'axios'
import { Notify } from 'quasar'

let finishFunction = response => {
  return response
}

let errorFunction = error => {
  if (error.response === undefined) {
    Notify.create({
      message: 'Nosso servidor encontra-se temporariamente indisponível, tente mais tarde por favor.',
      color: 'black',
      textColor: 'white',
      position: 'top',
      icon: 'sentiment_very_dissatisfied',
      timeout: 10000
    })
  }
  return Promise.reject(error)
}

const restApi =
axios.create({baseURL: process.env.API + '/rest-api/crea', headers: {'Authorization': localStorage.getItem('TOKEN')}})
restApi.interceptors.response.use(finishFunction, errorFunction)
restApi.interceptors.request.use(function (config) {
  config.headers['Authorization'] = localStorage.getItem('TOKEN')
  return config
}, function (error) {
  return Promise.reject(error)
})

export default ({ Vue }) => {
  Vue.prototype.$axios = restApi
}
