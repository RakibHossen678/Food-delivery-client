import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
const Navbar = () => {
  const NavLinks = (
    <>
      <li>
        <NavLink to='/' className={({isActive})=>isActive ? 'border-b-2 pb-1 border-[#49557e]':''}>Home</NavLink>
      </li>

      <li>
        <NavLink to='/menu' className={({isActive})=>isActive ? 'border-b-2 pb-1 border-[#49557e]':''}>Menu</NavLink>
      </li>
      <li>
        <NavLink to='.app' className={({isActive})=>isActive ? 'border-b-2 pb-1 border-[#49557e]':''}>Mobile-App</NavLink>
      </li>
      <li>
        <NavLink to='contact' className={({isActive})=>isActive ? 'border-b-2 pb-1 border-[#49557e]':''}>Contact us</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100  my-2 ">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 cursor-pointer"
          >
            {NavLinks}
          </ul>
        </div>
        <a className="">
          <img className="w-32" src={assets.logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-8 text-[#49557e] text-lg menu-horizontal px-1">
          {NavLinks}
        </ul>
      </div>
      <div className="navbar-end space-x-9 ">
        <img src={assets.search_icon} alt="" />
        <div className="relative" >
          <img src={assets.basket_icon} alt="" />
          <div className="absolute min-w-3 min-h-3 bg-[#ff6347] rounded-full -top-2 -right-2"></div>
        </div>
        <button className="border-[1px] rounded-full text-[#49557e] border-[#ff6347] px-7 py-2 cursor-pointer hover:bg-[#fff4f2] transform transition-[0.3s]">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
