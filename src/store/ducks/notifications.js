/** Actions Types */
export const Types = {
  LOAD_REQUEST: 'LOAD_NOTIFICATIONS_REQUEST',
  LOAD_SUCCESS: 'LOAD_NOTIFICATIONS_SUCCESS',
  LOAD_FAILURE: 'LOAD_NOTIFICATIONS_FAILURE',
};

/** Reducers */

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function notifications(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_SUCCESS:
      return {
        ...state,
        data: { status: action.payload.data.status, message: action.payload.data.message },
        loading: false,
        error: false,
      };
    case Types.LOAD_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

/** Actions Creators */

export const Creators = {
  loadNotificationsRequest: () => ({
    type: Types.LOAD_REQUEST,
  }),

  loadNotificationsSuccess: ({ status, message }) => ({
    type: Types.LOAD_SUCCESS,
    payload: { data: { status, message } },
  }),

  loadNotificationsFailure: () => ({
    type: Types.LOAD_FAILURE,
  }),
};
