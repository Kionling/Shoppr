import React from "react";
import ShopprLogo from "../Images/logoshort.png";
import WelcomeStyles from "../Styles/welcome.css";
import Video from "../Images/skies-ani.gif";
import { useHistory } from "react-router-dom";

const Styles = {
  row: {
    margin: 0,
  },
  mainDiv: {
    height: "700px",
    backgroundImage: `url(${Video})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  image: {
    width: "90%",
  },
  link: {
    fontWeight: 900,
    marginBottom: "10px",
  },
  logo: {
    width: "20%",
  },
};
function Welcome() {
  let history = useHistory();

  function handleOnClick() {
    history.push("/login");
    console.log("Working");
  }

  return (
    <div>
      {/* <div className="" style={Styles.row}>
        <nav className="z-depth-1">
          <div className="nav-wrapper white">
            <img className="logo left" src={ShopprLogo} alt="Shoppr logo" />

            <ul id="nav-mobile" className="right">
              <li>
                <a className="black-text list-item" href="sass.html">
                  Search
                </a>
              </li>
              <li>
                <a className="black-text" href="badges.html">
                  Team
                </a>
              </li>
              <li>
                <a className="black-text" href="collapsible.html">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div> */}
      <div class="row center" style={Styles.row}>
        <div style={Styles.mainDiv} class="col s12 l12 #000000 black">
          <h1 id="Welcome">Welcome to </h1>
          <a href="">
            <img src={ShopprLogo} style={Styles.logo} alt="Shoppr logo" />
          </a>
        </div>
      </div>

      
      <div className="container">
        <h1 id="What">What is shoppr?</h1>
        <div className="row">
          <div className="col l12">
            <p>
              Shoppr is a shopping application that allows our users search for
              items based of images users upload. By signing up or signing in,
              users will be able to utilize the full extent of Shoppr's
              functionality. Shoppr uses Google's vision API to allow the
              ability to search for products through images.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="row container" id="rowSecond">
          <div className="col s12 l4">
            <p id="my-title">Why choose Shoppr?</p>
            <p id="my-description">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
          <div className="col s12 l4">
            <p id="my-title">Upload an image</p>
            <p id="my-description">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
          <div className="col s12 l4">
            <p id="my-title">Search by image</p>
            <p id="my-description">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
      <div className="container center">
        <h3 id="What">Join Shoppr!</h3>
        <button
          onClick={() => handleOnClick()}
          id="getStarted"
          className="btn #00b0ff light-blue accent-3"
        >
          Get Started
        </button>
      </div>
      <footer class="page-footer #37474f blue-grey darken-3">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Shoppr</h5>
              <p class="grey-text text-lighten-4">
                The latest shopping search engine.
              </p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">The Team</h5>
              <ul>
                <li>
                  <a
                    class="grey-text text-lighten-3"
                    href="https://github.com/shambhawi13"
                  >
                    Shambhawi
                  </a>
                </li>
                <li>
                  <a
                    class="grey-text text-lighten-3"
                    href="https://github.com/b0rgbart3"
                  >
                    Bart
                  </a>
                </li>
                <li>
                  <a
                    class="grey-text text-lighten-3"
                    href="https://github.com/Kionling"
                  >
                    Daniel
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">© 2020 Shoppr</div>
        </div>
      </footer>
    </div>
  );
}

export default Welcome;
