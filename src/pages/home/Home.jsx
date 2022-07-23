import { useState,useEffect } from "react"
import axios from "axios"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"
import { useLocation } from "react-router-dom"

export default function Home() {

  const [posts,setPosts] = useState([])
  const {search} = useLocation()

  useEffect(()=>{
    const getPosts = async()=>{
      const res = await axios.get("https://theknowerblog.herokuapp.com/api/posts"+search)
      console.log(res)
      setPosts(res.data)
    }
    getPosts()
  },[search])

  return (
    <>
    <Header />
    <div className="home">
      <Posts posts={posts} />
      <Sidebar />
    </div>
    </>
  )
}
