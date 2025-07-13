//	Brings in the Link component from React Router
import { Link,useLocation } from "react-router-dom";

const NavBar=()=>{
    const location = useLocation(); // To highlight active link
    return(
        <nav className="bg-teal-900 text-white p-5 shadow-xl">
             {/* 🧱 Flexbox: place items in a row with spacing -horizontal*/}
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        {/* 🔗 Logo/Title - links to home page */}
        <Link to="/" className="text-3xl font-bold hover:text-sky-600">
          QuickTasks
        </Link>

        {/* 🧭 Navigation links */}
            <ul className="flex gap-5 justify-center ">{/*} flex gap-4 =	Puts links in a row with space between*/}
                <li>
                    <Link to="/" className={` hover:text-indigo-600  ${
              location.pathname === "/" ? "text-yellow-400" : ""
            }`}>Home</Link>
                </li>
                <li>
                    <Link to="/Tasks" className={` hover:text-indigo-600 ${
              location.pathname === "/Tasks" ? "text-yellow-400" : ""
            }`}>Tasks</Link>
                </li>
                <li>
                    <Link to="/Posts" className={` hover:text-indigo-600 ${
              location.pathname === "/Posts" ? "text-yellow-400" : ""
            }`}>Posts</Link>
                </li>
                {/* <li>{/*Navigates to /about without reloading the page
                    <Link to="/about" className={` hover:text-indigo-600 ${
              location.pathname === "/about" ? "text-yellow-400" : ""
            }`}>About</Link>
                </li> */}
            </ul>
            </div>
        </nav>

    );
};
 export default NavBar;