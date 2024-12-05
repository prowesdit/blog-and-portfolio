import React from "react";

const Layout = ({ children }: { children: any }) => {
  return (
    <div>
      <h1 className=" text-3xl text-center md:text-7xl font-bold">Our Works</h1>
      {children}
    </div>
  );
};

export default Layout;
