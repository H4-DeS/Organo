import './Card.css'
import { IoMdCloseCircleOutline } from "react-icons/io";

const Card = ({colaborador, cor, aoDeletar}) => {
    return ( <div className='colaborador'>
        <div className='deletar'>
            <IoMdCloseCircleOutline 
                size={25} 
                onClick={()=> aoDeletar(colaborador.id)}
            />
        </div>
        <div className='cabecalho' style={{backgroundColor: cor}}>
            <img src={colaborador.imagem}></img>
        </div>
        <div className='rodape'>
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
        </div>
    </div>
    )
}

export default Card