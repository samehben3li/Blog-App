import { useState, useEffect } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"
import "./single.css"
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"

export default function Single() {

  const [post, setPost] = useState({})
  const postId = useLocation().pathname.split("/")[2]

  useEffect(() => {
    const getPost = async ()=>{
      const res = await axios.get("/posts/"+postId)
      setPost(res.data)
    }
    getPost()
  }, [postId])

  return (
    <div className="single">
        <SinglePost post={post} />
        <Sidebar />
    </div>
  )
}
