import { RECEIVE_POST_COMMENTS, ADD_COMMENT } from "../actions/comments";

export default function comments(state = [], action) {
  switch (action.type) {
    case RECEIVE_POST_COMMENTS:
      return {
        ...state,
        ...action.comments
      };
      case ADD_COMMENT:
        return {
          ...state,
          ...action.comment
        }
    default:
      return state;
  }
}
