export const RECEIVE_POST_COMMENTS = "RECEIVE_POST_COMMENTS";

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
