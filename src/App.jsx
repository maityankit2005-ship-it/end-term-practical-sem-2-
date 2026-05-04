import React from "react";
import Child from "./components/Child";

function App() {
  const name = "ankit";
  const age = 20;

  return (
    <div>
      <h1>Parent Component</h1>

      
      <Child name={name} age={age} />
    </div>
  )
}

export default App;