import React from "react";

import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/Signup");
  };
  return (
    <div>
      <img alt="logo"
      className="logo"
      src="https://bloggytalky.com/wp-content/uploads/2017/07/create-a-free-logo-design-logo-designs-design-a-free-logo-design-a-free-logo-alltech-just-free-logo-design.png"/>
        { auth ? <ul className="nav-ul">
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Products</Link>
          </li>
          <li>
            <Link to="/update">UpdateProducts</Link>
          </li>
          <li>
            <Link to="/profile">Profiles</Link>
          </li>
          <li><Link onClick={logout} to="/Signup">Logout({JSON.parse(auth).name})</Link></li>
          {/*}   <li>{ auth ?<Link onClick={logout} to="/Signup">Logout</Link> :
        <Link to="/Signup">Signup</Link>}</li>
    <li><Link to="/Login">Login</Link></li>*/}
          {/*
        auth ? <li><Link onClick={logout} to="/Logout">Logout</Link></li>
        :<>
            <li> <Link to="/Signup">Signup</Link></li>
            <li> <Link to="/Login">Login</Link></li>
         </>
*/}
        </ul>
         : 
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/Signup">Signup</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      }
    </div>
  );
};
export default Nav;
