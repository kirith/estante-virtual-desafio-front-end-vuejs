<template>
  <b-card :title="(id !== null ? 'Editar Endereço' : 'Novo Endereço')">
    <form @submit.prevent="submit">
      <b-row class="py-2" >
        <b-input-group prepend="CEP*" class="col-12 justify-content-center">
          <b-form-input 
            type="text"
            v-model="endereco.cep"
            v-mask="'#####-###'"
            placeholder="00000-000"
            @change="buscarEndereco"
            required
          />
          <b-input-group-append class="py-2 px-3 align-items-center">
            <a href="http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCep.cfm" target="_blank">Não sei meu CEP</a>
          </b-input-group-append>
        </b-input-group>
      </b-row>
      <b-row class="py-2" v-if="endereco.uf">
        <b-input-group prepend="Número*" class="col-md-3 col-lg-3 col-xl-3">
          <b-form-input
            type="number"
            min="1"
            placeholder="0"
            v-model="endereco.numero"
            required
          />
        </b-input-group>
        <b-input-group prepend="Complemento" class="col-md-7 col-lg-7 col-xl-7">
          <b-form-input type="text" v-model="endereco.complemento"/>
        </b-input-group>
      </b-row>
      <div class="py-2" v-if="endereco.uf">
        <b-btn type="submit" variant="success">
          <template v-if="id !== null">
            Atualizar
          </template>
          <template v-else>
            Salvar
          </template>
            Endereço
        </b-btn>
        <b-btn class="bg-danger" @click="formNew">
          Cancelar
        </b-btn>
      </div>
    </form>
  </b-card>
</template>

<script>
  import {mask} from 'vue-the-mask'
  import {enderecoViaCep} from '@/apis/viaCep'

  export default {
    name: 'address-form',
    data: function () {
      return {
        endereco: this.editando,
        id: this.editandoId
      }
    },
    props: {
      editando: {
        cep: '',
        numero: '',
        complemento: ''
      },
      editandoId: null
    },
    watch: {
      editando (endereco) {
        this.endereco = endereco
      },
      editandoId (id) {
        this.id = id
      }
    },
    computed: {
      cep: function () {
        return this.endereco.cep.replace('-', '')
      }
    },
    methods: {
      buscarEndereco: function () {
        enderecoViaCep(this.cep).then(({data}) => {
          this.endereco = {...this.endereco, ...data}
        })
      },
      formReset () {
        this.endereco = {}
      },
      formNew () {
        this.id = null
        this.formReset()
      },
      submit () {
        this.$emit('submitted', {endereco: this.endereco, id: this.id})
      }
    },
    directives: {
      mask
    }
  }
</script>