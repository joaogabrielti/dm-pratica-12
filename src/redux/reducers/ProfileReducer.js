const initialState = {nome: '', telefone: '', email: '', foto: null}

const ProfileReducer = (state = null, action) => {
    switch (action.type) {
        case 'updateNome':
            return {...state, nome: action.payload}
        case 'updateTelefone':
            return {...state, telefone: action.payload}
        case 'updateEmail':
            return {...state, email: action.payload}
        case 'updateFoto':
            return {...state, foto: action.payload}
        default:
            return initialState
    }
}

export default ProfileReducer