import React, { createContext, useReducer, useContext } from "react";
import {
    LOGIN_USER,
    LOGOUT, 
    CREATE_USER,
    GET_USER,
    SET_FRIENDS,  // when we first load the friends from the db
    ADD_FRIEND,   
    REMOVE_FRIEND,
    ADD_SEARCH_DETAIL,
    GET_PREVIOUS_SEARCHES,
    REMOVE_PREVIOUS_SEARCH,
    LOADING,
    SET_STORE_PREF,
    SET_SEARCH_ITEM,
    SET_CURRENT_PATH,
} from "./actions";
// import { FLOAT, INTEGER } from "sequelize";

const ShopprContext = createContext(
{
    User: {
        id: "",
        name: "",
        email: "",
        avatar: ""
    },
    Friends:[],  // array of friend (User) ids

    PreviousSearches: [{}],

    CurrentSearch: {
        image_url: "",
        image_blob: "",
        items: [
      ]
    },
    isOnline: true,
    current_search_item : 0,
    currentPath: "/"
}

);
const { Provider } = ShopprContext;

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_USER:
      
      console.log("Setting the new state to include this new user:", action.user);
      return { ...state, User: action.user, loading:false};
  case LOGOUT:
    console.log("In the logout method of the dispatcher.");
    return {...state, User: null };

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
        console.log('Inside global state add friend: ',largerFriends);
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
  case SET_FRIENDS:
    return {...state, Friends: action.friends}
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

  case SET_STORE_PREF:
    return {
      ...state,
      isOnline : action.isOnline
    }

  case SET_SEARCH_ITEM:
    return {
      ...state, current_search_item: action.current_search_item
    }
  case SET_CURRENT_PATH:
    return {
      ...state, currentPath: action.currentPath
    }

  default:
    return state;
  }
};

const ShopprProvider = ({ value = [], ...props }) => {
  
  const [state, dispatch] = useReducer(reducer,
     {
      User: null,
    Friends:[],  // array of friend (User) ids

    PreviousSearches: [{}],

    CurrentSearch: {
        image_url: "",
        image_blob: "",
        items: [

      ]
    },
    isOnline: true,
    current_search_item : 0,
    currentPath: "/"
     });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useShopprContext = () => {
  return useContext(ShopprContext);
};

export { ShopprProvider, useShopprContext };
