import './Rodape.css'

const Rodape = () => {
    return (<footer className='rodape'>
        <section>            
                <a href='www.facebook.com'> <img src='/imagens/fb.png'/></a>
                <a href='twitter.com'> <img src='/imagens/tw.png'/></a>
                <a href='www.instagram.com>'><img src='/imagens/ig.png'/></a>
        </section>

        <section>
            <img src='/imagens/logo.png'/>
        </section>

        <section>
            <h4>Desenvolvido por Alura.</h4>
        </section>
    </footer>

    )
}

export default Rodape