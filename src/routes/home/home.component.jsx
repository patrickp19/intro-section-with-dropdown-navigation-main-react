import "./home.styles.css";
const Home = () => {
  return (
    <main>
      <div className="content-container">
        <div className="hero">
          <div className="hero-img"></div>
          {/* <img src="./images/image-hero-mobile.png" alt="" /> */}
        </div>
        <div className="main-content flow-content">
          <h1>Make remote work</h1>
          <p>
            Get your team in sync no matter your location. Streamline processes,
            create team rituals, and watch productivity soar.
          </p>
          <a className="btn cta" href="/">
            Learn more
          </a>
          <ul>
            <li>
              <img src="./images/client-databiz.svg" alt="" />
            </li>
            <li>
              <img src="./images/client-audiophile.svg" alt="" />
            </li>
            <li>
              <img src="./images/client-meet.svg" alt="" />
            </li>
            <li>
              <img src="./images/client-maker.svg" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Home;
