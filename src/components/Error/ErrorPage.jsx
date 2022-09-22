export default function ErrorPage({ data }) {
    return (
        <body>
        
            <header className="header">
                <nav className="nav container">
                    <a href="#" className="nav__logo">
                        HACKERNEWS
                    </a>
                </nav>
            </header>

            <main className="main">
            
                <section className="home">
                    <div className="home__container container">
                        <div className="home__data">
                            <span className="home__subtitle">Error 404</span>
                            <h1 className="home__title">Hey Buddy</h1>
                            <p className="home__description">
                                We can't seem to find the page <br> you are looking for.</br>
                            </p>
                            <a href="#" className="home__button">
                                Head Home
                            </a>
                        </div>
                    
                        <div className="home__img">
                            <img src="./images/ghost-img.png" alt="Ghost pic"></img>
                            <div class="home__shadow"></div>
                        </div>
                    </div>
                </section>
            </main>
        </body>
    )
}
