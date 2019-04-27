import {shallowMount} from '@vue/test-utils'
import AddressCard from '@/components/molecules/AddressCard'

const factory = (propsData) => shallowMount(AddressCard, propsData)

const mock = {
  endereco: 'Rua Coronel Eufrades',
  numero: '501',
  complemento: 'bl II/sl 10',
  cep: '22250040',
  bairro: 'Botafogo',
  cidade: 'Rio de Janeiro',
  uf: 'RJ'
}

describe('Endereço', () => {
  it('Elemento Card de Endereço deve ser renderizado', () => {
    const vm = factory({endereco: mock})
    expect(vm.exists()).to.equal(true)
  })
  it('Deve mostrar endereços conforme props', () => {
    const cepFormatado = '22250-040'
    const vm = factory({
      endereco: mock
    })

    expect(vm.find('.endereco').text()).to.equal(mock.endereco)
    expect(vm.find('.numero').text()).to.equal(mock.numero)
    expect(vm.find('.complemento').text()).to.equal(mock.complemento)
    expect(vm.find('.bairro').text()).to.equal(mock.bairro)
    expect(vm.find('.cep').text()).to.equal(cepFormatado)
    expect(vm.find('.cidade').text()).to.equal(mock.cidade)
    expect(vm.find('.uf').text()).to.equal(mock.uf)
  })
})
