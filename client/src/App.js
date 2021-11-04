import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import MoanList from "./MoanList";
const API_URL = process.env.REACT_APP_API;

function App() {
 const [moanzlist,setData] = useState([]);

 useEffect(() => {
  async function getData() {
    const url = `${API_URL}/moanz`;
    const response = await fetch(url);
    const moanzlist = await response.json();
    setData(moanzlist);
  }
  getData(moanzlist);
 }, []);

  function addMoan(headline,complaint){
    const mogens = {
      headline:headline,
      complaint:complaint,
      };
      setData([...moanzlist,mogens])};
  
  
  

  

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
