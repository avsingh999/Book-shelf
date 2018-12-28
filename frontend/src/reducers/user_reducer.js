export default function(state = {}, action){
    switch (action.type) {
        case 'USER_LOGIN':
            return {...state, login:action.payload}
            
        case 'USER_AUTH':
            return {...state, login:action.payload}
        case 'GET_USER_POST':
            return {...state, userPost:action.payload}
        case 'GET_USER':
            return {...state, user:action.payload}
        case 'USER_REGISTER':
            return {...state, register:action.payload.success,  user:action.payload.user}
        default:
                return state
    }
}