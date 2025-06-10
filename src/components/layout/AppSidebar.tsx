
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { 
  Users, 
  UserCheck, 
  FolderOpen, 
  Clock, 
  BarChart3, 
  Settings,
  Home,
  UserCog,
  Shield
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Authentication",
    icon: Shield,
    items: [
      {
        title: "User Management",
        url: "/auth/users",
        icon: UserCog,
      },
      {
        title: "Role Management",
        url: "/auth/roles",
        icon: Shield,
      },
    ],
  },
  {
    title: "Employee Management",
    icon: Users,
    items: [
      {
        title: "Employee List",
        url: "/employees",
        icon: Users,
      },
      {
        title: "Face Enrollment",
        url: "/employees/face-enrollment",
        icon: UserCheck,
      },
      {
        title: "Project Assignment",
        url: "/employees/assignments",
        icon: FolderOpen,
      },
    ],
  },
  {
    title: "Project Management",
    icon: FolderOpen,
    items: [
      {
        title: "Projects",
        url: "/projects",
        icon: FolderOpen,
      },
      {
        title: "Project Assignments",
        url: "/projects/assignments",
        icon: Users,
      },
    ],
  },
  {
    title: "Attendance",
    icon: Clock,
    items: [
      {
        title: "Check-In/Out",
        url: "/attendance/checkin",
        icon: Clock,
      },
      {
        title: "Manual Attendance",
        url: "/attendance/manual",
        icon: UserCheck,
      },
      {
        title: "Bulk Attendance",
        url: "/attendance/bulk",
        icon: Users,
      },
      {
        title: "Exceptions",
        url: "/attendance/exceptions",
        icon: Settings,
      },
    ],
  },
  {
    title: "Reports",
    url: "/reports",
    icon: BarChart3,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (url: string) => {
    if (url === "/" && location.pathname === "/") return true;
    if (url !== "/" && location.pathname.startsWith(url)) return true;
    return false;
  };

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
            </div>
          </div>
          <h2 className="text-lg font-semibold">FRAS</h2>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                if (item.items) {
                  return (
                    <div key={item.title}>
                      <SidebarGroupLabel className="px-2 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {item.title}
                      </SidebarGroupLabel>
                      {item.items.map((subItem) => (
                        <SidebarMenuItem key={subItem.title}>
                          <SidebarMenuButton 
                            onClick={() => navigate(subItem.url)}
                            isActive={isActive(subItem.url)}
                            className="w-full justify-start"
                          >
                            <subItem.icon className="mr-2 h-4 w-4" />
                            <span>{subItem.title}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </div>
                  );
                }
                
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      onClick={() => navigate(item.url)}
                      isActive={isActive(item.url)}
                      className="w-full justify-start"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <div className="text-xs text-gray-500">
          Version 1.0.0
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
