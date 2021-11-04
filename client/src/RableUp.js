import { useEffect, useState } from "react";
import Moan from "./Moan";

function RableUp (){

const [rable, setRable] = useState(0);
const [dis,setDis] = useState(false);

useEffect(()=>{
    <Moan rablerable={rable}/>
   
},[rable]);



//useEffect(()=>{
  //  setDis(true)
//})


return(
    
    <>
    <div>
        <p1>{rable}</p1>
        <button disabled={dis} onClick={()=>setRable(rable+1)}> Rablerable</button>
    </div>
    </>

 
)
   

}
export default RableUp