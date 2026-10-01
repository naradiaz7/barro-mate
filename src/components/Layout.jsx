import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <NavBar />
      <main className="contenedor">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
