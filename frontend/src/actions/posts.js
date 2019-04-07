export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const RECEIVE_POSTS_CATEGORY = "RECEIVE_POSTS_CATEGORY";



export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  };
}

export function receivePostsCategory(posts) {
  return {
    type: RECEIVE_POSTS_CATEGORY,
    posts
  };
}

export function getPostsByCategory(category){
  return dispatch => {
    return getPostsByCategoryFromApi(category).then(response => {
      const posts = response;
      console.log("PostCategoryResponse-action", response);
      dispatch(receivePostsCategory(posts));
    });
  };
}

export function getPostsByCategoryFromApi(category) {
  let myInit = {
    method: "GET",
    headers: new Headers({ Authorization: "1234" }),
    mode: "cors"
  };
  return Promise.all([
    fetch(`http://localhost:3001/${category}/posts`, myInit).then(response =>
      response.json()
    )
  ]).then(([posts]) => ({ posts }));
}
