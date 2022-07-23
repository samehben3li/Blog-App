import axios from "axios"
import { useLocation } from "react-router-dom"
import { useContext, useState, useEffect} from "react"
import { Link, useNavigate } from "react-router-dom"
import { Context } from '../../context/Context'
import "./singlePost.css"

export default function SinglePost() {

  const { user } = useContext(Context)
  const navigate = useNavigate()
  const [title,setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)
  const [updateMode, setUpdateMode] = useState(false)
  const [post, setPost] = useState({})
  const postId = useLocation().pathname.split("/")[2]
  const PF = "https://theknowerblog.herokuapp.com/uploads/"

  useEffect(() => {
    const getPost = async ()=>{
      const res = await axios.get("https://theknowerblog.herokuapp.com/api/posts/"+postId)
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
    }
    getPost()
  }, [postId])

  const handleDelete = async (e) => {
    try {
      await axios.delete("https://theknowerblog.herokuapp.com/api/posts/"+post._id,{data: {username: user.username}})
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  const handleUpdate = async(e) => {
    const updatedPost = {
      username: user.username,
      title,
      desc
    }
    if (file){
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append("name",filename)
      data.append("file",file)
      updatedPost.photo = filename
      try {
        await axios.post("https://theknowerblog.herokuapp.com/api/upload",data)
      } catch (err) {
        console.log(err)
      }
    }
    try {
      await axios.put("https://theknowerblog.herokuapp.com/api/posts/"+post._id,updatedPost)
      setUpdateMode(false)
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
          { ( post.photo || file ) &&
            <img src={file ? URL.createObjectURL(file) : PF + post.photo} alt="" className="singlePostImg" />
          }
          { updateMode 
          ? 
          <div className="inputWrapper">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{ display:"none" }} onChange={(e)=>setFile(e.target.files[0])} />
            <input type="text" value={title} onChange={e=>setTitle(e.target.value)} className="singlePostTitleInput" />
          </div>
          : <h1 className="singlePostTitle">
            { title }
            { post.username === user?.username && 
              <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}></i>
                <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
              </div>
            }
          </h1>
          }
          <div className="singlePostInfo">
            <span className="singlePostAuthor">Author : 
              <Link to={`/?user=${post.username}`} className="link">
                <b>{ post.username }</b>
              </Link>
            </span>
            <span className="singlePostDate">{ new Date(post.createdAt).toDateString() }</span>
          </div>
          { updateMode 
          ? <textarea value={ desc } onChange={e=>setDesc(e.target.value)} className="singlePostDescInput"></textarea>
          : <p className="singlePostDesc">
            {post.desc}
          </p>
          }
          {updateMode && <button className="updateBtn" onClick={handleUpdate}>Update</button>}
        </div>
    </div>
  )
}
