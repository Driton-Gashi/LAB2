const Post = ({ post }) => {
  const authors = {
    "1":"Driton Gashi",
    "1Link":"https://ubt.podemarketing.com/author/admin/",
    "5": "Eliza",
    "5Link": "https://ubt.podemarketing.com/author/eliza/",
    "4": "Hajrije Berisha",
    "4Link": "https://ubt.podemarketing.com/author/eliza/",
    "3":"Henor Nimani",
    "3Link":"https://ubt.podemarketing.com/author/henor-nimani/"
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
      <p><strong>By <a href={authors[post.author+"Link"]}>{authors[post.author]}</a></strong></p>
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
