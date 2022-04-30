import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(
    {
      nomeUsuario: "",
      mensagem: "",
      mensagensEnviadas: ["olá", "mundo"]
    }

  )
  const AlterarUsuario = (e) => {
    setState({ ...state,nomeUsuario: e.target.value })
    console.log(e.target.value)
  }

  const EnviarMensagem = () => {
    const NovasMensagens = [...state.mensagensEnviadas, state.nomeUsuario]
    setState({ mensagensEnviadas: NovasMensagens })
  }
  return (
    <div className="App">
      <div className="Mensagens">
        Aqui vai ficar as mensagens
        {state.mensagensEnviadas.map((item) => {
          return <div>{item}</div>
        })

        }
      </div>
      <div className='ContainerEnviarMensagens'>
        <input className='UsuarioInput' placeholder='Usuario' value={state.nomeUsuario} onChange={AlterarUsuario} />
        <input className="MensagemInput" placeholder='Mensagem' value={state.mensagem} />
        <button onClick={EnviarMensagem}>
          Enviar
        </button>
      </div>
    </div>
  );
}

export default App;
