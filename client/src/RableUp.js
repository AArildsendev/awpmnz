import { useEffect, useState } from "react";
const API_URL = process.env.REACT_APP_API;
function RableUp (props){
   const{postUp,id,index,rablerable}= props

  
   function handleall(){
      
      postUp(id,index,rablerable)
      
      
   }
   
   

  
return(
    <div>
    
    <button type="button" onClick={(e)=>handleall()}>RableUp</button>
    </div>
   )
  
      

 


}
export default RableUp;