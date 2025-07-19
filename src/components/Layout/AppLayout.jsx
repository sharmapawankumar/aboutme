import { Outlet } from "react-router";
import Footers from "../UI/Footers";
import Headers from "../UI/Headers";

import { useLocation } from "react-router";

const AppLayout = () => {
  const location = useLocation();
  console.log("Current location:", location.pathname);

  if (location.pathname === "/contactaa") {
    return (
      <div className="bg-[#050414]">
        <div className="flex">
          <Outlet />
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-[#050414]">
        <Headers />
        <div className="flex">
          <Outlet />
        </div>
        <Footers />
      </div>
    );
  }
};

export default AppLayout;
