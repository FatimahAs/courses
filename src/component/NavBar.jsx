import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md  w-full z-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
       
          <div className="text-2xl font-bold text-indigo-600">Academic Course</div>


        <div className="hidden md:flex space-x-6">
         <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
				  <Link to="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
          <Link to="/courses" className="text-gray-700 hover:text-indigo-600">Courses</Link>
            <Link to="/career" className="text-gray-700 hover:text-indigo-600">Career</Link>
				  <Link to="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
        </div>

      
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

    
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pt-2 pb-4 space-y-2">
				  <ul>
					  <Link to="/" className="text-gray-700 hover:text-indigo-600"><li>Home</li></Link>
				  <Link to="/about" className="text-gray-700 hover:text-indigo-600"><li>About</li></Link>
            <Link to="/courses" className="text-gray-700 hover:text-indigo-600"><li>Courses</li></Link>
            <Link to="/career" className="text-gray-700 hover:text-indigo-600">Career</Link>
				  <Link to="/contact" className="text-gray-700 hover:text-indigo-600"><li>Contact</li></Link>
		  </ul>
        </div>
      )}
    </nav>
  );
}
