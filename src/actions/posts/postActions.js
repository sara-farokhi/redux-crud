import { GET_POSTS, GET_CURRENT_POST, SET_LOADING, DELETE_POST,CREATE_POST } from "../../types"
import axios from 'axios';


export const getPosts = () => async (dispatch) => {
    try {
        const res = await axios.get(`http://localhost:3004/posts`)
        dispatch({ type: GET_POSTS, payload: res.data })
    } catch (error) {
        dispatch({ type: GET_POSTS, payload: 'sth went wrong', error: true })
    }
}

export const currentPost = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`http://localhost:3004/posts/${id}`)
        dispatch({ type: GET_CURRENT_POST, payload: res.data })
    } catch (error) {
        dispatch({ type: GET_CURRENT_POST, payload: 'sth went wrong', error: true })
    }
}

export const editPost = (data) => async (dispatch) => {
    try {
        const res = await axios.put(`http://localhost:3004/posts/${data.id}`, data)
        dispatch({ type: GET_POSTS, payload: res.data })
    } catch (error) {
        dispatch({ type: GET_POSTS, payload: 'sth went wrong', error: true })
    }
}

export const createPost = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`http://localhost:3004/posts`, data)
        console.log(res.data)
        dispatch({ type: CREATE_POST, payload: res.data })
    } catch (error) {
        dispatch({ type: CREATE_POST, payload: 'sth went wrong', error: true })
    }
}


export const deletePost = (id) => async (dispatch) => {
    try {
        dispatch(
            { type: SET_LOADING, payload: true }
        )
        await axios.delete(`http://localhost:3004/posts/${id}`)
        dispatch({ type: DELETE_POST, payload: id })
       
    } catch (error) {
        dispatch({ type: DELETE_POST, payload: 'sth went wrong', error: true })
    }
    dispatch(
        { type: SET_LOADING, payload: false }
    )
}

export const setLoading = (status) => {
    return {
        type: SET_LOADING,
        payload: status
    }
}