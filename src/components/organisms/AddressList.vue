<template>
  <div>
    <search-bar 
      legenda="Filtro" 
      @busca="atualizarBusca"
    />
    <ul class="list-unstyled">
      <li v-for="(endereco, index) in enderecosFiltrados">
        <address-card class="item-endereco" :endereco ="endereco">
            <template v-slot:enderecoOpcoes>
              <slot name="enderecoOpcoes" :id="index" />
            </template>
        </address-card>
      </li>
    </ul>
  </div>
</template>

<script>
  import AddressCard from '@/components/molecules/AddressCard'
  import SearchBar from '@/components/molecules/SearchBar'
  import containsSubstringInProperties from '@/functions/containsSubstringInProperties'

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
          return this.busca ? containsSubstringInProperties(endereco, this.busca) : true
        })
      }
    },
    methods: {
      atualizarBusca (busca) {
        this.busca = busca
      }
    },
    components: {SearchBar, AddressCard}
  }
</script>