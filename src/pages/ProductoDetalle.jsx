import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductoDetalle() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);

  useEffect(() => {
    fetch("/productos.json")
      .then((res) => res.json())
      .then((data) => setProducto(data.find((p) => p.id === Number(id)) || null))
      .finally(() => setCargando(false));
  }, [id]);

  if (cargando) return <p className="estado">Cargando…</p>;
  if (!producto) return <p className="estado">Producto no encontrado. <Link to="/productos">Volver</Link></p>;

  const handleAdd = () => {
    addToCart(producto, cantidad);
    setAgregado(true);
    setTimeout(() => setAgregado(false), 1800);
  };

  return (
    <section className="detalle">
      <img src={producto.imagen} alt={producto.nombre} />
      <div>
        <span className="categoria">{producto.categoria}</span>
        <h2>{producto.nombre}</h2>
        <p className="precio grande">${producto.precio.toLocaleString("es-AR")}</p>
        <p>{producto.descripcion}</p>
        <div className="cantidad">
          <button onClick={() => setCantidad((c) => Math.max(1, c - 1))}>−</button>
          <span>{cantidad}</span>
          <button onClick={() => setCantidad((c) => c + 1)}>+</button>
        </div>
        <button className="btn btn-grande" onClick={handleAdd}>
          {agregado ? "¡Agregado!" : "Agregar al carrito"}
        </button>
        <Link to="/productos" className="volver">← Seguir mirando</Link>
      </div>
    </section>
  );
}
