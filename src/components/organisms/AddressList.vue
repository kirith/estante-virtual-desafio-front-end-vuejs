<template>
  <ul>
    <li v-for="endereco in enderecosFiltrados">
      <address-card class="item-endereco" :endereco ="endereco" />
    </li>
  </ul>
</template>

<script>
  import AddressCard from '@/components/molecules/AddressCard'

  export default {
    name: 'address-list',
    data: function () {
      return {
        busca: ''
      }
    },
    props: {
      enderecos: Array
    },
    computed: {
      enderecosFiltrados () {
        return this.enderecos.filter(endereco => {
          return this.busca ? Object.values(endereco).includes(this.busca) : true
        })
      }
    },
    components: {AddressCard}
  }
</script>