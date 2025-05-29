import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Main } from "./Main";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SideBarLayout } from "./SideBar";

export const Layout = () => {
  return (
    <SidebarProvider>
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex  w-full ">
          <SideBarLayout />
          <div className="w-full flex-1 p-6 ">
            <Main>
              <Outlet />
            </Main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};
