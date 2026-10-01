import { Link } from "react-router-dom";

export default function Item({ id, nombre, categoria, precio, imagen }) {
  return (
    <article className="item">
      <div className="item-img">
        <img src={imagen} alt={nombre} loading="lazy" />
      </div>
      <div className="item-body">
        <span className="categoria">{categoria}</span>
        <h3>{nombre}</h3>
        <p className="precio">${precio.toLocaleString("es-AR")}</p>
        <Link to={`/producto/${id}`} className="btn">Ver detalle</Link>
      </div>
    </article>
  );
}
