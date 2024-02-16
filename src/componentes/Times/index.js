import './Times.css'
import Card from '../Card'

const Times = ({colaboradores, time, aoDeletar}) => {

    return (
       colaboradores.length  > 0 && <section className='time' style={{backgroundColor: time.corSecundaria}}>
            <h3 style={{borderColor: time.corPrimaria}}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador,index) => 
                    <Card 
                        key={index} 
                        colaborador={colaborador}
                        cor={time.corPrimaria}
                        aoDeletar={aoDeletar}
                    />)}
            </div>
        </section>
    )
}

export default Times