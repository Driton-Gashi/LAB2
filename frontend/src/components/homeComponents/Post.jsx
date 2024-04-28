const Post = ({ post }) => {
  const authors = {
    "1":"Driton Gashi",
    "5": "Eliza",
    "4": "Hajrije Berisha",
    "3":"Henor Nimani"
  }

  const image = post._embedded['wp:featuredmedia'][0].source_url;
  return (
    <article>
      <a href="#" className="image">
        <img src={image} alt="" />
      </a>
      <h3>{post.title.rendered}</h3>
      <p>
       {post.excerpt.rendered}
      </p>
      <p>{authors[post.author]}</p>
      <ul className="actions">
        <li>
          <a href={post.link} className="button">
            More
          </a>
        </li>
      </ul>
    </article>
  );
};

export default Post;
