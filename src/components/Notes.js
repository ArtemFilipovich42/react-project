import { useContext } from "react"

import { FirebaseContext } from "../context/firebes/firebaseContext"


export const Notes = ({ notes }) => {

   

    const {removeNote} = useContext(FirebaseContext)
    return (
        <ul className="list-group">
            {notes.map(note => (<li
                key={note.id}
                className="list-group-item, note">
               <div>
                <strong>{note.title}</strong>

                <small>{new Date().toLocaleDateString()}</small>
                </div>
                
                <button onClick={() => {removeNote(note.id)}} type="button" className="btn btn-outline-danger, btn-sm"> &times;</button>
               
            </li>
            ))}

        </ul>
    )
}