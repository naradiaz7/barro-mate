import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartWidget() {
  const { totalItems } = useCart();
  return (
    <Link to="/carrito" className="cart-widget" aria-label={`Carrito con ${totalItems} productos`}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" />
        <path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6" />
      </svg>
      {totalItems > 0 && <span key={totalItems} className="badge">{totalItems}</span>}
    </Link>
  );
}
