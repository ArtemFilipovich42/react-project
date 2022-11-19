
import { useContext, useReducer } from "react"

import { FirebaseContext } from "./firebaseContext"
import { firebaseReduser } from "./firebaseReduser"
import axios from "axios"
import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER, DEFAULT } from "../firebaseType"
import { AlertContext } from "../alert/alertContext"

let url = 'https://react-project-fe81-default-rtdb.firebaseio.com'

export const FirebaseState = ({ children }) => {

    const initialState = {
        notes: [],
        loading: false
    }

    const [state, dispatch] = useReducer(firebaseReduser, initialState)

    const showLoader = () => { dispatch({ type: SHOW_LOADER }) }

    const fetchNotes = async () => {
        showLoader()

        const res = await axios.get(`${url}/notes.json`)

        if (res.data)

       { const payload = Object.keys(res.data).map((key) => {
            return {
                ...res.data[key],
                id:key
            }
         
        })
        dispatch({
            type:FETCH_NOTES,
            payload
        })} else { dispatch({DEFAULT})}

     
    }

    const addNote = async (title) => {

        const note = {
            title,
            date: new Date().toJSON(),
        }


        try {
            const res = await axios.post(`${url}/notes.json`, note)
            const payload ={
                ...note,
                id: res.data.name
            }

            dispatch({
                type:ADD_NOTE,
                payload
            })
        } catch (error) {
              throw new Error(error.message)
        }
       

        
    }

    const alert = useContext(AlertContext)

    const removeNote = async (id) => {
        await axios.delete(`${url}/notes/${id}.json`)

        dispatch({
            type:REMOVE_NOTE,
            payload: id
        })
       alert.show("Заметка была удалена")
    }

    const value = {
        removeNote,
        addNote,
        fetchNotes,
        showLoader,
        loading: state.loading,
        notes: state.notes
    }

    return (
        <FirebaseContext.Provider value={value}>

            {children}

        </FirebaseContext.Provider>
    )
}