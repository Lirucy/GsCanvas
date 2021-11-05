import { useState } from "react";
import { login } from "../services";
import { useHistory } from "react-router-dom"

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()

  const handleSubmit = async (e) => {
      e.preventDefault();
    
      const userInfo = {
          username, 
          password,
      };
      const user = await login(userInfo);
      props.setUser(user);
      history.push("/")
  }

  return (
    <section>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="fade" type="submit">Login</button>
      </form>
    </section>
  );
};

export default Login;