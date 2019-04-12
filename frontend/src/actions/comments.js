export const RECEIVE_POST_COMMENTS = "RECEIVE_POST_COMMENTS";

export const ADD_COMMENT = "ADD_COMMENT";

export function addComment(comment){
  return {
    type: ADD_COMMENT,
    comment
  }
}

export function receivePostComments(comments) {
  return {
    type: RECEIVE_POST_COMMENTS,
    comments
  };
}

export function getCommentsByPost(post) {
  return dispatch => {
    return getCommentsByPostFromApi(post).then(response => {
      const comments = response;
      console.log("PostCommentsResponse-action", response);
      dispatch(receivePostComments(comments));
    });
  };
}

export function addCommentForPost(comment) {
  return dispatch => {
    return createComment(comment).then(response => {
      const comment = response;
      console.log("AddCommentResponse-action", response);
      dispatch(addComment(comment));
    });
  };
}

export function getCommentsByPostFromApi(post) {
  let myInit = {
    method: "GET",
    headers: new Headers({ Authorization: "1234" }),
    mode: "cors"
  };
  return Promise.all([
    fetch(`http://localhost:3001/posts/${post.id}/comments`, myInit).then(
      response => response.json()
    )
  ]).then(([comments]) => ({ comments }));
}


export function createComment(comment) {
  let myInit = {
    method: "POST",
    headers: new Headers({ Authorization: "1234" }),
    mode: "cors",
    body: comment
  };
  console.log("AddCommentResquest-action", myInit);
  return Promise.all([
    fetch(`http://localhost:3001/comments`, myInit).then(
      response => response.json()
    )
  ]).then((comment) => ({ comment }));
}