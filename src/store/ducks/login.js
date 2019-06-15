/** Action Types */
export const Types = {
  REQUEST: 'LOGIN_REQUEST',
  SUCCESS: 'LOGIN_SUCCESS',
  FAILURE: 'LOGIN_FAILURE',
};

/** Reducers */

const INITIAL_STATE = {
  id: null,
  username: null,
  loading: false,
  error: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        error: false,
        loading: false,
      };
    case Types.FAILURE:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}

/** Actions Creators */

export const Creators = {
  loginRequest: (username, password) => ({
    type: Types.REQUEST,
    payload: { username, password },
  }),

  loginSuccess: ({ id, username, accessToken }) => ({
    type: Types.SUCCESS,
    payload: { id, username, accessToken },
  }),

  loginFailure: () => ({
    type: Types.FAILURE,
  }),
};
