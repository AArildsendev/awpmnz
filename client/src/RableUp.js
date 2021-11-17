import { useEffect, useState } from "react";
import Moan from "./Moan";
const API_URL = process.env.REACT_APP_API;

function RableUp (props){
    const {raBup,getMoan} = props;
    const [rablerable,setRableRable] = useState(props.rablerable);


    useEffect(()=>{
        //Brug getMoan til at få fat rablerable count og brug det i din setRableRable
    })
   return(
      <div>
       <button
       type="button"
       onClick={(event)=>
       setRableRable(props.rablerable+1),
       {raBup(rablerable)
       }}> RableUP</button>
       </div>
    
    
 
 

 
)
   

}
export default RableUp