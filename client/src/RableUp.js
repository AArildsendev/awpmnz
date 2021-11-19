import { useEffect, useState } from "react";
const API_URL = process.env.REACT_APP_API;
function RableUp (props){
    const{id,rablerable,moaandeex,postUp} = props;
    
    const[rab,rabSet]=useState([]);
   
  
    

return(
    
    
    <div>
        <h1>{rablerable}</h1>
        
        <button
        onClick={()=>{postUp(props.id)}}>Rablerable</button>
       </div>)
      

 


}
export default RableUp;