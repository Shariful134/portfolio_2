import { Link } from "react-router-dom";
import logo_1 from "../../assets/image/Frame.png";
import logo_2 from "../../assets/image/Group.png";

const NavBar = () => {
  const navItems = (
    <>
      <li className="text-white font-semibold hover:text-orange-600">
        <Link to="/">Home</Link>
      </li>
      <li className="text-white font-semibold hover:text-orange-600">
        <Link to="/about">About</Link>
      </li>
      <li className="text-white font-semibold hover:text-orange-600">
        <Link to="/service">Service</Link>
      </li>
      <li className="text-white font-semibold hover:text-orange-600">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="text-white font-semibold hover:text-orange-600">
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
  return (
    <div className="bg-background">
      <div className="navbar  container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <img className="w-16 mr-1" src={logo_1} alt="logoImg" />
          <img className="w-12" src={logo_2} alt="logoImg" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-gradient-to-r from-indigo-300 to-purple-200 rounded-full hover:text-orange-600 semibold">
            Appoinment
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
