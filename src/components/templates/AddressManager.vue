<template>
  <div class="container">
    <address-form @submitted="saveAddress" :editando="editando"/>
    <address-list :enderecos="enderecos">
      <template v-slot:enderecoOpcoes>
        <b-button-group>
          <b-button @click="editPost(1)"><i class="fa fa-edit"></i></b-button>
          <b-button class="bg-danger" @click="deletePost(0)"><i class="fa fa-trash"></i></b-button>
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
      async editPost (id, endereco) {
        this.editando = {...endereco}
        this.editandoIndex = id
      },
      async saveAddress (endereco) {
        console.log('save', endereco)
        bancoLocal.updateAddress(endereco, this.editandoIndex)
        this.editando = {} // reset form
        this.editandoIndex = null
        this.refreshAddresses()
      },
      async deletePost (id) {
        if (confirm('Are you sure you want to delete this post?')) {
          // if we are editing a post we deleted, remove it from the form
          if (this.editandoIndex === id) {
            this.editando = {}
          }
          bancoLocal.deleteAddress(id)
          this.refreshAddresses()
        }
      }
    },
    components: {AddressForm, AddressList}
  }
</script>