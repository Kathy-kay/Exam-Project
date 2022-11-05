

export const reducer = (state, action) => {
    switch (action.type) {
      case 'Increment':
        return state + 1 
  
      case 'Decreament':
        return  state - 1 
  
      case 'Reset':
        return  0 
  
      case 'Set':
        return  state = action.payload
  
      default:
        return state;
    }
  }
 
