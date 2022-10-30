import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPosts } from "../../actions/posts/postActions"
import { Link } from "react-router-dom"

const Posts = () => {
  const dispatch = useDispatch()
  const { posts, loading, error } = useSelector(state => state.post)
  useEffect(
    () => {
      dispatch(getPosts())
    }, [dispatch]
  )
  return (
    <>
      {loading && <h2>Loading....</h2>}
      {error && <h1>{error}</h1>
      }
      {posts && <div className="row">
        {posts.map((post, i) => <div key={i} className="col-lg-4 col-md-6 col-sm-12 p-3">
          <div className="card">
            <div className="card-header">
              Featured
            </div>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
            </div>
            <div className="card-footer">
              <Link to={`/posts/edit/${post.id}`}>
                <div className="btn btn-primary">edit</div></Link>
            </div>
          </div>
        </div>)}


      </div>}


    </>

  )
}

export default Posts
