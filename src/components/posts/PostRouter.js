import { Route, Routes } from "react-router-dom"
import Posts from "./Posts"
import EditPost from "./EditPost"
import CreatePost from "./CreatePost"

const PostRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Posts />}></Route>
      <Route path="/edit/:id" element={<EditPost />}></Route>
      <Route path="/create" element={<CreatePost />}></Route>
    </Routes>
  )
}

export default PostRouter