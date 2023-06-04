import { NavLink } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
const NavbarLinks: any = [
  { title: "admin", to: "/dashboard/admin", protected: true },
  { title: "about", to: "/about", protected: false },
  { title: "contact", to: "/contact" },
  { title: "login", to: "/login", protected: false },
];

function Navbar(props: any) {
  const { authState, logout } = props;
  const [cuser, setCuser] = useState<any>("");
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      setCuser(user?.email);
    } else {
      setCuser("");
    }
  }, []);

  const isLoggedIn = authState?.loggedIn || false;
  const renderNavLinks = (): JSX.Element[] =>
    NavbarLinks.map((navLink: any, index: number) => {
      const { title, to, protected: isProtected } = navLink;
      const shouldRenderLink = isProtected
        ? isLoggedIn && cuser === "sehgaldival@gmail.com"
        : true;
      const isLogout = isLoggedIn && title === "login";
      return shouldRenderLink ? (
        <NavLink
          key={`${title}-${index}`}
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
