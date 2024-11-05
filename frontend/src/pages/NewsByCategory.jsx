import { useState, useEffect } from "react";
import Header from "../components/Header";
import CategoryPost from "../components/NewsByCategoryComponents/CategoryPost";
import { useParams } from "react-router-dom";

const NewsByCategory = () => {
  const { categoryId } = useParams();

  const [categoryName, setCategoryName] = useState("");
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

 

  const fetchPosts = () => {
    const api = `https://ubt.dritongashi.com/wp-json/wp/v2/posts?categories=${categoryId}&_embed&page=${currentPage}`;
    
    fetch(api)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const totalPages = parseInt(response.headers.get('X-WP-TotalPages')) || 1;
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

  const fetchCategoryName = () => {
    fetch(`https://ubt.dritongashi.com/wp-json/wp/v2/categories/${categoryId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch category");
        }
        return response.json();
      })
      .then((data) => {
        setCategoryName(data.name);
      })
      .catch((error) => {
        console.error("Error fetching category:", error);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, [categoryId, currentPage]);

  useEffect(() => {
    fetchCategoryName();
  }, [categoryId]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const paginationItems = [];
    const maxPagesToShow = 5;
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

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

    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <li key={i}>
          <a
            href="#"
            className={`page ${currentPage === i ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(i);
            }}
          >
            {i}
          </a>
        </li>
      );
    }

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
            <CategoryPost key={post.id} post={post} />
          ))}
        </div>
        <ul className="pagination">
          {renderPagination()}
        </ul>
      </section>
    </div>
  );
};

export default NewsByCategory;
