import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h3>✈️TravelGuru</h3>
      </Link>
    

<div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/careers">Careers</Link>
      <Link to="/contact">Contact</Link>
       <Link to="/destinations">Destinations</Link>
</div>
</nav>
);
}
export default Navbar;