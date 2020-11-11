import http from '../config/config'

const ListarPartidos = () => http.get(`/partidos?ordem=ASC&ordenarPor=sigla`)

export {ListarPartidos}