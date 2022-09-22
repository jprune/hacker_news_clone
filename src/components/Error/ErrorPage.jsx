export default function ErrorPage({ data }) {
  return (
        <body>
        
        <header className="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">
                    HACKERNEWS
                </a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#" class="nav__link">Home</a>
                        </li>

                        <li className="nav__item">
                            <a href="#" class="nav__link">About</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">Contact</a>
                        </li>
                    </ul>

                    <div className="nav__close" id="nav-close">
                        <i className='bx bx-x'></i>
                    </div>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-grid-alt' ></i>
                </div>
            </nav>
        </header>

        <main className="main">
            
            <section className="home">
                <div className="home__container container">
                    <div className="home__data">
                        <span className="home__subtitle">Error 404</span>
                        <h1 className="home__title">Hey Buddy</h1>
                        <p className="home__description">
                            We can't seem to find the page <br> you are looking for.
                        </p>
                        <a href="#" className="home__button">
                            Head Home
                        </a>
                    </div>
                    
                    <div className="home__img">
                        <img src="./images/ghost-img.png" alt="Ghost pic">
                        <div class="home__shadow"></div>
                    </div>
                </div>

                <footer class="home__footer">
                    <span>(554) 987-654</span>
                    <span>|</span>
                    <span>info@company.com</span>
                </footer>
            </section>
        </main>

        
        <script src="/scrollreveal.min.js/scrollreveal.min.js"></script>

        </body>
      