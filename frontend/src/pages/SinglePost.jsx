import Header from "../components/Header"
import {postById} from "../utils/api.js"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { formatDistanceToNow } from "date-fns"
const SinglePost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  useEffect(()=>{
    const getAuthorPosts = async () => {
      try {
        const postFetched = await postById(postId);
        setPost(postFetched);
        console.log(postFetched);
        
      } catch (error) {
        console.error(`Error fetching post with this id ${postId}:`, error);
      }
    };
    
    getAuthorPosts();

  },[])


  return (
    <div className="inner">
    <Header>
    <h2>{post.title.rendered}</h2>
    </Header>
    <section id="banner">
        <div className="content">
          <header>
            <h1>
              {post.title.rendered}
            </h1>
            <p>
              {post &&
                formatDistanceToNow(new Date(post.date), {
                  addSuffix: true,
                })}
            </p>
          </header>
          <p>
              {post.excerpt.rendered}
          </p>
          <ul className="actions">
            <li>
              <a className="button big">
                Read More
              </a>
            </li>
          </ul>
        </div>
        <span className="image object">
          {/* <img src={latestPost && latestPost._embedded['wp:featuredmedia'][0].source_url} alt="" /> */}
        </span>
      </section>
    
  </div>
  )
}

export default SinglePost
