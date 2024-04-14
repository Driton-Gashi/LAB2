import { useState, useEffect } from "react";
import Header from "../components/Header";
import CategoryPost from "../components/NewsByCategoryComponents/CategoryPost";

const NewsByCategory = ({ categoryName }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 10; // Adjust this value as needed

  useEffect(() => {
    fetchPosts();
  }, [categoryName, currentPage]);

  const fetchPosts = () => {
    fetch(`https://gazetashqiptare.al/wp-json/wp/v2/posts?category=${categoryName}&_embed&page=${currentPage}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const totalPages = parseInt(response.headers.get('X-WP-TotalPages'));
        setTotalPages(totalPages);
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const paginationItems = [];
    const maxPagesToShow = 5; // Adjust this value as needed
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    // Previous button
    paginationItems.push(
      <li key="prev">
        <span
          className={`button ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </span>
      </li>
    );

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <li key={i}>
          <a
            href="#"
            className={`page ${currentPage === i ? 'active' : ''}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </a>
        </li>
      );
    }

    // Next button
    paginationItems.push(
      <li key="next">
        <span
          className={`button ${currentPage === totalPages ? 'disabled' : ''}`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </span>
      </li>
    );

    return paginationItems;
  };

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
        {/* Pagination */}
        <ul className="pagination">
          {renderPagination()}
        </ul>
      </section>
    </div>
  );
};

export default NewsByCategory;
