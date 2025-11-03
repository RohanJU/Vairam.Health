import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#F5F0E9] rounded-b-3xl shadow-[0_10px_25px_rgba(90,38,84,0.15)] backdrop-blur-md">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <button className="bg-[#5A2654] text-white px-5 py-2 rounded-full shadow-[0_10px_20px_rgba(90,38,84,0.25)] hover:bg-[#4A1E46] transition">
          VAIRAM.HEALTH
        </button>
      </Link>

      {/* Nav Links */}
      <ul className="hidden md:flex space-x-8 text-[#3B2B3B] font-medium">
        <li>
          <Link
            to="/"
            className="hover:text-[#5A2654] cursor-pointer transition"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/talk-to-doctor"
            className="hover:text-[#5A2654] cursor-pointer transition"
          >
            Talk To Doctor
          </Link>
        </li>
        <li>
          <Link
            to="/youtube-videos"
            className="hover:text-[#5A2654] cursor-pointer transition"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/faq"
            className="hover:text-[#5A2654] cursor-pointer transition"
          >
            FAQ
          </Link>
        </li>
      </ul>

      {/* Button */}
      <Link to="/talk-to-doctor">
        <button className=" text-gray-400 px-5 py-2 rounded-full  hover:bg-[#4A1E46]  transition">
          LOGIN
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
