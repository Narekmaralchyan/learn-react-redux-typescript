import './App.css';
import React, {useEffect, useState} from 'react';

function App() {

  const [data,setData] = useState();
  useEffect(() => {
    fetch("https://mockend.com/org/repo/users")
        .then(res => {
          console.log(res)
            return res.json()
        })
        .then(data => {
            console.log(data)
            setData(data)
        })
  },[]);

  return (
    <div className="App">

    </div>
  );
}

export default App;
