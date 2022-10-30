import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <div className="bg-dark  text-white d-flex">
                <Link to="/posts">
                    <h5 className="p-3 pointer">Posts</h5></Link>
                <Link to="/about-us"> <h5 className="p-3 pointer">About</h5></Link>
            </div>

        </div>
    )
}

export default Header
