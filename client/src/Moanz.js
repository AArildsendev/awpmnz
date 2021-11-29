import { useEffect, useState } from "react";
import NewComment from "./NewComment";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const API_URL = process.env.REACT_APP_API;

function Moanz(props){
const {getMoan,_id,moanzlist} = props;
const[mm,mmSet]=useState([]);
useEffect(()=>{
    async function fetD(){
        //unødvendigt? - hvis jeg var lidt mere frisk kunne jeg nok måske have hentet App.js usestate istedet for at bruge en ny??

        const result = await fetch(`${API_URL}/complaints/${props._id}`);
        const mm = await result.json();
        mmSet(mm);
    }
        fetD();
    }, [props.moanzlist]);



return(
    <>
    
    
    <div>
    <h1>{mm.headline}</h1>
    <p1>{mm.complaint}</p1><br/>
    <p1>{mm.rablerable}</p1>
    </div>
    <div>
         {mm.comment ? (<ul className="list-group">
             {mm.comment.map((comment,index) => {
                 return( <li key={index} className="list-group-item">
                     {comment}
                 </li>
                 )}) }
         </ul>) : (
             <p1>No comments yet, be the first to comment</p1>
         ) }
       </div>
       <NewComment addComment={props.addComment} id={props._id}/>
   
   
    </>


)

}

export default Moanz;
