import Header from "../components/Header";
import { postById } from "../utils/api.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";

const SinglePost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAuthorPosts = async () => {
      try {
        const postFetched = await postById(postId);
        setPost(postFetched);
      } catch (error) {
        console.error(`Error fetching post with this id ${postId}:`, error);
        setError(error.message);
      }
    };
    getAuthorPosts();
  }, [postId]);

  const removeTags = (text) => {
    return text ? text.replace(/<[^>]+>/g, '') : '';
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!post) {
    return <p>Loading...</p>;
  }

  const { title, date, excerpt, content } = post;

  return (
    <div className="inner">
      <Header>
        <h2>{title?.rendered}</h2>
      </Header>
      <section id="banner">
        <div className="content">
          <header>
            <h1>{title?.rendered}</h1>
            <p>
              {date &&
                formatDistanceToNow(new Date(date), {
                  addSuffix: true,
                })}
            </p>
          </header>
          <p>{removeTags(excerpt?.rendered)}</p>
          <div dangerouslySetInnerHTML={{ __html: content?.rendered }} />
          <ul className="actions">
            <li>
              {/* <a className="button big" href={post.link}>
                Read More
              </a> */}
            </li>
          </ul>
        </div>
        {/* <span className="image object">
          {_embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
            <img src={_embedded["wp:featuredmedia"][0].source_url} alt={title?.rendered} />
          ) : (
            <p>No image available</p>
          )}
        </span> */}
      </section>
    </div>
  );
};

export default SinglePost;
