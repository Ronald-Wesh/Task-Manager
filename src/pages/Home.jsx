import { Link } from "react-router-dom";// Link is used for navigating between pages without reloading
import Button from "../components/UI/button";
const Home=()=>{//Functional component
    return (
        // This main wrapper centers everything and gives padding
        <div className="min-h-screen bg-gray-600 flex items-center justify-center p-6">
            {/* Card box to hold the content */}
            <div className="font-bold mb-4 bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
                {/* App title */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Task Manager.</h1>
            {/* Small description under title */}
            <p className="text-gray-600 mb-6">A minimal and task Manager built with React and Tailwind.A simple and fast way to manage your daily tasks. Add, check, and delete your to-dos easily.</p>
            {/* Get Started button: Link to /tasks page */}
            <Link to="/Tasks">
            {/* className= "cursor-pointer bg-indigo-900 hover:bg-blue-500 text-white font-semibold rounded-md transition-300" */}
            <Button  variant="primary">
                Get Started
            </Button>
            </Link>
            </div>
        </div>
    );
};
// Export this component so it can be used in App.jsx or routing
export default Home ;