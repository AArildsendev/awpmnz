import AddMoan from "./AddMoan";
import Moan from "./Moan"
function MoanList(props){
    
    const list = props.moanzlist.map((moaan,index) => (
    <li key={index}>
       <Moan moan={moaan}/>
    </li>
    
    ));
    
    return(
        <>
        <div>
        
        <ol>
        
        {list}
       
        </ol>
        <div>
        <AddMoan addMoan={props.addMoan}/>
        </div>
        </div>
        </>
    )
}
export default MoanList;