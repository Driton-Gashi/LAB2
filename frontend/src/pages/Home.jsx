import { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import Header from "../components/Header";
import Post from "../components/homeComponents/Post";
import { fetchLatestPost, fetchUsers, fetchPosts } from "../utils/api";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [latestPost, setLatestPost] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const latestPostData = await fetchLatestPost();
        setLatestPost(latestPostData);

        const usersData = await fetchUsers();
        setUsers(usersData);

        const postsData = await fetchPosts();
        setPosts(postsData);
      } catch (error) {
        console.error("Error loading content:", error);
      }
    };

    loadContent();
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
              <a style={{ border: "0" }} href={`/author/${user.id}`}>
                <span className="icon">
                  <img style={{ transform: "rotate(45deg)" }} src={user.avatar_urls["96"]} alt="" />
                </span>
              </a>
              <div className="content">
                <a href={`/author/${user.id}`}>
                  <h3>{user.name}</h3>
                </a>
                <p>
                  {user.description
                    ? user.description
                    : "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."}
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
