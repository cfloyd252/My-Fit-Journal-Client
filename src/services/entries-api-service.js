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
    return fetch(`${config.API_ENDPOINT}/entries/activities`, {
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
  postWaterEntry(quanity, unitOfMeaurement, logTime, userId) {
    return fetch(`${config.API_ENDPOINT}/entries/water`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        quanity,
        unit_of_meaurement: unitOfMeaurement,
        log_time: logTime,
        user_id:userId,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postWeightEntry(quanity, unitOfMeaurement, logTime, userId) {
    return fetch(`${config.API_ENDPOINT}/entries/weight`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        quanity,
        unit_of_meaurement: unitOfMeaurement,
        log_time: logTime,
        user_id:userId,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postActivityEntry(activityName, startTime, endTime, caloriesBurned = null, userId) {
    return fetch(`${config.API_ENDPOINT}/entries/activities`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
       activity_name: activityName,
       start_time: startTime,
       end_time: endTime,
       calories_burned: caloriesBurned,
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