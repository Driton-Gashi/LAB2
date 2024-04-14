import React, { useState } from 'react';
import { Link, NavLink} from 'react-router-dom';
import Footer from "../components/Footer";

const Sidebar = () => {
    const [sidebarActive, setSidebarActive] = useState(false);

    const toggleSidebar = () => {
        setSidebarActive(!sidebarActive);
    };

    const toggleMenu = (event) => {
        event.preventDefault();
        const target = event.target;
        const opener = target.closest('.opener');
        const menuOpeners = document.querySelectorAll('#menu .opener');
        
        menuOpeners.forEach(openerElement => {
            if (openerElement !== opener) {
                openerElement.className.remove('active');
            }
        });
        
        if (opener) {
            opener.className.toggle('active');
            // You can trigger any additional event handling here if needed
        }
    };

    return (
        <div id="sidebar" className={sidebarActive ? '' : 'inactive'}>
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
                        <li><NavLink to="/">Homepage</NavLink></li>
                        <li><NavLink to="generic">Generic</NavLink></li>
                        <li><NavLink to="elements">Elements</NavLink></li>
                        <li><NavLink to="our-news">Our News</NavLink></li>
                        <li>
                            <span className="opener" onClick={toggleMenu}>Submenu</span>
                            <ul>
                                <li><a href="#">Lorem Dolor</a></li>
                                <li><a href="#">Ipsum Adipiscing</a></li>
                                <li><a href="#">Tempus Magna</a></li>
                                <li><a href="#">Feugiat Veroeros</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Etiam Dolore</a></li>
                        <li><a href="#">Adipiscing</a></li>
                        <li>
                            <span className="opener" onClick={toggleMenu}>Another Submenu</span>
                            <ul>
                                <li><a href="#">Lorem Dolor</a></li>
                                <li><a href="#">Ipsum Adipiscing</a></li>
                                <li><a href="#">Tempus Magna</a></li>
                                <li><a href="#">Feugiat Veroeros</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Maximus Erat</a></li>
                        <li><a href="#">Sapien Mauris</a></li>
                        <li><a href="#">Amet Lacinia</a></li>
                    </ul>
                </nav>

                <section>
                    <header className="major">
                        <h2>Ante interdum</h2>
                    </header>
                    <div className="mini-posts">
										<article>
											<a href="#" className="image"><img src="images/pic07.jpg" alt="" /></a>
											<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
										</article>
										<article>
											<a href="#" className="image"><img src="images/pic08.jpg" alt="" /></a>
											<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
										</article>
										<article>
											<a href="#" className="image"><img src="images/pic09.jpg" alt="" /></a>
											<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
										</article>
									</div>
                </section>

                <section>
                    <header className="major">
                        <h2>Get in touch</h2>
                    </header>
                    <p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
									<ul className="contact">
										<li className="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
										<li className="icon solid fa-phone">(000) 000-0000</li>
										<li className="icon solid fa-home">1234 Somewhere Road #8254<br />
										Nashville, TN 00000-0000</li>
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
