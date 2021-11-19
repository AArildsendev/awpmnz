import { useEffect, useState } from "react";
const API_URL = process.env.REACT_APP_API;
function RableUp (props){
    const{id,rablerable} = props;
    
    const[rab,rabSet]=useState([])
    useEffect(() => {
        async function getData() {
          const url = `${API_URL}/complaints/${id}`;
          const response = await fetch(url);
          const rab = await response.json();
          rabSet(rab);
        }
        getData();
      
        
       }, []);
   
    
    

return(
    
    
    <div>
        <h1>{rablerable}</h1>
        
        <button
        onClick={}>Rablerable</button>
       </div>)
      

 


}
export default RableUp;