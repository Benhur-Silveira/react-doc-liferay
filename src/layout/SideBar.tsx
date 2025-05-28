import { configSidebar } from "./config.sidebar";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarRail } from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";

export const SideBarLayout = () => {

  const location = useLocation()

  const pathActive = location.pathname.replace("/", "")
  const pathToArray = pathActive.split("/")



  return (
    <div >
      <Sidebar className="mt-16 ">
        <SidebarContent >
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {configSidebar.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.path} target={item.external ? "_blank" : "_self"} className={pathToArray.includes(item.path.replace("/", "")) ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" : ""}>
                        <item.Icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                    {item.hasChildren && (
                      <SidebarMenuSub>
                        {item.children.map((child) => (
                          <SidebarMenuItem key={child.title}>
                            <SidebarMenuButton asChild>
                              <Link to={child.path} target={child.external ? "_blank" : "_self"} className={pathToArray.toString() === child.pathActive ? "bg-sidebar-accent hover:bg-primary" : ""}>
                                <child.Icon />
                                <span>{child.title}</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenuSub>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    </div>
  );
};