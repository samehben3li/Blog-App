import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./sidebar.css"

export default function Sidebar() {

  const [cats, setCats] = useState([])

  useEffect(() => {
    const getCats = async () => {
      try {
        const res = await axios.get("https://theknowerblog.herokuapp.com/api/categories")
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
            <a className="link" href="https://www.linkedin.com/in/sameh-benali-9381191a7/" rel="noreferrer" target="__blank"><i className="sidebarIcon fab fa-linkedin"></i></a>
            <a className="link" href="https://github.com/samehben3li" rel="noreferrer" target="__blank"><i className="sidebarIcon fab fa-github-square"></i></a>
            <a className="link" href="https://samehben3li.netlify.app/" rel="noreferrer" target="__blank"><i className="sidebarIcon fas fa-globe"></i></a>
        </div>
      </div>
    </div>
  )
}
