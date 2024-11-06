import { useState, useEffect } from "react";
import Header from "../components/Header";
import CategoryPost from "../components/NewsByCategoryComponents/CategoryPost";
import { useParams } from "react-router-dom";
import { postsByCategory, categoryById } from "../utils/api";

const NewsByCategory = () => {
  const { categoryId } = useParams();
  const [categoryName, setCategoryName] = useState("");
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const loadContent = async () => {
    try {
      // Fetch posts and category name in parallel
      const [postResponse, categoryResponse] = await Promise.all([
        postsByCategory(categoryId, currentPage),
        categoryById(categoryId),
      ]);

      setPosts(postResponse.data);
      setTotalPages(postResponse.totalPages);
      setCategoryName(categoryResponse.name);
    } catch (error) {
      console.error("Error loading content:", error);
    }
  };

  useEffect(() => {
    loadContent();
  }, [categoryId, currentPage]);

  const renderPagination = () => {
    const maxPagesToShow = 5;
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    return (
      <>
        <li>
          <span
            className={`button ${currentPage === 1 ? "disabled" : ""}`}
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          >
            Prev
          </span>
        </li>
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
          <li key={i + startPage}>
            <a
              href="#"
              className={`page ${currentPage === i + startPage ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(i + startPage);
              }}
            >
              {i + startPage}
            </a>
          </li>
        ))}
        <li>
          <span
            className={`button ${currentPage === totalPages ? "disabled" : ""}`}
            onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
          >
            Next
          </span>
        </li>
      </>
    );
  };

  return (
    <div className="inner">
      <Header />
      <section>
        <header className="major">
          <h2>News about "{categoryName}" category</h2>
        </header>
        <div className="posts">
          {posts.map((post) => (
            <CategoryPost key={post.id} post={post} />
          ))}
        </div>
        <ul className="pagination">{renderPagination()}</ul>
      </section>
    </div>
  );
};

export default NewsByCategory;
