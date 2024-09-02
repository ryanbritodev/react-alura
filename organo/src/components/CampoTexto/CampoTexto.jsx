import "./CampoTexto.css"

// Implicitamente, o React retorna a os parâmetros dessa função, ou no caso desse exemplo, uma arrow function, chamdos de Props

const CampoTexto = (props) => {

    // Utilizar crase em Template String para fazer interpolação/concatenação de strings
    const placeholderModificada = `${props.placeholder}...`

    // return <h1> Olá </h1>
    // Forma mais simples

    // Vendo o que ele retorna dentro dos parênteses, onde estão os "Props"
    // console.log(props.label)


    return (
        <div className="campo-texto"> 
            {/* Dentro do JSX, é preciso colocar o valor dos props entre chaves */}
            <label>
                {props.label}
            </label>
            <input placeholder={placeholderModificada}/>

            {/* É possível de ser feito também */}
            {/* input placeholder={`${props.placeholder}`...} */}
            
            {/* Utilizando somente o placeholder, os três pontinhos não são concatenados, eles apenas foram
            concatenados devido ao Template String*/}
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