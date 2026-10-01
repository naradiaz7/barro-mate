import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Carrito() {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <p className="estado">
        Tu carrito está vacío. <Link to="/productos">Ver productos</Link>
      </p>
    );
  }

  return (
    <section>
      <h2>Tu carrito</h2>
      <ul className="carrito-lista">
        {cart.map((p) => (
          <li key={p.id}>
            <img src={p.imagen} alt={p.nombre} />
            <div>
              <strong>{p.nombre}</strong>
              <span>{p.cantidad} × ${p.precio.toLocaleString("es-AR")}</span>
            </div>
            <strong>${(p.precio * p.cantidad).toLocaleString("es-AR")}</strong>
            <button onClick={() => removeFromCart(p.id)} aria-label={`Quitar ${p.nombre}`}>✕</button>
          </li>
        ))}
      </ul>
      <div className="carrito-total">
        <p>Total: <strong>${totalPrice.toLocaleString("es-AR")}</strong></p>
        <button className="btn btn-sec" onClick={clearCart}>Vaciar carrito</button>
      </div>
    </section>
  );
}
