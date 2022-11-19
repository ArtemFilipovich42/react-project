
import { useContext, useEffect } from "react";
import { Forma } from "../components/Forma";
import { Loader } from "../components/Loader";
import { Notes } from "../components/Notes";
import { FirebaseContext } from "../context/firebes/firebaseContext";


export const Page1 = () => {


    const { loading, notes, fetchNotes } = useContext(FirebaseContext)

    useEffect(() => {
        fetchNotes()
        
    },[])


    return (<div>
        <Forma />
        <hr />
        {loading ? <Loader /> : <Notes notes={notes} />}

        
    </div>)

}