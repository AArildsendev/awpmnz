import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "./App.css";
const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/recipes`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
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
      <ul>
        {data.map((item) => {
          return (
            <li key={item._id}>
              <strong>{item.title}</strong> (<code>{item._id}</code>)
            </li>
          );
        })}
      </ul>
      </div>
    </>
  );
}

export default App;
