import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import { useContext, useState } from "react"
import { Context } from "../../context/Context"
import axios from "axios"
import { DeleteUserFailure, DeleteUserSuccess, UpdateUserFailure, UpdateUserStart, UpdateUserSuccess } from "../../context/Actions"

export default function Settings() {

  const { user,dispatch } = useContext(Context)
  const [username,setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [file,setFile] = useState(null)
  const [succes, setSucces] = useState(false)
  const PF = "https://theknowerblog.herokuapp.com/uploads/"

  const handleDelete = async () =>{
    try {
      await axios.delete("https://theknowerblog.herokuapp.com/api/users/"+user._id,{ data: {userId: user._id} })
      dispatch(DeleteUserSuccess())
    } catch (err) {
      console.log(err)
      dispatch(DeleteUserFailure())
    }
  }

  const handleSubmit = async e =>{
    e.preventDefault()
    dispatch(UpdateUserStart())
    setSucces(false)
    const updatedUser = {
      userId: user._id,
    }
    if(username!==""){
      updatedUser.username = username
    }
    if (email!==""){
      updatedUser.email = email
    }
    if (password!==""){
      updatedUser.password = password
    }
    if (file){
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append("name",filename)
      data.append("file",file)
      updatedUser.profilePic = filename
      try {
        await axios.post("https://theknowerblog.herokuapp.com/api/upload",data)
      } catch (err) {
        console.log(err)
      }
    }
    try {
      const res = await axios.put("https://theknowerblog.herokuapp.com/api/users/"+user._id,updatedUser)
      setSucces(true)
      dispatch(UpdateUserSuccess(res.data))
    } catch (err) {
      dispatch(UpdateUserFailure())
      console.log(err)
    }
  }

  return (
    <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle" onClick={handleDelete}>Delete Account</span>
          </div>
          <form className="settingsForm" onSubmit={handleSubmit}>
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img src={ file ? URL.createObjectURL(file) :  user.profilePic ? PF + user.profilePic : "/assets/img/default-avatar.jpg" } alt="" />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} onChange={e=>setFile(e.target.files[0])} />
            </div>
            <label>Username : </label>
            <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)} />
            <label>Email : </label>
            <input type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)} />
            <label>Password : </label>
            <input type="password" onChange={e=>setPassword(e.target.value)} />
            <button className="settingsSubmit" type="submit">Update</button>
            { succes &&  <span className="success" >profile has been updated !</span> }
          </form>
        </div>
        <Sidebar />
    </div>
  )
}
