import AuthType from './type';

const initialState = {
  loading: false,
  error: null,
  logged: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthType.LOGIN:
      return { ...state, loading: true };
    case AuthType.REGISTER: {
      return { ...state, loading: true };
    }
    default:
      return state;
  }
};

export default AuthReducer;
