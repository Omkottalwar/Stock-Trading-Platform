import React, { useState } from "react";
import { logout } from "./logout";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "40px" }} />
      <div className="menus">
        <ul className="mt-4">
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
  <button style={{border:"none",backgroundColor:"white",marginTop:"20px"}}
    className="dropdown-toggle"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
     <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username mt-3">USERID</p>
        </div>
  </button>
  <ul className="dropdown-menu" style={{lineHeight:"1.5",textDecoration:"none",opacity:"0.7"}}>
    <li ><Link  style={{lineHeight:"2.5",textDecoration:"none",color:"black",marginLeft:"12px"}} to="/">Dashboard</Link></li>
     <li><Link  style={{lineHeight:"2.5",textDecoration:"none",color:"black",marginLeft:"12px"}} to="/oredrs">Orders</Link></li>
     <li><Link  style={{lineHeight:"2.5",textDecoration:"none",color:"black",marginLeft:"12px"}} to="holdings">Holdings</Link></li>
     <li><button  onClick={logout} style={{lineHeight:"2.5",border:"none",textDecoration:"none",color:"black",marginLeft:"8px",backgroundColor:"white"}} >Logout<i class="fa-solid fa-right-from-bracket"></i></button></li>
  </ul>
</div>
       
      </div>
    </div>
  );
};

export default Menu;
