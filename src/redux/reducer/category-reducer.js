const initialState = {
  categories_loading: true,
  subcategory_loading: true,
  lawyers_loading: true,
  categories: [],
  subcategory: [],
  lawyers: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'CATEGORY_PROCESS':
      return {
        ...state,
        categories_loading: true,
      };
    case 'CATEGORY_SCUCESS':
      return {
        ...state,
        categories_loading: false,
        categories: action.payload,
      };
    case 'CATEGORY_ERROR':
      return {
        ...state,
        categories_loading: false,
      };

    case 'SUBCATEGORY_PROCESS':
      return {
        ...state,
        subcategory_loading: true,
      };
    case 'SUBCATEGORY_SUCCESS':
      return {
        ...state,
        subcategory_loading: false,
        subcategory: action.payload,
      };
    case 'SUBCATEGORY_ERROR':
      return {
        ...state,
        subcategory_loading: false,
      };
    case 'GET_CATEGORY':
      return {
        ...state,
        categories_loading: true,
        categories: action.payload,
      };
    case 'LAWYER_PROCESS':
      return {
        ...state,
        lawyers_loading: true,
      };
    case 'LAWYER_SUCCESS':
      return {
        ...state,
        lawyers_loading: false,
        lawyers: action.payload,
      };
    case 'LAWYER_ERROR':
      return {
        ...state,
        lawyers_loading: false,
      };
    default:
      return state;
  }
};
