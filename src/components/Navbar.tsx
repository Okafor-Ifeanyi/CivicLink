import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useAuthContext } from "../context/auth.context";

const Navbar = () => {
//   const { user, logout } = useAuthContext();
//   const role = user && user.role;
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const HomePage = () => {
    // logout();
    navigate("/");
  };

  return (
    <div className="nav-bar">
        <article>
            <button className="logout" onClick={HomePage}><h1>CivicLink</h1>  </button>
        </article>
     
        <nav className="navList">
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className={ currentPath === "/" ? "active-link" : "" } 
                    > Home </Link>
                </li>
            
                <li>
                    <Link 
                        to="/service" 
                        className={ currentPath === "/service" ? "active-link" : "" } 
                    > Service </Link>
                </li>
            
                <li>
                    <Link 
                        to="/contact" 
                        className={ currentPath === "/contact" ? "active-link" : "" } 
                    > Contact Offical </Link>
                </li>
                <select 
                    name="issue-category" 
                    id="issue-category" 
                    className="issue-category"
                    // className={`issue-category ${issue ? 'selected' : ''}`}
                    // value={issue}
                    // onChange={(e) => setIssue(e.target.value)}
                >
                    <option value="" disabled selected>Language</option>
                    <option value="environment">Environment</option>
                    <option value="education">Education</option>
                </select>

            </ul>
        </nav>
    </div>
  );
};

export default Navbar;
