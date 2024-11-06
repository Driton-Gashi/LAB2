import { Link } from "react-router-dom";
// Utility function to shorten excerpts
const shortenExcerpt = (excerpt, wordLimit) => {
  const plainText = excerpt.replace(/<[^>]+>/g, ''); 
  const words = plainText.split(" ");
  if (words.length <= wordLimit) return plainText;
  return words.slice(0, wordLimit).join(" ") + "...";
};

const Post = ({ post }) => {
  const authors = {
    "1": "Driton Gashi",
  };

  const image = post._embedded['wp:featuredmedia'][0].source_url;

  return (
    <article>
      <a href="#" className="image">
        <img src={image} alt="" />
      </a>
      <h3>{post.title.rendered}</h3>
      <p>{shortenExcerpt(post.excerpt.rendered, 40)}</p>
      <p>
        <strong>
          By <a href={`author/${post.author}`}>{authors[post.author]}</a>
        </strong>
      </p>
      <ul className="actions">
        <li>
          <Link to={`post/${post.id}`} className="button">
            Read More
          </Link>
        </li>
      </ul>
    </article>
  );
};

export default Post;
