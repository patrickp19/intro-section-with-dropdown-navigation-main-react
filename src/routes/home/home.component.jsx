import "./home.styles.css";

import databiz from "../../images/client-databiz.svg";
import audiophile from "../../images/client-audiophile.svg";
import clientMeet from "../../images/client-meet.svg";
import clientMaker from "../../images/client-maker.svg";

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
              <img src={databiz} alt="databiz" />
            </li>
            <li>
              <img src={audiophile} alt="audiophile" />
            </li>
            <li>
              <img src={clientMeet} alt="client meet" />
            </li>
            <li>
              <img src={clientMaker} alt="client maker" />
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Home;
