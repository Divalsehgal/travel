import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

type Props = {};

const NavbarLinks: any = [
  { title: "admin", to: "/dashboard/admin", protected: true },
  { title: "about", to: "/about", protected: false },
  { title: "contact", to: "/contact" },
  { title: "login", to: "/login", protected: false },
];

function Navbar(props:any) {
  const { authState, logout } = props;


  const isLoggedIn = authState?.loggedIn || false;
  const renderNavLinks = (): JSX.Element[] =>
  NavbarLinks.map((navLink:any,index:number) => {
    const { title, to, protected: isProtected } = navLink;
    const shouldRenderLink = isProtected ? isLoggedIn : true;
    const isLogout = isLoggedIn && title === "login";
    return shouldRenderLink ? (
      <NavLink
        key={title}
        to={isLogout ? "" : to}
        className="text-white-800 hover:text-azure-900 px-3 py-2 rounded-md text-sm font-medium"
      >
        {isLogout ? <span onClick={() => logout()}>logout</span> : title}
      </NavLink>
    ) : null;
  });


  return (
    <div>
      {" "}
      <nav className="hidden md:flex space-x-10">{renderNavLinks()}</nav>
    </div>
  );
}

export default Navbar;
