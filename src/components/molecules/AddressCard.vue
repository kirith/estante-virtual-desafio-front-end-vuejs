<template>
  <div class="card text-left p-3">
    <b-col>
      <b-row class="flex-column flex-md-row-reverse">
        <b-col v-if="clima" class="col-md-2 justify-content-md-end">
          <weather-card :estado="clima[0].weather_state_abbr" :temperatura="clima[0].the_temp.toFixed(1)"/>
        </b-col>
        <b-col :class="`${clima ? 'col-sm-10' : ''}`">
          <b-row>
            <span class="logradouro">{{endereco.logradouro}}</span>,
            <span class="numero pl-1">{{endereco.numero}}</span>
            <dash-separator />
            <span v-if="endereco.complemento" class="complemento">{{endereco.complemento}}</span>
            <dash-separator v-if="endereco.complemento" />
            <span class="bairro">{{endereco.bairro}}</span>
          </b-row>
          <b-row>
            <span class="cidade">{{endereco.localidade}}</span>
            <dash-separator />
            <span class="uf">{{endereco.uf}}</span>
            <dash-separator />
            <span class="cep">{{endereco.cep}}</span>
          </b-row>
          <b-row v-if="distancia">
            <small class="text-secondary">Distância: <span class="distancia">{{distancia}}</span> KM</small>
          </b-row>
          <b-row>
            <a :href="`https://www.google.com/maps/dir/?api=1&destination=${endereco.latitude},${endereco.longitude}`" target="_blank">
              <i class="fa fa-map-marker"></i>
              Rota
            </a>
          </b-row>
        </b-col>
      </b-row>
    </b-col>
    <slot name="enderecoOpcoes" :id="id" />
  </div>
</template>

<script>
  import DashSeparator from '@/components/atoms/DashSeparator'
  import WeatherCard from '@/components/molecules/WeatherCard'
  
  import localizador from '@/apis/localizador'
  import tempo from '@/apis/tempo'

  export default {
    name: 'address-card',
    props: {
      endereco: {},
      id: {
        type: Number
      }
    },
    computed: {
      distancia () {
        return this.userPosition ? localizador.distance(this.endereco, this.userPosition) : false
      }
    },
    asyncComputed: {
      async userPosition () {
        const userPosition = await localizador.getUserPosition()
        return userPosition
      },
      async clima () {
        const clima = await tempo.climaEnderecoAgora(this.endereco.latitude, this.endereco.longitude)
        return clima
      }
    },
    components: {DashSeparator, WeatherCard}
  }
</script>