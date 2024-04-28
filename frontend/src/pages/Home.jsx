import { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import Header from "../components/Header";
import Post from "../components/homeComponents/Post";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [latestPost, setLatestPost] = useState(null);

  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        const response = await fetch(
          "https://ubt.podemarketing.com/wp-json/wp/v2/posts?orderby=date&order=desc&per_page=1&_embed"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch latest post");
        }
        const data = await response.json();
        if (data && data.length > 0) {
          const latestPostData = data[0]; // Assuming the response is an array with one post
          setLatestPost(latestPostData);
        }
      } catch (error) {
        console.error("Error fetching latest post:", error);
      }
    };

    fetchLatestPost();
  }, []); // Run this effect only once when the component mounts


  useEffect(() => {
    fetch("https://ubt.podemarketing.com/wp-json/wp/v2/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        // Set the fetched posts to the state
        setUsers(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });

  }, [])
  
  
  useEffect(() => {
    // Fetch posts from the WordPress REST API
    fetch("https://ubt.podemarketing.com/wp-json/wp/v2/posts?_embed")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        return response.json();
      })
      .then((data) => {
        // Set the fetched posts to the state
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);
  return (
    <div className="inner">
      <Header />
      <section id="banner">
        <div className="content">
          <header>
            <h1>
              {latestPost && latestPost.title.rendered}
            </h1>
            <p>
              {latestPost &&
                formatDistanceToNow(new Date(latestPost.date), {
                  addSuffix: true,
                })}
            </p>
          </header>
          <p>
          {latestPost && latestPost.excerpt.rendered}
          </p>
          <ul className="actions">
            <li>
              <a href={latestPost && latestPost.link} className="button big">
                Read More
              </a>
            </li>
          </ul>
        </div>
        <span className="image object">
          <img src={latestPost && latestPost._embedded['wp:featuredmedia'][0].source_url} alt="" />
        </span>
      </section>

      <section>
        <header className="major">
          <h2>Authors</h2>
        </header>
        <div className="features">
        {users.map((user) => (
            <article title="Click To Read All Posts from this Author" key={user.id}>
            {/* <span className="icon fa-gem"></span> */}
           <a style={{border:"0"}} href={user.link}>
           <span className="icon">
            <img style={{transform:"rotate(45deg)"}} src={user.avatar_urls["96"]} alt="" />
            </span>
           </a>
            <div className="content">
              <a href={user.link}><h3>{user.name}</h3></a>
              <p>
                {user.description?user.description:"Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."}
              </p>
            </div>
          </article>
          ))}
        </div>
      </section>

      <section>
        <header className="major">
          <h2>Latest News</h2>
        </header>
        <div className="posts">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
