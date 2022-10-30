
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { setLoading } from "../../actions/posts/postActions"
import axios from "axios"


const EditPost = () => {
  const { loading } = useSelector(state => state.post)
  const dispatch = useDispatch()
  const { id } = useParams()
  const [body, setBody] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    const setCurrent = async (id) => {
      dispatch(setLoading(true))
      const res = await axios.get(`http://localhost:3004/posts/${id}`)
      setBody(res.data.body)
      setTitle(res.data.title)
      dispatch(setLoading(false))
    }
    setCurrent(id)
  }, [dispatch])

  return (
    <>
      {loading ? <h2>Loading...</h2> : <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">title</label>
          <input value={title} type="email" className="form-control" placeholder="enter title" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Body</label>
          <textarea value={body} type="email" className="form-control" placeholder="enter body" onChange={(e) => setBody(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary my-3">Submit</button>
      </form>
      }


    </>
  )
}

export default EditPost
