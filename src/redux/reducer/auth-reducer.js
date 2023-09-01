const initialState = {
  user: null,
  loading: false,
  user_type: 'client',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PROGRESS':
      return {
        ...state,
        loading: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loading: false,
      };

    case 'SIGNUP_PROGRESS':
      return {
        ...state,
        loading: true,
        user: action.payload,
      };
    case 'SIGNUP_SCUCESS':
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case 'SIGNUP_ERROR':
      return {
        ...state,
        loading: false,
      };
    case 'SIGNOUT_PROGRESS':
      return {
        ...state,
        // loading: true,
      };
    case 'SIGNOUT_SCUCESS':
      return {
        ...state,
        // loading: true,
      };
    case 'SIGNOUT_ERROR':
      return {
        ...state,
        // loading: true,
      };
    case 'SET_USER_TYPE':
      return {
        ...state,
        user_type: action.payload,
      };

    case 'EDIT_PROFILE_PROCESS':
      return {
        ...state,
        loading: true,
      };
    case 'EDIT_PROFILE_SUCCESS':
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case 'EDIT_PROFILE_ERROR':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
