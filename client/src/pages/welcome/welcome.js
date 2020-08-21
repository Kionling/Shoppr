import React from "react";
import ShopprLogo from "./images/logoshort.png";
import WelcomeStyles from "./styles.css";
import Video from "./images/skies-ani.gif"
import { useHistory} from "react-router-dom"

const Styles = {
  row: {
      margin: 0
  },
  mainDiv: {
      height: "700px",
      backgroundImage: `url(${Video})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",

  },
  image: {
      width: "90%"
  },
  link: {
      fontWeight: 900,
      marginBottom: "10px"
  },
  logo: {
    width: "20%"
  }
}
function Welcome() {
    let history = useHistory();

    function handleOnClick() {
      history.push("/login")
      console.log("Working")
    }

  return (
      
    <div>
      <div className="row">
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
      </div>
      <div class="row center" style={Styles.row}>
    <div
      style={Styles.mainDiv}
      class="col l12 #000000 black">
        <h1 id="Welcome">Welcome to </h1>
      <a href="https://hikr-journal.herokuapp.com/"><img src={ShopprLogo} style={Styles.logo}
          alt="HIKR project logo"/></a>
      
    </div>
  </div>
      
      <br></br>
      <div>
        <div className="row container" id="rowSecond">
          <div className="col s4">
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
          <div className="col s4">
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
          <div className="col s4">
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
      
        <button onClick={() => handleOnClick()} className="btn">
          Get Started
        </button>
    
      </div>
      <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    </div>
  );
}

export default Welcome;
