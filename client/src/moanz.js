function Moanz(props){
const {id,getmoan} = props;
const moanz = getmoan(id);

if(moanz === undefined){
    return <p>This complain doesnt exist yet- write a complaint</p>
} else
return(
    <div>
        <h3>{moanz.headline}</h3><br/>
        <p>{moanz.complaint}</p><br/>
        <p>Amount of rablerable: {moanz.rablerable}</p>
        <div>
         {moanz.comments ? (<ul>
             {moanz.comments.map((comment,index) => {
                 return( <li key={index}>
                     {comment}
                 </li>
                 )}) }
         </ul>) : (
             <p1>No comments yet, be the first to comment</p1>
         ) }
       </div>
    </div>
    

    
)



}

export default Moanz;