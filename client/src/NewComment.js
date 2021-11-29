import { useState } from "react";
function NewComment(props){
    const{addComment,id} = props
   const{com,comSet}=useState();

    return(
       <div>
            <input
            name="com"
            id="com"
            onChange={(event) => comSet(event.target.value)}
            type="text"/>
            <button onClick={(event)=>{addComment(com,id)}}>
                Medbrok dig!
            </button>
        </div>
       
    )
    



}
export default NewComment;