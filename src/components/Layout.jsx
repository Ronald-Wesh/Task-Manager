import NavBar from "./UI/Navbar";
import Footer from "./UI/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar/>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
