import axios from "axios"
import { useRef,useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import "./register.css"

const Register = () => {

    const username = useRef()
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()
    const [error, setError] = useState(false)

    const handleRegister = async(e)=>{
        e.preventDefault()
        setError(false)
        try {
            const res = await axios.post("https://theknowerblog.herokuapp.com/api/auth/register",{
                username: username.current.value,
                password: password.current.value,
                email: email.current.value
            })
            res.data && navigate("/login")
        } catch (err) {
            setError(true)
        }
    }

  return (
      <div className="login">
          <span className="loginTitle">Register</span>
          <form className="loginForm" onSubmit={handleRegister}>
              <label>Username : </label>
              <input ref={username} type="text" className="loginInput" placeholder="Enter Your Username ..." />
              <label>Email : </label>
              <input ref={email} type="email" className="loginInput" placeholder="Enter Your Email ..." />
              <label>Password :</label>
              <input ref={password} type="password" className="loginInput" placeholder="Enter Your Password ..." />
              <button type="submit" className="loginButton" >Register</button>
          </form>
          <Link to="/login" className="link">
            <button className="loginRegisterButton">Login</button>
          </Link>
          { error && 
          <span className="error">something went wrong !</span>
          }
      </div>
  )
}

export default Register