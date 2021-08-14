import * as actions from "../actions";

type InitialStateType = {
  posts: object | null ,
  one:object | null,
  loading:boolean,
  error:string
}

const initialState = {
  posts: null,
  one: null,
  loading: false,
  error:""
};

export default (state =initialState,action:any) : InitialStateType => {
  switch (action.type) {
    case actions.FETCH_POSTS_REQUEST:
      return { ...state, loading: true };
    case actions.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: "",
      };
    case actions.FETCH_POSTS_FAILURE:
      return {
        loading: false,
        posts: {},
        error: action.payload,
        one: null
      };
    case actions.GET_POST:
      return { ...state, one: null };
    default:
      return state;
  }
};
