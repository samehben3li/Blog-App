import "./sidebar.css"

export default function Sidebar() {
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
          <li className="listItem">Life</li>
          <li className="listItem">Music</li>
          <li className="listItem">Style</li>
          <li className="listItem">Sport</li>
          <li className="listItem">Tech</li>
          <li className="listItem">Cinema</li>
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
