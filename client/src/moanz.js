import Moan from "./Moan";
function Moanz(props){
const {_id,getMoan} = props;
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
if(moanz === undefined){
    return <p>This complain doesnt exist yet- write a complaint</p>
} else
return(
    <Moan headline={moanz.headline}/>
    

    
)



}

//export default Moanz;