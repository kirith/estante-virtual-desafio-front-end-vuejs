<template>
  <div class="text-left p-3">
    <b-col>
      <b-row>
        <span class="endereco">{{endereco.endereco}}</span>,
        <span class="numero">{{endereco.numero}}</span> -
        <span class="complemento">{{endereco.complemento}}</span> -
        <span class="bairro">{{endereco.bairro}}</span>
      </b-row>
      <b-row>
        <span class="cidade">{{endereco.cidade}}</span> -
        <span class="uf">{{endereco.uf}}</span>
        <span class="cep">{{cepFormatado}}</span>
      </b-row>
    </b-col>
  </div>
</template>

<script>
  export default {
    name: 'address-card',
    props: {
      endereco: {}
    },
    computed: {
      cepFormatado: function () {
        return [this.endereco.cep.slice(0, 5), '-', this.endereco.cep.slice(5)].join('')
      }
    }
  }
</script>