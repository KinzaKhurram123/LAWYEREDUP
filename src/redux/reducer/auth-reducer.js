const initialState = {
  user: null,
  loading: false,
  user_type: 'client',
  request: null,
  chat_list: null,
  get_request: null
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
      };
    case 'SIGNOUT_SCUCESS':
      return {
        ...state,
      };
    case 'SIGNOUT_ERROR':
      return {
        ...state,
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
    case 'GET_REQUEST_PROCESS':
      return {
        ...state,
        loading: true,
      };
    case 'GET_REQUEST_SUCCESS':
      return {
        ...state,
        loading: false,
        request: action.payload,
      };
    case 'GET_REQUEST_ERROR':
      return {
        ...state,
        loading: false,
      };
    case 'SEND_REQUEST_PROCESS':
      return {
        ...state,
        loading: true,
      };
    case 'SEND_REQUEST_SUCCESS':
      return {
        ...state,
        loading: false,
        get_request: action.payload,
      };
    case 'SEND_REQUEST_ERROR':
      return {
        ...state,
        loading: false,
      };
    case 'GET_CHATLIST_PROCESS':
      return {
        ...state,
        loading: true,
      };
    case 'GET_CHATLIST_SUCCESS':
      return {
        ...state,
        loading: false,
        chat_list: action.payload,
      };
    case 'GET_CHATLIST_ERROR':
      return {
        ...state,
        loading: false,
      };
    case 'ACCEPT_REQUEST_PROCESS':
      return {
        ...state,
        loading: true,
      };
    case 'ACCEPT_REQUEST_SUCCESS':
      return {
        ...state,
        loading: false,
        request: action.payload,
      };
    case 'ACCEPT_REQUEST_ERROR':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
