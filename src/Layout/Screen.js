import React from "react";
import { Outlet } from "react-router-dom";

const Screen = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Screen;
