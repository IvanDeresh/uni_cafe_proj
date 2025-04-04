import React from "react";
import TheHeader from "./TheHeader";
import TheFooter from "./TheFooter";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div>
      <TheHeader />
      {children}
      <TheFooter />
    </div>
  );
};

export default Layout;
