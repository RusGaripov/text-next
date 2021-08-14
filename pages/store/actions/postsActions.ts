import * as actions from "./index";
import axios from "axios";


const fetchPostsRequest = () => {
  return {
    type: actions.FETCH_POSTS_REQUEST,
  };
};

const fetchPostsSuccess = (posts:Object) => {
  return {
    type: actions.FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

const fetchPostsFailure = (error:string) => {
  return {
    type: actions.FETCH_POSTS_FAILURE,
    payload: error,
  };
};

export const fetchPosts =  (posts:string) => {

  return function (dispatch:any) {
    dispatch(fetchPostsRequest());
      axios
        .get(
          `https://simple-blog-api.crew.red/posts` //
        )
        .then((response:any) => {
          const data= response.data;
          dispatch(fetchPostsSuccess(data));
        })
        .catch((error:any) => {
          dispatch(fetchPostsFailure(error.message));

        }); 
  };
};


export const getPost = (id:number) => async (dispatch:any) => {
  dispatch({
    type: actions.GET_POST,
    one: id,
  });

}


