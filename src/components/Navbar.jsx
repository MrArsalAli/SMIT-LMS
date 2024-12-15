import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import saylani from "../images/saylani.png";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-2 bg-primary">
      {/* for Logo/ image */}
      <div className="flex sm:mx-4 md:mx-8 lg:mx-10">
        <span>
          <img
            src={logo}
            alt="SMIT"
            className="w-10 h-10 lg:w-16 lg:h-16 rounded-full"
          />
        </span>
        <span className="hidden lg:flex md:flex lg:mx-8 md:mx-2 lg:my-4 md:my-1">
          <p className="md:text-lg lg:text-2xl text-white pacifico-regular">
            Empowering Innovation Through IT Excellence
          </p>
        </span>
      </div>

      {/*--------------------- for navigation links -------------------------------*/}

      <div className="flex items-center justify-center gap-4 sm:mx-4 md:mx-8 lg:mx-10">
        <Link
          to="/"
          className="text-white text-sm sm:my-2 md:text-base lg:text-xl font-bold hover:text-gray-700 hover:underline decoration-2 underline-offset-4"
        >
          Home
        </Link>

        <Link
          to="/About"
          className="text-white text-sm sm:my-2 md:text-base lg:text-xl font-bold hover:text-gray-700 hover:underline decoration-2 underline-offset-4"
        >
          About
        </Link>
        {/* "About Saylani" external link */}
        <Link
          className=" w-28 h-8 lg:w-32 lg:h-10"
          to={"https://www.saylaniwelfare.com/"}
          target="_blank"
        >
          <img
            src={saylani}
            alt="MS"
            // className="sm:w-10 sm:h-8 md:w-28 md:h-8 lg:w-32 lg:h-10"
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
