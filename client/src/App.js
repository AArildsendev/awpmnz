import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import AddMoan from "./AddMoan";
import "./App.css";
import Moan from "./Moan";
import MoanList from "./MoanList";
import moanz from "./moanz";
const API_URL = process.env.REACT_APP_API;

function App() {
  const defa = 0
  const moanzlist = [{
    id:1,
    headline: "Min chef er dum",
    complaint: "Han holder med brøndby",
    rablerable: defa
  }]
  
  //const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/moanz`;
      const response = await fetch(url);
      const data = await response.json();
      //setData(data);
    }
    getData();
  }, []);

  return (
    <>
    <div>
      <h1>Moanz</h1>
      <br/>
      <h2>Complain here - Let the other MoanerZ hear you</h2>
      <p>Data from server:</p>
      
      <MoanList moanzlist={moanzlist}/>
      
      </div>
    </>
  );
}

// todo: Få Moanz listen til at vise og implementere nogen metoder til at tilføje moanz. 
// todo: Få routing til enkelte Moans til at virke og gøre det samme som ovenstående bare med comments
// todo: Få tingene til at hænge sammen med mongoose og databasen

export default App;
