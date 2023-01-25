import React, { useEffect, useState } from 'react';
import axios from 'axios';
const App = () => {

  const [msg, setMsg] = useState("");
  const apiUrl = "https://qtfciktzbe.execute-api.ap-northeast-1.amazonaws.com/beta/";

  useEffect(() => {
    if(msg !== ""){
      
      axios.get(apiUrl)
      .then(function (response) {
        console.log(response);
        response.set({ 'Access-Control-Allow-Origin': '*' });
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },[msg]);
  
  return (
      <div>
        <p>home page.</p>
        <button onClick={() => setMsg("Hello nomurabbit")}>
          Click me
        </button>
      </div>
  );
}
  
export default App;