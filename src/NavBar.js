import { Link } from "react-router-dom";


const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>My Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;