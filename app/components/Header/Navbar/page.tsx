import { FaGlobe } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <div className="flex items-center space-x-3 text-gray-500 font-semibold">

      <h1 className="hidden md:inline">Become a host</h1>

      <FaGlobe size={18} className="hidden sm:inline" />

      <div className="flex items-center space-x-2 border border-gray-400 rounded-full p-2 cursor-pointer">
        <CiMenuBurger size={18} />
        <CgProfile size={20} />
      </div>

    </div>
  );
}

export default Navbar;
