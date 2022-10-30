import {
    GET_POSTS, GET_CURRENT_POST, SET_LOADING, EDIT_POST, DELETE_POST, CREATE_POST
} from "../../types"

const intitStates = {
    loading: true,
    posts: [],
    post: {},
    error: null
}

const PostReducer = (state = intitStates, action) => {
    switch (action.type) {
        case GET_POSTS:
            if (action.error) {
                return { ...state, loading: false, error: action.payload, posts: [] }
            }
            else {
                return { ...state, loading: false, posts: action.payload, error: false }
            }
        case GET_CURRENT_POST:
            if (action.error) {
                return { ...state, loading: false, error: action.payload, post: {} }
            }
            else {
                return { ...state, loading: false, post: action.payload, error: false }
            }
        case EDIT_POST:
            if (action.error) {
                return { ...state, loading: false, error: action.payload, posts: [] }
            }
            else {
                return { ...state, loading: false, posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post), error: false }
            }

        case CREATE_POST:
            if (action.error) {
                return { ...state, loading: false, error: action.payload, posts: [] }
            }
            else {
                return { ...state, loading: false, posts: [...state.post, action.payload ], error: false }
            }
        case DELETE_POST:
            if (action.error) {
                return { ...state, loading: false, error: action.payload, posts: [] }
            }
            else {
                return { ...state, loading: false, posts: state.posts.filter(post => post.id !== action.payload), error: false }
            }

        case SET_LOADING:
            return { ...state, loading: action.payload }

        default: return state
    }
}
export default PostReducer