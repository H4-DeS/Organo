import './Times.css'
import Card from '../Card'
import hexToRgba from 'hex-to-rgba';

const Times = ({colaboradores, time, aoDeletar, aoMudarCor}) => {

    return (
       colaboradores.length  > 0 && <section className='time' style={{backgroundColor: hexToRgba(time.cor,0.4)}}>
            <input onChange={evento => aoMudarCor(evento.target.value, time.id)} value={time.cor} type='color' className='cor'/>
            <h3 style={{borderColor: time.cor}}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador,index) => 
                    <Card 
                        key={index} 
                        colaborador={colaborador}
                        cor={time.cor}
                        aoDeletar={aoDeletar}
                    />)}
            </div>
        </section>
    )
}

export default Times