import { receivePosts } from "../actions/posts";
import { showLoading, hideLoading } from "react-redux-loading";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "dfonseca";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(response => {
      const posts = response;
      console.log("PostResponse-action", response);
      dispatch(receivePosts(posts));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}

export function getInitialData() {
  let myInit = {
    method: "GET",
    headers: new Headers({ Authorization: "1234" }),
    mode: "cors"
  };
  return Promise.all([
    fetch("http://localhost:3001/posts", myInit).then(response =>
      response.json()
    )
  ]).then(([posts]) => ({ posts }));
}
