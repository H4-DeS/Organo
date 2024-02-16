import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario'
import Times from './componentes/Times'
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const[colaboradores, setColaboradores] = useState([])

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278',
      /* corSecundaria: '#D9F7E9' */
    },
    {
      id: uuidv4(),
      nome: 'Front End',
      cor: '#82CFFA',
      /* corSecundaria: '#E8F8FF' */
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157',
      /* corSecundaria: '#F0F8E2' */
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69',
      /* corSecundaria: '#FDE7E8' */
    },
    {
      id: uuidv4(),
      nome: 'UX Design',
      cor: '#D86EBF',
      /* corSecundaria: '#FAE5F5' */
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FEBA05',
      /* corSecundaria: '#FFF5D9' */
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
      /* corSecundaria: '#FFEEDF' */
    }
  ]);

  const aoNovoColaboradorCadastrado = (colaborador) => {
      setColaboradores([...colaboradores, colaborador])
  }
  console.log(colaboradores)

  function aoDeletarColaborador(evento) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== evento))
  }

  function mudaCorTime (cor, id) {
    setTimes(times.map(time => {
      if (time.id === id){
        time.cor=cor;
      }
      return time; 
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={aoNovoColaboradorCadastrado}
      />
      {times.map((time,index) => 
      <Times 
        key={index}
        time={time}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={aoDeletarColaborador}
        aoMudarCor={mudaCorTime}
      />)}
      <Rodape />

    </div>
  );
}

export default App;
