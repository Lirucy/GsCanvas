import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./screens/Home";
import "./App.css";

function App() {
  
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <Route>
        <Home user={user}/>
      </Route>
    </div>
  );
}

export default App;
