import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import AddMoan from "./AddMoan";
import "./App.css";
import Moan from "./Moan";
import MoanList from "./MoanList";
import Moanz from "./Moanz";
const API_URL = process.env.REACT_APP_API;

function App() {
  const defa = 0
  const [moanzlist,setData] = useState([
    {
    headline: "Min chef er dum",
    complaint: "Han holder med brøndby",
    rablerable: defa},
    {
      
      headline:"Uha jeg er syg",
      complaint:"Jeg har feber :(",
      rablerable:defa
    }
  ]);


  function addMoan(headline,complaint){
    const mogens = {
      headline:headline,
      complaint:complaint };
      setData([...moanzlist,mogens])


    };
  
  
  

  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/moanz`;
      const response = await fetch(url);
      const data = await response.json();
      setData(moanzlist);
    }
    getData(moanzlist);
  }, []);

  return (
    <>
    <div>
      <h1>Moanz</h1>
      <h2>Complain here - Let the other MoanerZ hear you</h2>
      <MoanList moanzlist={moanzlist} addMoan={addMoan} />
      
      </div>
    </>
  );
}

// todo: Få Moanz listen til at vise og implementere nogen metoder til at tilføje moanz. 
// todo: Få routing til enkelte Moans til at virke og gøre det samme som ovenstående bare med comments
// todo: Få tingene til at hænge sammen med mongoose og databasen

export default App;
