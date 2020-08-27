import React, {useEffect} from 'react';
import SearchContainer from "../../components/SearchContainer/SearchContainer";
import { useShopprContext } from "../../utils/GlobalState";
import { SET_CURRENT_PATH } from "../../utils/actions";
// import DigitalBanner from "../Search/images/digital1.jpg"
import SearchStyle from "../Search/search.css"
function Search(){
    const [state,dispatch] = useShopprContext();


    useEffect( ()=> {
      dispatch({type: SET_CURRENT_PATH, currentPath: "/search"})
    }, []
    )
  
    return (
        <div>
            
           
      <div id="SearchBanner" className="center">
        <div className="row center">
          <div className="col s12 l12" >
          <SearchContainer/>
  
          </div>
        </div>
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

export default Search;