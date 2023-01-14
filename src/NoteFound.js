import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
        <h2>404</h2>
        <p>Sorry! Page Not found</p>
        <Link to = {'/'} className='link'>Go back to Home page</Link>
        </div>
    );
}
 
export default NotFound;