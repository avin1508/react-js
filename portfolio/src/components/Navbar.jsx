import { FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="nav flex justify-between items-center p-5">
        <div className="logo text-2xl font-bold text-black shadow-xl hover:text-white transition duration-300 ease-in-out transform hover:scale-110">
          Avin
        </div>
        
        {/* Desktop Navbar */}
        <div>
          <ul className="hidden md:flex gap-4">
            <li className="text-black hover:text-white transition duration-300 ease-in-out">
              <Link to="/">Home</Link>
            </li>
            <li className="text-black hover:text-white transition duration-300 ease-in-out">
              <Link to="/about">About</Link>
            </li>
            <li className="text-black hover:text-white transition duration-300 ease-in-out">
              <Link to="/project">Project</Link>
            </li>
            <li className="text-black hover:text-white transition duration-300 ease-in-out">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Navbar */}
        <nav className="fixed bottom-0 left-0 right-0 bg-black text-white p-5 md:hidden rounded-t-xl shadow-slate-950">
          <ul className="flex gap-1 items-center justify-around">
            <li className="hover:bg-gray-700 hover:p-2 transition duration-300 ease-in-out rounded-md">
              <Link to="/" className="flex flex-col items-center">
                <FaHome className="mr-1 text-2xl" aria-label="Home" /> Home
              </Link>
            </li>
            <li className="hover:bg-gray-700 hover:p-2 transition duration-300 ease-in-out rounded-md">
              <Link to="/about" className="flex flex-col items-center">
                <FaInfoCircle className="mr-1 text-2xl" aria-label="About" /> About
              </Link>
            </li>
            <li className="hover:bg-gray-700 hover:p-2 transition duration-300 ease-in-out rounded-md">
              <Link to="/project" className="flex flex-col items-center">
                <FaProjectDiagram className="mr-1 text-2xl" aria-label="Project" /> Project
              </Link>
            </li>
            <li className="hover:bg-gray-700 hover:p-2 transition duration-300 ease-in-out rounded-md">
              <Link to="/contact" className="flex flex-col items-center">
                <FaEnvelope className="mr-1 text-2xl" aria-label="Contact" /> Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
