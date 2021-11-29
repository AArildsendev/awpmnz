import {useState} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
function AddMoan(props){
    const{addMoan} = props;
    const[headline, setHeadline] = useState("");
    const[complaint,SetComplaint] = useState("");
    
   return(
        <div>
            <h3>Moan</h3>
            <div>
                <label htmlFor="headline">Who or what is responsible for your moaning</label><br/>
                <input
                name="headline"
                id="headline"
                onChange={(event) => setHeadline(event.target.value)}
                type="text"
                
                />
            </div>
            <div>
                <label htmlFor="complaint">Elaborate for more sympathy and venting</label><br/>
                <input
                name="complaint"
                id="complaint"
                onChange={(event) => SetComplaint(event.target.value)}
                type="text"
                
                />
            </div>
            <button 
            type="button"
            className="btn-danger"
            onClick={(event) =>{
            addMoan(headline,complaint);
                
            }}> MOAN! </button>

        </div>


    )
}

export default AddMoan;