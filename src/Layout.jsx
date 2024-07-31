//
//
//
//
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ToTopBtn from "./components/ToTopBtn";

export default function Layout() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <main className="min-h-[60vh]">
          <Outlet />
        </main>
        <Footer />
        <ToTopBtn />;
      </div>
    </>
  );
}
