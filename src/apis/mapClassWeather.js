const mapa = {
  sn: 'snow',
  sl: 'sleet',
  h: 'hail',
  t: 'thunderstorme',
  hr: 'rain',
  lr: 'rain',
  s: 'showers',
  hc: 'cloudy',
  lc: 'cloud',
  c: 'day-sunny'
}

export default function mapClassWeather (state) {
  return mapa[state]
}
