import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./screens/Home";
import Nav from "./components/Nav";
import Login from "./screens/Login";
import Register from "./screens/Register";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Nav user={user} setUser={setUser}/> 
      <Switch>
        <main>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register setUser={setUser}/>
          </Route>
          <Route path="/login">
            <Login setUser={setUser}/>
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;
