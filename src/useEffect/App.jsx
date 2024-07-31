import React, { useEffect, useState } from 'react'

const App = () => {

let [count,setCount]=useState(0)

    useEffect(()=>{

        window.title="i clicked ${count} time"
    },[])

    let increment=()=>{
        setCount(count+1);
    }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>click here</button>
    </div>
  )
}

export default App
