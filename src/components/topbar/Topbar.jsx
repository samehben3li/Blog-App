import { Link } from "react-router-dom"
import "./topbar.css"

export default function Topbar() {
  return (
    <div className="top">
        <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="listItem">
                    <Link to="/" className="link">HOME</Link>
                </li>
                <li className="listItem">ABOUT</li>
                <li className="listItem">CONTACT</li>
                <li className="listItem">WRITE</li>
                <li className="listItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img src="/assets/img/14700236.jpg" alt="" className="topImg" />
            <i className="topSearchIcon fas fa-search"></i>
        </div>
    </div>
  )
}
