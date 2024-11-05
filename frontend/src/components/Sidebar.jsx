import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const Sidebar = ({ changeCategoryName }) => {
  const [categories, setCategories] = useState([]);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [isfirstSubmenuActive, setisFirstSubmenuActive] = useState(false);
  const [isSecondSubmenuActive, setisSecondSubmenuActive] = useState(false);


  useEffect(() => {
    fetch("https://ubt.dritongashi.com/wp-json/wp/v2/categories")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Categories");
        }
        return response.json();
      })
      .then((data) => {
        // Set the fetched posts to the state
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching Categories:", error);
      });

  }, [])
  

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const toggleFirstMenu = () => {
    if (isfirstSubmenuActive) {
      setisFirstSubmenuActive(false);
    } else {
      setisFirstSubmenuActive(true);
    }
  };
  const toggleSecondMenu = () => {
    if (isSecondSubmenuActive) {
      setisSecondSubmenuActive(false);
    } else {
      setisSecondSubmenuActive(true);
    }
  };
  return (
    <div id="sidebar" className={sidebarActive ? "" : "inactive"}>
      <div className="inner">
        <section id="search" className="alt">
          <form method="post" action="#">
            <input type="text" name="query" id="query" placeholder="Search" />
          </form>
        </section>

        <nav id="menu">
          <header className="major">
            <h2>Menu</h2>
          </header>
          <ul>
            <li>
              <NavLink to="/">Homepage</NavLink>
            </li>
            <li>
              <NavLink to="our-news">Our News</NavLink>
            </li>
            <li>
              <span
                className={`opener ${isfirstSubmenuActive ? "active" : ""}`}
                onClick={toggleFirstMenu}
              >
                Sipas Kategorive
              </span>
              <ul>
              {
                categories.map((category)=>(
                  <li key={category.id}>
                    <NavLink
                      to={`/news-by-category/${category.id}`}
                      onClick={() => {
                        changeCategoryName(category.id);
                      }}
                    >
                      {category.name}
                    </NavLink>
                  </li>
                ))
              }

               
              </ul>
            </li>

           
            <li>
              <span
                className={`opener ${isSecondSubmenuActive ? "active" : ""}`}
                onClick={toggleSecondMenu}
              >
                Another Submenu
              </span>
              <ul>
                <li>
                  <a href="#">Lorem Dolor</a>
                </li>
                <li>
                  <a href="#">Ipsum Adipiscing</a>
                </li>
                <li>
                  <a href="#">Tempus Magna</a>
                </li>
                <li>
                  <a href="#">Feugiat Veroeros</a>
                </li>
              </ul>
            </li>
           
          </ul>
        </nav>

        <section>
          <header className="major">
            <h2>Ante interdum</h2>
          </header>
          <div className="mini-posts">
            <article>
              <a href="#" className="image">
                <img src="images/pic07.jpg" alt="" />
              </a>
              <p>
                Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                dolore aliquam.
              </p>
            </article>
            <article>
              <a href="#" className="image">
                <img src="images/pic08.jpg" alt="" />
              </a>
              <p>
                Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                dolore aliquam.
              </p>
            </article>
            <article>
              <a href="#" className="image">
                <img src="images/pic09.jpg" alt="" />
              </a>
              <p>
                Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                dolore aliquam.
              </p>
            </article>
          </div>
        </section>

        <section>
          <header className="major">
            <h2>Get in touch</h2>
          </header>
          <p>
            Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit
            lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam
            facilisis ante interdum. Sed nulla amet lorem feugiat tempus
            aliquam.
          </p>
          <ul className="contact">
            <li className="icon solid fa-envelope">
              <a href="#">information@untitled.tld</a>
            </li>
            <li className="icon solid fa-phone">(000) 000-0000</li>
            <li className="icon solid fa-home">
              1234 Somewhere Road #8254
              <br />
              Nashville, TN 00000-0000
            </li>
          </ul>
        </section>

        <Footer />
      </div>

      {/* Toggle link */}
      <Link to="#" className="toggle" onClick={toggleSidebar}>
        Toggle
      </Link>
    </div>
  );
};

export default Sidebar;
