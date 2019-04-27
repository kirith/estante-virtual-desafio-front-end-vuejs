
/**
 * Verifica se objeto possui determinada substring em alguma de suas propriedads
 * @param {Object} object Objeto a ser verificado
 * @param {String} substring Texto a ser procurado
 */

function containsSubstringInProperties (object, substring) {
  const arrayFiltrado = Object.values(object).filter(valor => valor.includes(substring))
  return arrayFiltrado.length
}

export default containsSubstringInProperties
