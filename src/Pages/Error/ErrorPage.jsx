import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <>
      <header className="header">
        <nav className="nav container">
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
                Unable to find the page <Br> you are looking for.</Br>
              </p>
              <Link to="/" className="home__button">
                Back to safety
              </Link>
            </div>
            <div className="home__img">
              <img src={image} alt="Ghost error pic" />
              <div className="home__shadow" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
