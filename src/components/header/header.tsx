import logo from "../../assets/logo.png";
import Navbar from "./navbar";
import { NavLink } from "react-router-dom";


function Header(props: any) {
  return (
    <header className="col-span-12 md:col-start-0 md:col-span-12 bg-gray-800 text-white py-2 px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1">
            <NavLink to="/">
 
              <img className="h-8 w-auto sm:h-10" src={logo} alt="" />
            </NavLink>
          </div>
          <Navbar {...props} />
        </div>
      </div>
    </header>
  );
}

export default Header;
