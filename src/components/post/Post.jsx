import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img src="/assets/img/9.jpeg" alt="" className="postImg" />
        <div className="postInfo">
          <div className="postCats">
            <div className="postCat">Music</div>
            <div className="postCat">Life</div>
          </div>
          <span className="postTitle">
            Post title test Blog app
          </span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo incidunt culpa enim molestias? Quaerat eaque cum tenetur dolores, architecto perferendis esse, nemo ipsum voluptatibus totam iste quidem, deleniti quasi in.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo incidunt culpa enim molestias? Quaerat eaque cum tenetur dolores, architecto perferendis esse, nemo ipsum voluptatibus totam iste quidem, deleniti quasi in.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo incidunt culpa enim molestias? Quaerat eaque cum tenetur dolores, architecto perferendis esse, nemo ipsum voluptatibus totam iste quidem, deleniti quasi in.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo incidunt culpa enim molestias? Quaerat eaque cum tenetur dolores, architecto perferendis esse, nemo ipsum voluptatibus totam iste quidem, deleniti quasi in.
        </p>
    </div>
  )
}
