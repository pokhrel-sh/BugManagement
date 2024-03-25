import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useTheme } from "../contents/themeContext";

const Layout = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div className={`flex flex-col min-h-screen ${theme.background}`}>
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
export default Layout;