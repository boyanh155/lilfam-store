import React from "react";
import SidebarAdmin from "./SidebarAdmin";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex bg-gray-50  mr">
      <SidebarAdmin />
      <div className=" bg-white  ms-5 w-full flex-grow rounded-box">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
