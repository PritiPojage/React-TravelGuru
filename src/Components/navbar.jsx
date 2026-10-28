import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h3 font-family:inherit>✈ TravelGuru</h3>
      </Link>
    

<div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/destinations">Destinations</Link>
      <Link to="/careers">Careers</Link>
      <Link to="/contact">Contact</Link>
      
</div>
</nav>
);
}
export default Navbar;