<template>
  <b-input-group>
    <b-input-group-prepend>
      <b-input-group-text>{{legenda}}</b-input-group-text>
    </b-input-group-prepend>
    <b-form-input 
      type="text"
      @change="change"
    />
    <b-input-group-append>
      <b-button 
        variant="outline-secondary"
      >
        <i class="fa fa-search"/>
      </b-button>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
  export default {
    name: 'search-bar',
    props: {
      legenda: {
        type: String,
        default: 'Busca'
      }
    },
    methods: {
      change (e) {
        this.$emit('busca', e)
      }
    }
  }
</script>