import { get } from 'axios'
import moment from 'moment'

class Clima {
  constructor ({prefixoUrl = ''}) {
    this.urlBaseAPI = prefixoUrl + 'https://www.metaweather.com/api/location'
  }

  async search (latitude, longitude) {
    let search = await get(`${this.urlBaseAPI}/search`, {
      params: {
        lattlong: `${latitude},${longitude}`
      }
    }).then(({data}) => data[0])
    return search
  }

  async clima (woeid, data = '') {
    let clima = await get(`${this.urlBaseAPI}/${woeid}/${data}`).then(({data}) => data)
    return clima
  }

  async climaEndereco (latitude, longitude, data) {
    let search = await this.search(latitude, longitude)
    console.log('search', search)
    let clima = await this.clima(search.woeid, data)
    return clima
  }

  async climaEnderecoAgora (latitude, longitude) {
    const data = moment().format('YYYY/MM/DD')
    // const dataFormatada = `${data.getFullYear()}/${data.getMonth()}/${data.getDate()}`
    let clima = await this.climaEndereco(latitude, longitude, data)
    return clima
  }
}

export default Clima
