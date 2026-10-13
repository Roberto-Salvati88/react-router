import { NavLink } from 'react-router-dom';

// NavLink aggiunge da solo la classe "active" al link della pagina corrente (BONUS)
function Navbar() {
  return (
    <nav className="navbar">
      <strong>Boolean Store</strong>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/chi-siamo">Chi siamo</NavLink>
      <NavLink to="/prodotti">Prodotti</NavLink>
    </nav>
  );
}

export default Navbar;
