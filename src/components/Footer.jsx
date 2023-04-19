import React from "react";
import { NavLink, BrowserRouter } from "react-router-dom";

const Footer = () => {
  const routes = ["home", "posts", "add"];

  return (
    <BrowserRouter>
      <div className="flex justify-between items-center p-4 border-t-2">
        <ul className=" text-slate-800 flex text-lg">
          {["Home", "Posts", "Add"].map((link, i) => {
            return (
              <li className="mr-6" key={i * Math.random()}>
                <NavLink
                  to={
                    routes[i].toLowerCase() === "home"
                      ? "/"
                      : routes[i].toLowerCase()
                  }
                  className={({ isActive }) =>
                    isActive ? "" : "text-slate-400"
                  }
                >
                  {link}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div>Devloped with ❤️</div>
      </div>{" "}
    </BrowserRouter>
  );
};

export default Footer;
