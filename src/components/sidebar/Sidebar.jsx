import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./sidebar.css"

export default function Sidebar() {

  const [cats, setCats] = useState([])

  useEffect(() => {
    const getCats = async () => {
      try {
        const res = await axios.get("/categories")
        setCats(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getCats()
  }, [])

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="/assets/img/10.jpeg" alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
          dolores. Itaque laudantium accusamus dignissimos magni quae praesentium quis harum ad,
        </p>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">CATEGORIES</div>
        <ul className="sidebarList">
          { cats.map(c=>(
            <Link to={`/?cat=${c.name}`} className="link" key={c._id}>
              <li className="listItem">{c.name}</li>
            </Link>
          ))
          }
        </ul>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">FOLLOW US</div>
        <div className="sidebarIcon">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  )
}
