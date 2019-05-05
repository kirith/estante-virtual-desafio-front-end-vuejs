import { get } from 'axios'
import { greatCircleDistance } from 'great-circle-distance'

class Localizacao {
  searchUrl = 'https://us1.locationiq.com/v1/search.php'

  constructor ({token = ''}) {
    this.token = token
    this.getUserPosition()
  }

  distance (endereco1, endereco2) {
    const coords = {
      lat1: endereco1.latitude,
      lng1: endereco1.longitude,
      lat2: endereco2.latitude,
      lng2: endereco2.longitude
    }

    return greatCircleDistance(coords)
  }

  getUserPosition (options) {
    if (navigator.geolocation) {
      return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
      }).then(({coords}) => coords)
    } else {
      return false
    }
  }

  async search (parametros) {
    const _this = this
    let res = await get(this.searchUrl, {
      params: {
        key: _this.token,
        format: 'json',
        ...parametros
      }
    }).then(data => data).then(({data}) => data[0])

    return res
  }
}
export default Localizacao
