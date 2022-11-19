import { useContext } from "react"

import { AlertContext } from "../context/alert/alertContext"


export const Alert = () => {

  const {alert, hide} = useContext(AlertContext)

 


  
  

  return (
    <div>
      { alert.visible && 
      <div className={`alert alert-${alert.type || 'warning'} alert dismissible`} id="alertID">


        <strong>Внимание!</strong>
        {alert.text}
        <button onClick={hide} type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>

        </button>
      
    </div> } </div>
  ) 
}