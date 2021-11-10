import { Link } from "@reach/router";
import Moan from "./Moan"
import AddMoan from "./AddMoan";
import RableUp from "./RableUp";
const API_URL = process.env.REACT_APP_API;
function MoanList(props){
   const list = props.moanzlist.map((moaan,index) => (
    <li key={index}>
      <Link to={`${API_URL}/complaints/${moaan._id}`}>Gå til dette moan</Link>
      <Moan moan={moaan}/>
      <RableUp rablerable={moaan.rablerable}/>
      
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