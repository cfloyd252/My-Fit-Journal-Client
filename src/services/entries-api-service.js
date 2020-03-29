import config from '../config'
import TokenService from '../services/token-service'

const EntriesApiService = {
  getWaterEntries() {
    return fetch(`${config.API_ENDPOINT}/entries/water`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getActivityEntries() {
    return fetch(`${config.API_ENDPOINT}/entries/activity`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getWeightEntries() {
    return fetch(`${config.API_ENDPOINT}/entries/weight`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postWaterEntry(quanity, unitOfMeaurement, startTime, userId) {
    return fetch(`${config.API_ENDPOINT}/entries/water`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        quanity,
        unit_of_measurement: unitOfMeaurement,
        start_time: startTime,
        // user_id:userId,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postWeightEntry(quanity, unitOfMeaurement, startTime, userId) {
    return fetch(`${config.API_ENDPOINT}/entries/weight`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        quanity,
        unit_of_measurement: unitOfMeaurement,
        start_time: startTime,
        user_id: userId,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postActivityEntry(logTitle, startTime, endTime, calories = null , userId) {
    return fetch(`${config.API_ENDPOINT}/entries/activity`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        log_title: logTitle,
        start_time: startTime,
        end_time: endTime,
        calories,
        user_id: userId,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default EntriesApiService