import { Link } from 'react-router-dom';
import image from '';
import errorStyling from './styles.js';

export default function ErrorPage() {
  return (
  <>
           <header className="header">
                <nav className="nav container" >
                    <h1 className="nav__logo">HACKERNEWS</h1>
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
                            <Link to="/" className="home__button">
                                Back to safety
                            </Link>
                        </div>
                        <div className="home__img">
                          <img src={image} alt="Ghost error pic" />
                            <div class="home__shadow"></div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
