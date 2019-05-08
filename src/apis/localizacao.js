import { get } from 'axios'
import greatCircleDistance from 'haversine-js'

class Localizacao {
  searchUrl = 'https://us1.locationiq.com/v1/search.php'

  constructor ({token = ''}) {
    this.token = token
    this.getUserPosition()
  }

  distance (endereco1, endereco2) {
    return greatCircleDistance(endereco1, endereco2).toFixed(2)
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
