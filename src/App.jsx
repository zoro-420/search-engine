import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);  

  return (
    <>
      <header>
        <div className="header">
          <h1>WELCOME TO SEARCH ENGINE</h1>
        </div>
      </header>
      <div className="container">
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Search here..."
        />
        <button
          onClick={() => {
            fetch("/api/search?text=" + text)
              .then((response) => response.json())
              .then((results) => {
                setResults(results); 
              })
              .catch((error) => console.error("Failed to search!", error));
          }}
        >
          Click here to search
        </button>
        <ul>
          <style>
            {`
              ul {
                list-style-type: none;
                padding: 0;
              }
              li {
                margin: 10px 0;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
              }
              a {
                text-decoration: none;
                color: blue;
              }
              a:hover {
                text-decoration: underline;
              }
            `}
            
          </style>
        {
          results.map((item, index) => (
            <li key={index}>
              <a href={item.url} target="_blank">
                {item.url}  </a>
                <div>{item.title}
                </div>
               
 </li>
          ))
          
        }
      </ul>
      </div>
    </>
  );
}

export default App;
