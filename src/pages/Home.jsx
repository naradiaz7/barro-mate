import { Link } from "react-router-dom";

const categorias = ["Mates", "Cerámica", "Accesorios", "Sets"];

export default function Home() {
  return (
    <section className="bento">
      <div className="tile t-hero">
        <span className="etiqueta">Hecho en Buenos Aires</span>
        <div>
          <h1>El mate es un ritual. Que sea tuyo.</h1>
          <p>Mates, bombillas y cerámica artesanal, hechos a mano en tandas chicas.</p>
          <Link to="/productos" className="btn btn-claro">Ver productos</Link>
        </div>
      </div>

      <div className="tile t-mate" aria-hidden="true">
        <svg viewBox="0 0 200 260" fill="none">
          <path d="M40 110 Q40 232 100 238 Q160 232 160 110 Z" fill="#8a5a3b" />
          <path d="M52 150 Q100 175 148 150" stroke="#6e4529" strokeWidth="3" />
          <ellipse cx="100" cy="110" rx="60" ry="16" fill="#5b3a24" />
          <ellipse cx="100" cy="108" rx="50" ry="11" fill="#7d8f5c" />
          <line x1="122" y1="102" x2="152" y2="22" stroke="#cfcabb" strokeWidth="6" strokeLinecap="round" />
          <circle cx="152" cy="20" r="9" fill="#cfcabb" />
        </svg>
      </div>

      <div className="tile t-miel">
        <span className="etiqueta">Cada pieza</span>
        <strong className="num">100%</strong>
        <span>artesanal</span>
      </div>

      <div className="tile t-terra">
        <span className="etiqueta">Envíos</span>
        <strong className="num">AR</strong>
        <span>a todo el país</span>
      </div>

      <div className="tile t-cats">
        <span className="etiqueta">Explorá por categoría</span>
        <div className="chips">
          {categorias.map((c) => (
            <Link key={c} className="chip" to={`/productos?cat=${c}`}>{c}</Link>
          ))}
        </div>
      </div>

      <div className="tile t-cuotas">
        <span className="etiqueta">Pagá como quieras</span>
        <strong className="num">3</strong>
        <span>cuotas sin interés</span>
      </div>

      <Link to="/productos" className="tile t-cta">
        <span>Ver todo el catálogo</span>
        <span className="flecha">→</span>
      </Link>
    </section>
  );
}
