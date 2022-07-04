import CategoryActionTypes from "./category-types";

const INITIAL_STATE = {
    categoryTitle: "all",
}

const categoryReducer = (state = INITIAL_STATE, action) => { 
    switch (action.type) {
        case CategoryActionTypes.CHANGE_CATEGORY:
          return {
            ...state,
            categoryTitle: action.payload
          }

        default:
            return state;
    }
}

export default categoryReducer;