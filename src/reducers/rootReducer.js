import { combineReducers } from "redux";
import postReducer from "./posts/postReducer"

const rootReducer = combineReducers({
    post: postReducer
})

export default rootReducer