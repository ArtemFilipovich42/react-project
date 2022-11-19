
import { useReducer } from "react"
import { HIDE_ALERT, SHOW_ALERT } from "../alertType"
import { AlertContext } from "./alertContext"
import { alertReduser } from "./alertReduser"

export const AlertState = ({ children }) => {

   const [state, dispatch ] = useReducer(alertReduser, {visible: false} )

   const show = (text, type = 'warning') => {
    dispatch({
        type: SHOW_ALERT,
        payload:{text, type}
    })
   }
    const hide = () => dispatch({type: HIDE_ALERT})

     const value = {
        hide,
        show,
        alert:state
     }

    return (
        <AlertContext.Provider value={value} >

            {children}

        </AlertContext.Provider>
    )
        }