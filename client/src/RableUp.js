import { useEffect, useState } from "react";
import Moan from "./Moan";
const API_URL = process.env.REACT_APP_API;

function RableUp (props){
//const{id,getmoan} = props;
//const moanz = getmoan(id);
const[rablerable,setRable] = useState(0);

useEffect(()=>{
   <Moan rablerable={rablerable}/>
    },[rablerable]);

return(
    
    
    <div>
        
        <button
        onClick={()=>{setRable(rablerable+1)}}>Rablerable</button>
       </div>
 

 
)
   

}
export default RableUp