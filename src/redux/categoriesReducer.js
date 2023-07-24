const initialState = {
  categoryList: null,
  isLoading: false,
  error: null,
  loaderActivationCounter: 0,
  showPopup: false,
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'categories/setIsLoading': {
      return {
        ...state,
        isLoading: action.payload, // true | false
        loaderActivationCounter: state.loaderActivationCounter + 1,
      };
    }
    case 'categories/setCategoryList':
      return {
        ...state,
        categoryList: action.payload,
      };
    case 'categories/setError':
      return {
        ...state,
        error: action.payload,
      };
    case 'categories/clearCategories':
      return {
        ...state,
        categoryList: [],
      };
    default:
      return state;
  }
};

// action -> { type: "categories/setIsLoading", payload: true | false }
// action -> { type: "categories/setCategoryList", payload: [] }
// action -> { type: "categories/setError", payload: 'some error' }
export const setIsLoading = payload => {
  return {
    type: 'categories/setIsLoading',
    payload,
  };
};
