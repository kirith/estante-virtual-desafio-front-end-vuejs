class BancoLocal {
  __localStorageName__ = 'listaDeEnderecos'

  constructor () {
    this.createLocalStructure()
  }

  /**
   * Cria estrutura inicial garantindo que ela seja sempre um array em seu uso nos demais métodos
   */
  createLocalStructure () {
    const estrutura = []

    if (!localStorage.getItem(this.__localStorageName__)) this.setLocal(estrutura)
  }

  /**
   * Abstrai o methodo de salvar um valor para o LocalStorage, convertendo o valor em string automaticamente
   * @param {*} valor
   */
  setLocal (valor) {
    const strValor = JSON.stringify(valor)
    localStorage.setItem(this.__localStorageName__, strValor)
  }

  /**
   * Retorna endereços salvos no LocalStorage
   * @return {Array} Lista dos endereços salvos localmente
   */
  getAddresses () {
    const enderecos = JSON.parse(localStorage.getItem(this.__localStorageName__))
    return enderecos
  }

  /**
   * Salva endereço no LocalStorage
   * @param {Object} endereco Endereço a ser salvo
   */
  saveAddress (endereco) {
    let enderecos = [...this.getAddresses()]
    enderecos.push(endereco)
    this.setLocal(enderecos)
  }

  /**
   * Deleta endereço do localStorage baseado no id passado
   * @param {Integer} id Index do endereço no array
   */
  deleteAddress (id) {
    let enderecos = [...this.getAddresses()]
    enderecos.splice(id, 1)
    this.setLocal(enderecos)
  }

  /**
   * Atualiza ou cria um endereço do Local storage baseado nos parâmetros
   *
   * @param {Integer} id Index do endereço no array, se nulo cria novo endereço
   * @param {Object} endereco Valores a serem atualizados no endereço
   */
  updateAddress (endereco, id = null) {
    if (id == null) this.saveAddress(endereco)
  }
}

export default new BancoLocal()
