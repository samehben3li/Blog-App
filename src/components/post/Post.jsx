import { Link } from "react-router-dom"
import "./post.css"

export default function Post({post}) {

  const PF = "https://theknowerblog.herokuapp.com/uploads/"

  return (
    <div className="post">
        { post.photo && 
          <img src={ PF + post.photo } alt="" className="postImg" />
        }
        <div className="postInfo">
          <div className="postCats">
            { post.categories.map((cat,i)=>(
              <div className="postCat" key={i}>{cat.name}</div>
            )) }
          </div>
          <Link to={`/post/${post._id}`} className="link">
            <span className="postTitle">
              {post.title}
            </span>
          </Link>
          <hr />
          <span className="postDate">{ new Date(post.createdAt).toDateString() }</span>
        </div>
        <p className="postDesc">
          {post.desc}
        </p>
    </div>
  )
}
