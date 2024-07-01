import { useState } from 'react'

import Button from "./components/Button"

const App = () => {
  // Declaração das variaveis
  const [text, setText] = useState('A permissão será mostrada aqui')
  const [isEditing, setIsEditing] = useState(false)
  // Declaração do exemplo de objeto do perfil, com acesso em cada tela
  const [permissions] = useState(
    [
      {
        tela: 'Cadastro de Lead',
        acoes: [ 'v', 'save', 'edit', 'aprovar_spc' ]
      }
    ]
  )

  // Exemplo de ação que deve ser passada para um botão
  const actions = [
    {
      tela: 'Cadastro de Lead',
      acoes: [ 'save', 'aprovar_spc' ]
    },
    {
      tela: 'Cadastro de Lead',
      acoes: ['edit']
    }
  ]

  const style = {
    width: '50%',
    backgroundColor: '#6666cc',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px',
    padding: '5px'
  }

  // Retorno do botão para o componente pai, é preciso criar uma função para cada retorno do botão (Editar, salvar e etc)
  const save = (retorno) => {
    retorno.length > 0 ? setText(`${retorno}`) : setText('Sem permissão')
  }

  return (
    <div style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      Permissionamento por perfil

      {/* Chamada do botão */}
      <Button style={style} actions={isEditing ? actions[1] : actions[0]} textName={`${isEditing ? 'Alterar' : 'Gravar'} Lead`} returnToParent={save} permissions={permissions} />

      {text}

      <hr style={{ width: '100%' }}></hr>

      <button onClick={() => { setIsEditing(!isEditing) }}>{ isEditing ? 'Alterar para gravação' : 'Alterar para edição' }</button>
    </div>
  )
}

export default App