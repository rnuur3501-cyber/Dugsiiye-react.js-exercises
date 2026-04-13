import { useEffect, useState } from "react";

function App () {

  const [name, setName] = useState("Rahma");
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    document.title =  name + " " +  greeting;
    console.log(greeting);
  }, [ name , greeting]);

  return (
    <div>
      <h2>Enter your name</h2>
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)} 
      />

      <h2>Choose a Greeting</h2>
      <input 
        type="text" 
        value={greeting}
        onChange={(e) => setGreeting(e.target.value)} 
      />
    </div>
  );
}

export default App;