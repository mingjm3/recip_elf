const reducer = (state, action) => {
    console.log({ state, action })
    switch(action.type) {
        case 'LOG_IN' || 'SIGN_UP':
            let { token, profile } = action.payload
            console.log('reducer', { token, profile })
            return {
                    token,
                    name: profile.name,
                    server: state.server,
                    dietaryRestrictions: profile.dietaryRestrictions
            }
        case 'LOGOUT':
            return action.payload
        default:
            return state;
    }
 }
 
 export default reducer
 