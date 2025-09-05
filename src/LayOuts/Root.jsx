// src/LayOuts/Root.jsx
import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const Root = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 fakebook-grid">
      <Navbar />
      <Outlet />
      <div className="fakebook-vignette" />
    </div>
  );
};

export default Root;