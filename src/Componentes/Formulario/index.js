import CampoTexto from '../CampoTexto'
import Dropdown from '../Dropdown'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
                <Dropdown label="Time" placeholder="Escolha seu time" />
            </form>
        </section>
    )
}

export default Formulario