import { useState } from "react";
function NewComment(props){
    const{addcomment} = props
    const[com,comSet]=useState("")

    return(
        <form>
            <input
            name="com"
            id="com"
            onChange={(event) => comSet(event.target.value)}
            type="text"/>
            <button onClick={(event)=>{addcomment(com)}}>
                Medbrok dig!
            </button>
        </form>
    )
    export default NewComment;



}