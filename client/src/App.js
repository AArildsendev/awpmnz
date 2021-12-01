import { useEffect, useState} from "react";
import {Router} from "@reach/router"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import MoanList from "./MoanList";
import Moanz from "./Moanz"
import mogens from "./mogens.svg"



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
  getData();},[]);

  function getMoan(_id){

      return moanzlist.find(moanz => moanz._id === parseInt(_id));
 }

  function addComment(com,id){
    console.log(com)
    const comments={
      comment:com
    }

    const postCom = async() =>{
      const url = `${API_URL}/complaints/${id}/comments`
      const response = await fetch(url,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify(comments),
      });
      const reply = await response.json();
      setData(reply)
      console.log(reply)
    }
    postCom()
    //setData([...moanzlist])
    
    
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
        setData([...moanzlist,reply]);
      };
      postMaMoan();
      
      
    };

    function postUp(id,index,rablerable){
      console.log("id:"+id,"likes:"+rablerable,"index"+index)
      //const up = {rablerable:rablerable+1}
      const postRableUp = async() =>{
      const url = `${API_URL}/complaints/${id}`
      const response = await fetch(url,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify(),
        });
        const reply = await response.json();
        setData(moanzlist.map((mogens)=>{
          if(mogens._id===id){
            return reply
          }else{return mogens}
        }))
        console.log(reply)};
      
      postRableUp()
      
      
      }
 
  
  return (
    <>
    <div className="container-md">
      <img src={mogens} alt="mogen" width="200px" height="100px"/>
      <hr/>
      <Router>
       <MoanList path="/" moanzlist={moanzlist} setData={setData} addMoan={addMoan} postUp={postUp} getMoan={getMoan}></MoanList>
        <Moanz path="/moanz/:_id" getMoan={getMoan} addComment={addComment} moanzlist={moanzlist}/>
       </Router>
      </div>
     </>
  );
}



export default App;
