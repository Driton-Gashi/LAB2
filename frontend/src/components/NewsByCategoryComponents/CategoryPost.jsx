import { Link } from "react-router-dom";

const Post = ({ post }) => {

  const shortenExcerpt = (excerpt, wordLimit) => {
    const plainText = excerpt.replace(/<[^>]+>/g, ''); 
    const words = plainText.split(" ");
    if (words.length <= wordLimit) return plainText;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

    const image = post?._embedded['wp:featuredmedia'][0].source_url;
    return (
      <article>
        <Link to={`/post/${post.id}`} className="image">
          <img src={image} alt="" />
        </Link>
        <h3>{post?.title.rendered}</h3>
        <p>
       {shortenExcerpt(post?.excerpt.rendered, 50)}
        </p>
        <ul className="actions">
          <li>
          <Link to={`/post/${post.id}`} className="button">
           Read More
          </Link>
          </li>
        </ul>
      </article>
    );
  };
  
  export default Post;
  