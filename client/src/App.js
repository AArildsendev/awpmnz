import { useEffect, useState } from "react";
import {Router} from "@reach/router"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import MoanList from "./MoanList";
import Moanz from "./Moanz"

const API_URL = process.env.REACT_APP_API;

function App() {
 const [moanzlist,setData] = useState([]);
 

useEffect(() => {
  async function getData() {
    const url = `${API_URL}/complaints/`;
    const response = await fetch(url);
    const moanzlist = await response.json();
    setData(moanzlist);
  }
  getData();

  
 }, []);

 

 
   function getMoan(_id){

      return moanzlist.find(moanz => moanz._id);
 }

  function addMoan(headline,complaint){
    const mogens = {
      headline:headline,
      complaint:complaint,
      };
      
      const postMaMoan = async() => {
        const url = `${API_URL}/complaints/`;
        const response = await fetch(url,{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body: JSON.stringify(mogens),
        });
        const reply = await response.json();
        console.log(reply);
      };
      postMaMoan();
      setData([...moanzlist,mogens]);
    };

    function postUp(rablerable){
      const id = getMoan()
      const up = {rablerable:rablerable}
      const postRableUp = async() =>{
      const url = `${API_URL}/complaints/${id}`
      const response = await fetch(url,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify(up),});
        const reply = await response.json();
        console.log(reply);
        
      };
      postRableUp()
      setData([...moanzlist,up])
      
    }
  
  
  return (
    <>
    <div>
      <h1>Moanz</h1>
      <h2>Complain here - Let the other MoanerZ hear you</h2>
      <Router>
       <MoanList path="/" moanzlist={moanzlist} addMoan={addMoan}></MoanList>
       <Moanz path="/complaints/:_id" getMoan={getMoan} moanzlist={moanzlist}></Moanz>
      </Router>
      </div>
     </>
  );
}



export default App;
