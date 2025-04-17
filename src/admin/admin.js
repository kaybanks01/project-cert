import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../component/sidenav";  // Adjust the import path if needed
import "./admin.css";

function Admin() {
  return (
    <div className="adminbodydash">
      <div className="admin-container">
        {/* SideNav only here */}
        <SideNav />
        <main className="adminmain-content">
          {/* The content of admin routes will appear here */}
          <Outlet /> 
        </main>
      </div>
    </div>
  );
}

export default Admin;
