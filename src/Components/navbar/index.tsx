import { Link } from 'react-router-dom';
import './style.css'
export default function Navbar(){
    return(
        <div className="container-navBar">
            <Link className='container-link' to='/'>Github API</Link>
        </div>
    );
}