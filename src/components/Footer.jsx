const equipo = [
  { nombre: "Nara", rol: "Diseño y desarrollo web", foto: "https://placehold.co/160x160/b5654a/f6ede3?text=N" },
  { nombre: "Nombre Apellido", rol: "Taller de cerámica", foto: "https://placehold.co/160x160/9aa58f/2b2b2b?text=2" },
  { nombre: "Nombre Apellido", rol: "Atención al cliente", foto: "https://placehold.co/160x160/d9a066/2b2b2b?text=3" },
];

function PersonaCard({ nombre, rol, foto }) {
  return (
    <div className="persona">
      <img src={foto} alt={nombre} />
      <strong>{nombre}</strong>
      <span>{rol}</span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h3>Barro Mate</h3>
        <p>Mates y cerámica artesanal hechos en Buenos Aires. Cada pieza se trabaja a mano, en tandas chicas.</p>
        <p>Buenos Aires, Argentina · hola@barromate.com.ar</p>
      </div>
      <div className="equipo">
        {equipo.map((p, i) => <PersonaCard key={i} {...p} />)}
      </div>
      <small>© {new Date().getFullYear()} Barro Mate. Proyecto educativo.</small>
    </footer>
  );
}
