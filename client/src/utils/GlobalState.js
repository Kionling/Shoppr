import React, { createContext, useReducer, useContext } from "react";
import {
    CREATE_USER,
    GET_USER,
    ADD_FRIEND,
    REMOVE_FRIEND,
    ADD_SEARCH_DETAIL,
    GET_PREVIOUS_SEARCHES,
    REMOVE_PREVIOUS_SEARCH,
    LOADING
} from "./actions";
// import { FLOAT, INTEGER } from "sequelize";

const ShopprContext = createContext(
{
    // User: {
    //     id: "",
    //     name: "",
    //     email: ""
    // },
    // Friends:[""],  // array of friend (User) ids

    // PreviousSearches: [{}],

    // CurrentSearch: {
    //     image_url: "",
    //     image_blob: "",
    //     items: [{
    //         name: "",
    //         image_url:"",
    //         purchase_url:"",
    //         price: ""
    //     }]
    // }
}

);
const { Provider } = ShopprContext;

const reducer = (state, action) => {
  switch (action.type) {
  case CREATE_USER:
    return {
      ...state,
      User: action.user,
      loading: false
    };
  case GET_USER:
    return {
      ...state,
      loading: false
    };
  case ADD_FRIEND:
      let largerFriends =[ ...state.Friends, 
        action.newFriend];
      return {
          ...state, 
          Friends: largerFriends,
        loading:false
      }
  case REMOVE_FRIEND:
    let lessFriends = state.Friends.filter( friend => friend != action.friendID ) 

    return {
        ...state, 
        Friends: lessFriends,
        loading:false}
  case ADD_SEARCH_DETAIL:
      return {...state, CurrentSearch: action.newSearch, loading:false}
  
  case GET_PREVIOUS_SEARCHES:
    return {
        ...state, 
        PreviousSearches: action.previousSearches,
        loading:false
    }
  case REMOVE_PREVIOUS_SEARCH:
    let newPreviousSearches = state.PreviousSearches.filter( 
        search => search != action.searchID )
      return {
          ...state,
          PreviousSearches: newPreviousSearches, loading:false
      }
  case LOADING:
    return {
      ...state,
      loading: true
    };

  default:
    return state;
  }
};

const ShopprProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {});

  return <Provider value={[state, dispatch]} {...props} />;
};

const useShopprContext = () => {
  return useContext(ShopprContext);
};

export { ShopprProvider, useShopprContext };
