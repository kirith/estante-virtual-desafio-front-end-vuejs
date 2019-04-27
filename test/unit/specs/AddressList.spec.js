import {shallowMount} from '@vue/test-utils'
import AddressList from '@/components/organisms/AddressList'

const factory = (propsData) => shallowMount(AddressList, {propsData})

describe('Lista de Endereços', () => {
  it('Elemento Lista de Endereços deve ser renderizada', () => {
    const vm = factory()
    expect(vm.exists()).to.equal(true)
  })

  it('Deve renderizar itens da da lista de endereço', () => {
    const vm = factory()

    expect(vm.$el.querySelector('.item-endereco')).to.exist()
  })
})
