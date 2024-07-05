import React  from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";


const Layout = ({children}) => {
  return (
    <div className="dark:bg-black bg">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
