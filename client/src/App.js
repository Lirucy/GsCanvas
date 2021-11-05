import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./screens/Home";
import Nav from "./components/Nav";
import ArtDetail from "./screens/ArtDetail"
import EditComment from "./screens/EditComment";
import Login from "./screens/Login";
import Register from "./screens/Register";
import UserProfile from "./screens/UserProfile";
import "./App.css";
import "./css/Nav.css"

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
          <Route path="/user-profile">
            <UserProfile user={user}/>
          </Route>
          <Route path="/edit-comment/:id">
            <EditComment />
          </Route>
          <Route path="/art/:id">
            <ArtDetail user={user}/>
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;
