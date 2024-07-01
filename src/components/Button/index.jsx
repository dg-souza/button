const Button = props => {
    // Declaração das props do botão
    const {
        textName,
        permissions,
        actions,
        returnToParent,
        style
    } = props

    // Função para tratar o permissionamento
    const onHandlerClick = () => {
        // Se o usuário possui a tela vinculada ao perfil
        if(permissions.find(e => e.tela === actions.tela)) {
            let index

            // eslint-disable-next-line
            permissions.find((e, i) => { if(e.tela === actions.tela) { index = i } })

            // Validação se o usuário tem todas as ações que foram solicitadas no botão
            if(Object.values(actions.acoes).every(e => Object.values(permissions[index].acoes).includes(e))) {
                returnToParent('O perfil tem as ações necessárias')
            } else {
                returnToParent('O perfil não tem as ações necessárias')
            }
        } else { returnToParent('O usuário não tem acesso a tela') }
    }

    return (
        <>
            <button style={style} onClick={() => { onHandlerClick() }}>{textName}</button>
        </>
    )
}

export default Button