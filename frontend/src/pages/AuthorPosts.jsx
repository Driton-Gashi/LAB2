// src/pages/AuthorPosts.jsx

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPostsByAuthor } from "../utils/api";
import Post from "../components/homeComponents/Post";
import Header from "../components/Header";
const AuthorPosts = () => {
  const { authorId } = useParams();
  const [authorPosts, setAuthorPosts] = useState([]);
  const [authorName, setAuthorName] = useState("");
  useEffect(() => {
    const getAuthorPosts = async () => {
      try {
        const posts = await fetchPostsByAuthor(authorId);
        setAuthorName(posts[0]._embedded.author[0].name);
        setAuthorPosts(posts);
      } catch (error) {
        console.error("Error fetching author posts:", error);
      }
    };

    getAuthorPosts();
  }, [authorId]);

  return (
    <div className="inner">
      <Header>
      <h2>Posts by {authorName}</h2>
      </Header>
      <section className="posts">
        {authorPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
};

export default AuthorPosts;
