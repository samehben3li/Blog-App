import { Link } from "react-router-dom"
import "./singlePost.css"

export default function SinglePost({post}) {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
          { post.photo &&
            <img src={post.photo} alt="" className="singlePostImg" />
          }
          <h1 className="singlePostTitle">
            { post.title }
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">Author : 
              <Link to={`/?user=${post.username}`} className="link">
                <b>{ post.username }</b>
              </Link>
            </span>
            <span className="singlePostDate">{ new Date(post.createdAt).toDateString() }</span>
          </div>
          <p className="singlePostDesc">
            {post.desc}
          </p>
        </div>
    </div>
  )
}
