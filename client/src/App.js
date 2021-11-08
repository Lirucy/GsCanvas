import { Link, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./screens/Home";
import Nav from "./components/Nav";
import ArtDetail from "./screens/ArtDetail";
import Bio from "./screens/Bio";
import EditComment from "./screens/EditComment";
import Login from "./screens/Login";
import Register from "./screens/Register";
import UserProfile from "./screens/UserProfile";
import "./App.css";
import "./css/ArtDetail.css";
import "./css/Bio.css";
import "./css/EditComment.css";
import "./css/Home.css";
import "./css/Login.css";
import "./css/Nav.css";
import "./css/Register.css";
import "./css/UserProfile.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Nav user={user} setUser={setUser} />
      <div className="divider" style={{ color: "darkred" }}>
        -
      </div>
      <Link to="/bio">
        <div id="app-title" className="fade">
          G's Canvas
        </div>
      </Link>
      <div className="divider" style={{ color: "darkred" }}>
        -
      </div>
      <Switch>
        <main>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register setUser={setUser} />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/user-profile">
            <UserProfile user={user} />
          </Route>
          <Route path="/edit-comment/:id">
            <EditComment />
          </Route>
          <Route path="/art/:id">
            <ArtDetail user={user} />
          </Route>
          <Route path="/bio">
            <Bio />
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;
