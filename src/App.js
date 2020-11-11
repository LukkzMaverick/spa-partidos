import { Fragment, useState, useEffect } from 'react';
import { ListarParlamentaresPorSigla } from './services/parlamentares';
import { ListarPartidos } from './services/partido';
import { ListGroup } from "react-bootstrap"


function App() {
  const [partidos, setPartidos] = useState([])
  const [parlamentares, setParlamentares] = useState([])
  async function listarPartidos() {
    const p = await ListarPartidos()
    setPartidos(p.data.dados)
  }
  useEffect(() => {
    listarPartidos()
  }, [])

  async function listarDeputados(sigla) {
    const d = await ListarParlamentaresPorSigla(sigla)
    setParlamentares(d.data.dados)
  }

  const showItemsList = (itemsList) => itemsList.map((item, index) => <li key={index}><ListGroup.Item >{item.nome}</ListGroup.Item></li>)

  return (
    <Fragment>
      <div class='container'>
        <select className='mb-4' onChange={(event) => listarDeputados(event.target.value)}>
        <option>Selecione um partido</option>
          {partidos.map((partido) => {
            return (<option key={partido.id} value={partido.sigla}>{partido.nome}</option>)
          })}
        </select>
        <ul>
          <ListGroup>
            {parlamentares.length !== 0  ? showItemsList(parlamentares) :(<p>Nenhum parlamentar desse partido foi eleito nesta legislatura.</p>)}

          </ListGroup>
        </ul>
      </div>
    </Fragment>
  );
}

export default App;
