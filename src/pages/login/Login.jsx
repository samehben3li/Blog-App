import "./login.css"
import { useContext, useRef } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { Context } from "../../context/Context"
import { LoginFailure, LoginStart, LoginSuccess } from "../../context/Actions"

const Login = () => {

  const username = useRef()
  const password = useRef()
  const { isFetching,dispatch,error } = useContext(Context)

  const handleSubmit =async(e) => {
    e.preventDefault()
    dispatch(LoginStart())
    try {
      const res = await axios.post("https://theknowerblog.herokuapp.com/api/auth/login", {
        username: username.current.value,
        password: password.current.value
      })
      dispatch(LoginSuccess(res.data))
    } catch (err) {
      dispatch(LoginFailure())
    }
  }

  return (
      <div className="login">
          <span className="loginTitle">Login</span>
          <form className="loginForm" onSubmit={handleSubmit}>
              <label>username : </label>
              <input ref={username} type="text" className="loginInput" placeholder="Enter Your username ..." />
              <label>Password :</label>
              <input ref={password} type="password" className="loginInput" placeholder="Enter Your Password ..." />
              <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
          </form>
          <Link to="/register" className="link">
            <button className="loginRegisterButton">Register</button>
          </Link>
          { error && 
          <span className="error">something went wrong !</span>
          }
      </div>
  )
}

export default Login