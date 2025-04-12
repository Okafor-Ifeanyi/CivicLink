import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "../components/ui/sonner";

const Layout = () => {
  return (
    <div className="size-full flex flex-col min-h-[100vh]">
      <Navbar />
      <div className="main-screen self-stretch">
        <Outlet />
      </div>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};

export default Layout;
