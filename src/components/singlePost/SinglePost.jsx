import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
          <img src="/assets/img/9.jpeg" alt="" className="singlePostImg" />
          <h1 className="singlePostTitle">
            single post Title test
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">Author : <b>sameh</b></span>
            <span className="singlePostDate">1 hour ago</span>
          </div>
          <p className="singlePostDesc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quos quae accusamus id nesciunt excepturi, architecto nisi fuga et rem illum obcaecati saepe, ea quia libero maiores nulla unde deserunt!
            Aliquam facilis repellendus animi iusto, autem magnam possimus odit iure doloremque eum natus amet porro dolorem maxime voluptas, cumque sapiente, quisquam molestias commodi itaque. Magnam sint temporibus tempora dignissimos ab.
            Officiis, vitae minus delectus reiciendis eligendi ipsa laboriosam voluptatem suscipit quas repellat eos dicta facere deleniti, similique expedita illum ex natus quo labore ipsum praesentium. Reprehenderit, quae. Ab, laborum rem.
            Quaerat at ducimus ipsum, molestiae ad dolores est nemo debitis, adipisci error nihil. Earum sit quas necessitatibus in labore, reiciendis tenetur optio consequatur numquam qui sed sapiente quasi, officia aperiam!
            Nihil assumenda ducimus temporibus, similique nisi natus, maiores, amet ullam illo harum labore perspiciatis vero placeat iure dignissimos quod consectetur voluptatum. Repudiandae ex eaque dolores autem quidem assumenda molestiae obcaecati?
            Aliquam porro quasi doloremque impedit. Deleniti architecto minima inventore ullam saepe cupiditate necessitatibus aperiam tenetur nesciunt nisi mollitia laboriosam tempora voluptatem commodi, incidunt perspiciatis omnis quasi explicabo optio dignissimos ex?
          </p>
        </div>
    </div>
  )
}
