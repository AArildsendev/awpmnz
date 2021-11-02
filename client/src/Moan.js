import RableUp from "./RableUp"

function Moan(props){

return(
    <div>
        <h2>{props.moan.headline}</h2> 
        <p>{props.moan.complaint}</p> 
        <p>{props.moan.rablerable}</p>
        <RableUp/>
    </div>
    
    
   
)

}
export default Moan