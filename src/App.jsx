import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts"; 
import NavBar from "./components/UI/Navbar";//iMPORTS NAVBAR COMPONENT
 import Tasks from "./pages/Tasks";
 import Footer from "./components/UI/Footer";
// import About from "./pages/About";

function App(){
  return(//component’s UI is defined.
    <Router>{/*React that this app will use routing to move between different pages (called routes).*/}
      {/*<NavBar/> {/* 🧭 Add navigation to all pages */}
      <Routes> {/*special container for all your individual page routes.*/}
        <Route path="/" element={<Home />} />
         <Route path="/Posts" element={<Posts />} />
        {/*<Route path="/about" element={<About />} /> */}
        <Route path="/Tasks" element={<Tasks/>}/>
      </Routes>
    </Router>
  );
}
export default App;