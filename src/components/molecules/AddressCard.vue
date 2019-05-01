<template>
  <div class="card text-left p-3">
    <b-col>
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
    </b-col>
    <slot name="enderecoOpcoes" :id="id" />
  </div>
</template>

<script>
  import DashSeparator from '@/components/atoms/DashSeparator'

  export default {
    name: 'address-card',
    props: {
      endereco: {},
      id: {
        type: Number
      }
    },
    components: {DashSeparator}
  }
</script>