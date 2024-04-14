import { useState, useEffect } from "react";
import Header from "../components/Header";
import CategoryPost from "../components/NewsByCategoryComponents/CategoryPost"

const NewsByCategory = ({categoryName}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the WordPress REST API
    fetch(`https://gazetashqiptare.al/wp-json/wp/v2/posts?category=${categoryName}&_embed`)
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
      <section>
        <header className="major">
          <h2>News about "{categoryName}" category</h2>
        </header>
        <div className="posts">
          {posts.map((post, index) => (
            <CategoryPost key={index} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsByCategory;
