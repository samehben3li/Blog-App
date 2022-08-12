import "./topbar.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../../context/Context"
import { Logout } from "../../context/Actions"

export default function Topbar() {

    const { user, dispatch } = useContext(Context)
    const PF = "https://theknowerblog.herokuapp.com/uploads/"

    const handleLogout = () => {
        dispatch(Logout())
    }

  return (
    <div className="top">
        <div className="topLeft">
            <a className="link" href="https://www.linkedin.com/in/sameh-benali-9381191a7/" rel="noreferrer" target="__blank"><i className="topIcon fab fa-linkedin"></i></a>
            <a className="link" href="https://github.com/samehben3li" rel="noreferrer" target="__blank"><i className="topIcon fab fa-github-square"></i></a>
            <a className="link" href="https://samehben3li.netlify.app/" rel="noreferrer" target="__blank"><i className="topIcon fas fa-globe"></i></a>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="listItem">
                    <Link to="/" className="link">HOME</Link>
                </li>
                <li className="listItem">ABOUT</li>
                <li className="listItem">CONTACT</li>
                <li className="listItem"><Link to="/write" className="link" >WRITE</Link></li>
                { user && <li className="listItem" onClick={handleLogout}>LOGOUT</li> }
            </ul>
        </div>
        <div className="topRight">
            { user
            ? <>
                <Link to="/settings" className="link"><img src={user.profilePic ? PF + user.profilePic : "/assets/img/default-avatar.jpg"} alt="" className="topImg" /></Link>
                <i className="topSearchIcon fas fa-search"></i>
              </>
            :<ul className="topList">
                <li className="listItem"><Link to="/register" className="link">Register</Link></li>
                <li className="listItem"><Link to="/login" className="link">Login</Link></li>
            </ul> }
        </div>
    </div>
  )
}
