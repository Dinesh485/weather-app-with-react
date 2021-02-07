


import { Link } from "react-router-dom";
import Location from "./location";


const Nav = () => {


 



  const navLinks = [
    {
      id: 1,
      name: "Now",
      url: "/",
    },
    {
      id: 2,
      name: "Hourly",
      url: "/hourly",
    },
    {
      id: 3,
      name: "daily",
      url: "/daily",
    },
    {
      id: 4,
      name: "alerts",
      url: "/alerts",
    },
  ];
  return (
    <nav>
      <Location />

      <div className="navigation"> 
        <ul className="wrapper">
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <Link to={`${link.url}`}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
