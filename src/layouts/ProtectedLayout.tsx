import { AppSidebar } from "@/components/AppSidebar";
import Navbar from "@/layouts/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const ProtectedLayout = ({}) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="h-[100vh-40px] relative flex ">
        <Sidebar />
        <div className="relative w-[calc(100vw-273px)] h-[calc(100vh-66px)] left-[250px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProtectedLayout;
