<template>
  <div class="weather-card text-center">
    <b-row>
      <i :class="`overflow-hidden display-3 wi wi-${classeEstado}`"></i>
    </b-row>
    <b-row class="text-center h2">
      <small><span class="temperatura">{{temperatura}}</span> °C <i class="wi wi-thermometer"/></small>
    </b-row>
  </div>
</template>

<script>
  import mapClassWeather from '@/apis/mapClassWeather'

  export default {
    name: 'weather-card',
    props: {
      estado: String,
      temperatura: String
    },
    computed: {
      classeEstado () {
        return mapClassWeather(this.estado)
      }
    }
  }
</script>