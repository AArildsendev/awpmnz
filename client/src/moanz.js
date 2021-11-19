import { useEffect, useState } from "react";
const API_URL = process.env.REACT_APP_API;

function Moanz(props){
const {getMoan,_id} = props;
const moanz = getMoan(_id);
const[mm,mmSet]=useState([]);
useEffect(()=>{
    async function fetD(){

        const result = await fetch(`${API_URL}/complaints/${props._id}`);
        const mm = await result.json();
        mmSet(mm);
    }
        fetD();
    }, []);



  


        /*<div>
         {moanz.comments ? (<ul>
             {moanz.comments.map((comment,index) => {
                 return( <li key={index}>
                     {comment}
                 </li>
                 )}) }
         </ul>) : (
             <p1>No comments yet, be the first to comment</p1>
         ) }
       </div>*/
//if(moanz === undefined){
   // return <p>This complain doesnt exist yet- write a complaint</p>
//} else
return(
    <>
    
    
    <div>
    <h1>{mm.headline}</h1>
    <p1>{mm.complaint}</p1><br/>
    <p1>{mm.rablerable}</p1>
    </div>
    {props.children}
   
   
    </>


)

}

export default Moanz;