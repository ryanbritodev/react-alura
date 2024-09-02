import Banner from './components/Banner';
import Formulario from './components/Formulario';

// Import emite o tipo de arquivo
// É possível alterar o nome dos arquivos para um diferente do componente para assim realizar só uma chamada nos imports
// Exemplo: CampoTexto.jsx ---> index.jsx
// Importação = "./components/CampoTexto"
// Realizei o uso de uma constante no banner como exemplo
// Pq criei um arquivo index.jsx?
// O meu banner é meu componente e o index é somente o que eu estou exportando
// Assim, você preserva que todos tenham acesso a tudo

function App() {
  return (
    <div className="App">
      <Banner/>
      <Formulario/>
    </div>
  );
}

export default App;
