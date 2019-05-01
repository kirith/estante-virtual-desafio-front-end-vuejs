<template>
  <div class="container">
    <address-form @submitted="saveAddress" :editando="editando"/>
    <address-list :enderecos="enderecos">
      <template v-slot:enderecoOpcoes="{id}">
          <b-button-group>
            <b-button @click="editAddress(id)"><i class="fa fa-edit"></i></b-button>
            <b-button class="bg-danger" @click="deleteAddress(id)"><i class="fa fa-trash"></i></b-button>
          </b-button-group>
      </template>
    </address-list>
  </div>
</template>

<script>
  import bancoLocal from '@/apis/bancoLocal.js'

  import AddressList from '@/components/organisms/AddressList'
  import AddressForm from '@/components/organisms/AddressForm'

  export default {
    name: 'address-manager',
    data () {
      return {
        carregando: false,
        enderecos: [],
        editando: {},
        editandoIndex: null
      }
    },
    async created () {
      this.refreshAddresses()
    },
    methods: {
      async refreshAddresses () {
        this.carregando = true
        this.enderecos = bancoLocal.getAddresses()
        this.carregando = false
      },
      async editAddress (id) {
        this.editando = {...this.enderecos[id]}
        this.editandoIndex = id
      },
      async saveAddress (endereco) {
        bancoLocal.updateAddress(endereco, this.editandoIndex)
        this.editando = {} // reset form
        this.editandoIndex = null
        this.refreshAddresses()
      },
      async deleteAddress (id) {
        if (confirm('Confirmar a exclusão do endereço?')) {
          if (this.editandoIndex === id) {
            this.editando = {}
            this.editandoIndex = null
          }
          bancoLocal.deleteAddress(id)
          this.refreshAddresses()
        }
      }
    },
    components: {AddressForm, AddressList}
  }
</script>