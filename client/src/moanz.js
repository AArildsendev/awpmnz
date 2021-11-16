import { useEffect, useState } from "react";
const API_URL = process.env.REACT_APP_API;

function Moanz(props){
const {getMoan,_id} = props;
const moanz = getMoan(_id);



  


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
    {moanz.map((moanzz)=>{
    return(
    <div key={moanzz._id}>
    <p1>{moanzz.headline}</p1>
    <p1>{moanzz.complaint}</p1>
    <p1>{moanzz.rablerable}</p1>
    </div>
    );
    })
    
    
    }
    {console.log(getMoan)}
    </>


)

}

export default Moanz;