
import { createContext, useReducer } from 'react'
import React from 'react'


 const DispatchContext = createContext()
 const StateContext = createContext()

function AppProvider({children}) {

    const initialState={
        cartItems : []
    }

const reducer = (state,action)=>{
   
    switch(action.type){
        case 'add_to_cart':
        return {...state,cartItems:[...state.cartItems ,action.payload]}
        default: { 
            return state
        }
    }
}

    const [state,dispatch] = useReducer(reducer,initialState)


    return (

        <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          {children}
        </StateContext.Provider>
        </DispatchContext.Provider>  

    )
}

export {AppProvider, DispatchContext, StateContext }