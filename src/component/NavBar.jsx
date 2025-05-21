
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

export default function NavBar() {


  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
    
        <div className="text-2xl font-bold text-indigo-600">Academic Course</div>

    
			  <div className="hidden md:flex space-x-6">
				  <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
				  <Link to="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
				  <Link to="/courses" className="text-gray-700 hover:text-indigo-600">Courses</Link>
				  <Link to="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
         
          
        </div>

      
        <div className="md:hidden">
          <button>
             <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

		  
      
      
      
    </nav>
  );
}
