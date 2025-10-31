import { NavLink } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <div>
    <nav className="navContainer" >
        <ul className="navUlCon">
            <li className="navItem"> <NavLink to="/" className="itemText ">Intern Home</NavLink></li>
            <li className="navItem"> <NavLink to="/" className="itemText text ">Job Postings</NavLink></li>
            <li className="navItem"> <NavLink to="/postJob-Page" className="itemText text">Post a Job</NavLink></li>
        </ul>
    </nav>
    
    </div>
  )
}

export default Navbar