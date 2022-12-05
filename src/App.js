import './App.css';
import React, {useEffect, useState} from 'react';

function App() {

  const [data,setData] = useState();
  const [loading,setLoading] = useState(false);
  useEffect(() => {

    fetch("https://mockend.com/Narekmaralchyan/learn-react-redux-typescript/users")
        .then(res => {
          console.log(res)
            return res.json()
        })
        .then(data => {
            console.log(data)
            setData(data)
        })
  },[loading]);

  function addUser(){
      fetch("https://mockend.com/Narekmaralchyan/learn-react-redux-typescript/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: "Narek",
        age:25,
          id:"narekjan"
      })
  },[])
          .then(res=>res.json())
            .then(data=>{
                setLoading(prev=>!prev)
            })
  }

  return (
    <div className="App">
        <button onClick={addUser}>ADD</button>
    </div>
  );
}

export default App;
