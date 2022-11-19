import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
<div className="navbar-brand">
Note app
</div>

<ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active"  to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" id="opacity" to={"/home"}>About</Link>
        </li>

      </ul>
        </nav>
    )
}