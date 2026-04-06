import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

const RootLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // ou "smooth"
    });
  }, [pathname]);

  return <Outlet />;
};

export default RootLayout;