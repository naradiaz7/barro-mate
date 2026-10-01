import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Item from "./Item";

export default function ItemListContainer({ titulo }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [params, setParams] = useSearchParams();
  const cat = params.get("cat") || "Todos";

  useEffect(() => {
    fetch("/productos.json")
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo cargar el catálogo");
        return res.json();
      })
      .then(setProductos)
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p className="estado">Cargando productos…</p>;
  if (error) return <p className="estado">{error}</p>;

  const categorias = ["Todos", ...new Set(productos.map((p) => p.categoria))];
  const visibles = cat === "Todos" ? productos : productos.filter((p) => p.categoria === cat);

  return (
    <section>
      <h2>{titulo}</h2>
      <div className="chips">
        {categorias.map((c) => (
          <button
            key={c}
            className={`chip ${c === cat ? "on" : ""}`}
            onClick={() => (c === "Todos" ? setParams({}) : setParams({ cat: c }))}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grilla">
        {visibles.map((p) => <Item key={p.id} {...p} />)}
      </div>
    </section>
  );
}
