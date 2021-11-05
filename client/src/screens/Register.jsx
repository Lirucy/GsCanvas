import { useState } from "react";
import { useHistory } from "react-router-dom"
import { register } from "../services";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()

  const handleSubmit = async (e) => {
      e.preventDefault();
    
      const newUser = {
          username, 
          email, 
          password,
      };
      const user = await register(newUser);
      props.setUser(user);
      history.push("/")
  }

  return (
    <section id="register-body">
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="fade" type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Register;