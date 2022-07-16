import { Link } from "react-router-dom"
import "./login.css"

const Login = () => {
  return (
      <div className="login">
          <span className="loginTitle">Login</span>
          <form className="loginForm">
              <label>Email : </label>
              <input type="email" className="loginInput" placeholder="Enter Your Email ..." />
              <label>Password :</label>
              <input type="password" className="loginInput" placeholder="Enter Your Password ..." />
              <button className="loginButton">Login</button>
          </form>
          <Link to="/register" className="link">
            <button className="loginRegisterButton">Register</button>
          </Link>
      </div>
  )
}

export default Login