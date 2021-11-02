import { Route } from "react-router-dom";
import Home from "./screens/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route>
        <Home />
      </Route>
    </div>
  );
}

export default App;
