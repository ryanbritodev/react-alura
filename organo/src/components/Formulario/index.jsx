import CampoTexto from "../CampoTexto/CampoTexto";
import "./Formulario.css"

// Durante o curso, nós vamos trabalhar apenas com componentes funcionais. Essa é a forma mais simples de criar um componente React.
// Mas ela não é a única forma possível. Podemos criar componentes utilizando Classes do ES6 (https://cursos.alura.com.br/course/react-desenvolvendo-javascript/task/107417#:~:text=Durante%20o%20curso,do%20ES6).
// Aqui vai um exemplo de componente funcional e um componente baseado em classes:

// COMPONENTE FUNCIONAL
// function Formulario(props) {
//     return <h1>Olá, {props.nome}</h1>;
// }

// COMPONENTE BASEADO EM CLASSES
// class Formulario extends React.Component {
//     render() {
//         return <h1>Olá, {props.nome}</h1>;
//     }
// }

const Formulario = () => {
    return ( 
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
            </form>
        </section>
     );
}
 
export default Formulario;