import http from '../config/config'

const ListarParlamentaresPorSigla = (sigla) => http.get(`https://dadosabertos.camara.leg.br/api/v2/deputados?siglaPartido=${sigla}&ordem=ASC&ordenarPor=nome`)

export {ListarParlamentaresPorSigla}
