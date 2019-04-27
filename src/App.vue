<template>
  <div id="app">
    <main-header />
    <main>
      <div class="container">
        <address-list :enderecos="enderecos"/>
      </div>
    </main>
    <main-footer />
  </div>
</template>

<script>
import MainHeader from '@/components/organisms/MainHeader.vue'
import MainFooter from '@/components/organisms/MainFooter.vue'
import AddressList from '@/components/organisms/AddressList.vue'

export default {
  name: 'app',
  data: function () {
    return {
      enderecos: [{
        cep: '21863090',
        endereco: 'Rua Luzia de Macedo Dantas',
        numero: '208',
        bairro: 'Bangu',
        complemento: 'Casa 101',
        cidade: 'Rio de Janeiro',
        uf: 'RJ'
      },
      {
        cep: '21863090',
        endereco: 'Rua Luzia de Dantas',
        numero: '208',
        bairro: 'Bangu',
        complemento: 'Casa 101',
        cidade: 'Rio de Janeiro',
        uf: 'SP'
      }]
    }
  },
  components: {
    AddressList,
    MainHeader,
    MainFooter
  }
}
</script>

<style>
html{
  height: 100%;
}
body {
  margin: 0;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
