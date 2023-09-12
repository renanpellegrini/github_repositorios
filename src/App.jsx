import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Perfil/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formEstaVisivel, setFormEstaVisivel] = useState ()
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    //a tag poderia ser uma div ou qualquer outra coisa, mas vazia é chamada de fragmento
      <>
      <input type='text' onBlur={(e) => setNomeUsuario(e.target.value)}></input>
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
      

      {/* {formEstaVisivel && (
        <Formulario/>
      )}

      <button onClick={() => setFormEstaVisivel(!formEstaVisivel)}>Toggle Form</button> */}
      </>
    )
}

export default App
