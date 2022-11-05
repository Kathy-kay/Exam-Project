import {NavLink, Link} from 'react-router-dom'

const  Navbar = () => {
    return (
        <nav>
            <Link 
            to= '/'>
            <h2 className="logo">KATHY</h2>
            </Link>
            <div className="nav-link">
            <ul>
            
                <li>
                    <NavLink to='custom'
                    className={(isActive) =>(isActive? 'active' : 'inactive')}>Custom</NavLink>
                </li>
                <li>
                    <NavLink to='error'
                    className={(isActive) =>(isActive? 'active' : 'inactive')}>Error</NavLink>
                </li>
                <li>
                    <NavLink to='errorPage'
                    className={(isActive) =>(isActive? 'active' : 'inactive')}>404page</NavLink>
                </li>
            </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;