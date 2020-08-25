import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Video from "../../pages/welcome/images/skies-ani.gif";
import ShopprLogo from "../../pages/welcome/images/logoshort.png";
import { useShopprContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import { LOGOUT, LOGIN_USER, SET_FRIENDS } from "../../utils/actions";
import user_avatar from "../../assets/user_avatar.png";

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

function Nav() {
  const [state, dispatch] = useShopprContext();
  const [localLoggedInUser, setLocalLoggedInUser] = useState();

  useEffect( ()=> {

  },[ localLoggedInUser] )

  useEffect( ()=> {
    
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") );

    console.log("Logged in user: ", loggedInUser);
    if (loggedInUser) {
      dispatch( { type: LOGIN_USER, user: loggedInUser })

      setLocalLoggedInUser(loggedInUser);

      API.getFriends(loggedInUser.id).then((friends) => {
        console.log("In Nav, back from the API, friends: ",friends);
        dispatch( { type: SET_FRIENDS, friends: friends.data })
    
        }).catch(err => console.log(err))

    }}, [ ]
  )

  function logout() {
    API.logout().then((response) => {
      if (response.status === 200 && response.data === "Logged out") {
        console.log("Calling the dispatcher");
        dispatch({ type: LOGOUT });

        localStorage.removeItem("loggedInUser");

        window.location.reload(true);
        // history.push("/");
      }
      console.log(response);
    });
  }

  return (
    <div className="" style={Styles.row}>
      <nav className="z-depth-1">
        <div className="nav-wrapper white">
          <Link to="/">
            <img className="logo left" src={ShopprLogo} alt="Shoppr logo" />
          </Link>
          x
          <ul id="nav-mobile" className="right">
          <li>
          <Link to="/friends">
            <button className="btn">Connect with Friends</button>
            </Link>
          </li>
            <li>
              <Link to="/search" className="black-text">
                Search
              </Link>
            </li>

            <li>
              <Link to="/about" className="black-text">
                About
              </Link>
            </li>

            <li>
              {state.User ? (
                <div className="black-text">
                  <img
                    src={
                      state.User.avatar && state.User.avatar !== ""
                        ? state.User.avatar
                        : user_avatar
                    }
                    className="avatar circle responsive-img"
                  />

                  <button onClick={logout} className="btn">
                    Log Out
                  </button>
                </div>
              ) : (
                <div className="black-text">
                  {" "}
                  <Link to="/login">
                    <button className="btn">Log In</button>
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
