import {Link} from "react-router-dom"

function navBar(){

    return(
        <nav className="nav-bar">
            <div className="navbar-brand">
              <Link to="/">MovieApp</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
                <Link to="/movie.card" className="nav-link">MovieCard</Link>
            </div>
        </nav>
    )
}

export default navBar