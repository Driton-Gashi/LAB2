import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// CSS
import "./css/main.css";
import "./css/fontawesome-all.min.css";
import "./css/style.css"

// pages & components
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import OurNews from "./pages/OurNews";
import NewsByCategory from "./pages/NewsByCategory";
import AuthorPosts from "./pages/AuthorPosts";
import SinglePost from "./pages/SinglePost";
import SearchedPosts from "./pages/SearchedPosts";

function App() {
const [category, setCategory] = useState(4)
const updateCategory = (newCategory) => {
  setCategory(newCategory);

};
  return (
    <>
      <BrowserRouter>
        <div id="wrapper">
          <main id="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/our-news" element={<OurNews />} />
              <Route path="/news-by-category/:categoryId" element={<NewsByCategory categoryID={category} />} />
              <Route path="/author/:authorId" element={<AuthorPosts />} />
              <Route path="/post/:postId" element={<SinglePost/>}/>
              <Route path="/search/:word" element={<SearchedPosts/>}/>
              
            </Routes>
          </main>
          <Sidebar changeCategoryName={updateCategory}/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
