import RableUp from "./RableUp"

function Moan(props){
   
    

return(
    <div>
        
        <p>{props.moan.complaint}</p> 
        <p>{props.moan.rablerable}</p>
        <p>{props.moan._id}</p>
        
       
    </div>
    
    
   
)

}
export default Moan