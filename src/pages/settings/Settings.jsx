import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img src="/assets/img/14700236.jpg" alt="" />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} />
            </div>
            <label>Username : </label>
            <input type="text" placeholder="Sameh" />
            <label>Email : </label>
            <input type="email" placeholder="samehbenali415@gmail.com" />
            <label>Password : </label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <Sidebar />
    </div>
  )
}
