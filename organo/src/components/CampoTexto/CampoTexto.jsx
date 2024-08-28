import "./CampoTexto.css"

const CampoTexto = () => {
    // return <h1> Olá </h1>
    // Forma mais simples
    return (
        <div className="campo-texto"> 
            <label>Nome</label>
            <input placeholder="Digite o seu nome" type="text"/>
        </div>
    )
}

// ARROW FUNCTION
// Pra que serve?
// Resolver problemas de escopo

// Mesma coisa que ffc
// function CampoTexto() {
//     return (  
//     );
// }

// export default CampoTexto;

export default CampoTexto