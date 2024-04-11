import { useState, useEffect } from "react";
import Header from "../components/Header";
import Post from "../components/homeComponents/Post";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the WordPress REST API
    fetch("https://gazetashqiptare.al/wp-json/wp/v2/posts?_embed")
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
              Hi, I’m Editorial
              <br />
              by HTML5 UP
            </h1>
            <p>A free and fully responsive site template</p>
          </header>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.
          </p>
          <ul className="actions">
            <li>
              <a href="#" className="button big">
                Learn More
              </a>
            </li>
          </ul>
        </div>
        <span className="image object">
          <img src="images/pic10.jpg" alt="" />
        </span>
      </section>

      <section>
        <header className="major">
          <h2>Erat lacinia</h2>
        </header>
        <div className="features">
          <article>
            <span className="icon fa-gem"></span>
            <div className="content">
              <h3>Portitor ullamcorper</h3>
              <p>
                Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
                lorem feugiat tempus aliquam.
              </p>
            </div>
          </article>
          <article>
            <span className="icon solid fa-paper-plane"></span>
            <div className="content">
              <h3>Sapien veroeros</h3>
              <p>
                Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
                lorem feugiat tempus aliquam.
              </p>
            </div>
          </article>
          <article>
            <span className="icon solid fa-rocket"></span>
            <div className="content">
              <h3>Quam lorem ipsum</h3>
              <p>
                Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
                lorem feugiat tempus aliquam.
              </p>
            </div>
          </article>
          <article>
            <span className="icon solid fa-signal"></span>
            <div className="content">
              <h3>Sed magna finibus</h3>
              <p>
                Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
                lorem feugiat tempus aliquam.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section>
        <header className="major">
          <h2>Ipsum sed dolor</h2>
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
