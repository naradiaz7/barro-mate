import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Barro Mate</Link>
      <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/productos">Productos</NavLink></li>
        <li><NavLink to="/carrito">Carrito</NavLink></li>
      </ul>
      <CartWidget />
    </nav>
  );
}
