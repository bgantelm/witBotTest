import request from 'request-promise'
import config from '../config.js'

function getCapitals (data) {
  if (data.entities.location[0].value) {
    const param = {
      uri: config.countries.route + 'name/' + data.entities.location[0].value,
      headers: {
        'X-Mashape-Key': config.countries.key,
        Accept: 'application/json'
      }
    }
    return request(param)
    .then((result) => 'The capital city of ' + JSON.parse(result)[0].name + ' is ' + JSON.parse(result)[0].capital)
    .catch((error) => {
      console.log(error)
      return 'The location is not valid sorry'
    })
  } else {
    return 'The location is not valid sorry'
  }
}

module.exports = getCapitals
