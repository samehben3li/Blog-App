import "./register.css"

const Register = () => {
  return (
      <div className="login">
          <span className="loginTitle">Register</span>
          <form className="loginForm">
              <label>Username : </label>
              <input type="text" className="loginInput" placeholder="Enter Your Username ..." />
              <label>Email : </label>
              <input type="email" className="loginInput" placeholder="Enter Your Email ..." />
              <label>Password :</label>
              <input type="password" className="loginInput" placeholder="Enter Your Password ..." />
              <button className="loginButton">Register</button>
          </form>
          <button className="loginRegisterButton">Login</button>
      </div>
  )
}

export default Register