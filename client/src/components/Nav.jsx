import { Link, useHistory } from "react-router-dom";
import { logout } from "../services";

const Nav = (props) => {
  const history = useHistory();

  const clickHandler = async () => {
    await logout();
    props.setUser(null);
    history.push("/");
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      {props.user ? (
        <>
          <Link to="/user-profile"><span>Hi, {props.user.username}!</span></Link>
          <Link to="/login" onClick={clickHandler}>
            Log out
          </Link>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Nav;
