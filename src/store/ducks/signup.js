/** Action Types */
export const Types = {
  REQUEST: 'SIGNUP_REQUEST',
  SUCCESS: 'SIGNUP_SUCCESS',
  FAILURE: 'SIGNUP_FAILURE',
};

/** Reducers */

const INITIAL_STATE = {
  id: null,
  accessToken: null,
  loading: false,
  error: false,
};

export default function signup(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return {
        ...state,
        accessToken: `Bearer ${action.payload.accessToken}`,
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
  signupRequest: (fullname, username, password) => ({
    type: Types.REQUEST,
    payload: { fullname, username, password },
  }),

  signupSuccess: ({ accessToken }) => ({
    type: Types.SUCCESS,
    payload: { accessToken },
  }),

  signupFailure: () => ({
    type: Types.FAILURE,
  }),
};
