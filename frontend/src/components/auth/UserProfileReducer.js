const reducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN':
            const { token, profile } = action.payload
            return {
                    token,
                    name: profile.name,
                    allergies: profile.allergies
            }
        case 'LOGOUT':
            return action.payload
        default:
            return state;
    }
 }
 
 export default reducer
 