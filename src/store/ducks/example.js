export const Types = {
  GET_REQUEST: 'example/GET_REQUEST',
  GET_SUCCESS: 'example/GET_SUCCESS',
  GET_FAILURE: 'example/GET_FAILURE'
};

const initialState = {
  data: [],
  loading: true,
  error: null
};

export default function example(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case Types.GET_SUCCESS:
      return {
        data: action.payload.data,
        loading: false,
        error: null
      };
    case Types.GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}

export const Creators = {
  getExampleRequest: () => ({
    type: Types.GET_REQUEST
  }),

  getExampleSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  }),

  getExampleFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error }
  })
};
