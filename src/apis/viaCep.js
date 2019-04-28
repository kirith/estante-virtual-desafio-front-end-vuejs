import { get } from 'axios'

/**
 * Busca endereço na API do ViaCep baseado no cep passado para função
 * @param {Number} cep CEP do endereço desejado
 * @return {Promise}
 */

export async function enderecoViaCep (cep) {
  let res = await get(`https://viacep.com.br/ws/${cep}/json`).then(data => data)
  return res
}
