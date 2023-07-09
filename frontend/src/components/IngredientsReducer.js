const reducer = (state, action) => {
   switch(action.type) {
       case 'ADD_INGREDIENT':
           return {
                   ingredients: [action.payload, ...state.ingredients]
           }
       case 'REMOVE_INGREDIENT':
           return {
               ingredients: state.ingredients.filter(item => item.name !== action.payload.name)
           }
       default:
           return state;
   }
}

export default reducer
