import AddMoan from "./AddMoan";
import Moan from "./Moan"
function MoanList(props){
    const list = props.moanzlist.map((moaan,complaiin,rablerablee,index) => (
    <li key={index}>
       <Moan headline={moaan} complaint={complaiin} rablerable={rablerablee}/>
    </li>
    
    ));
    
    return(
        <div>
        
        <ol>
        {list}
        </ol>
        <div>
        <AddMoan/>
        </div>
        </div>
        
    )
}
export default MoanList;