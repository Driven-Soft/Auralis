import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div id="details" className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
