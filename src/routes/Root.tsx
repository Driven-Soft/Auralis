import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="flex">
      <div id="details" className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
