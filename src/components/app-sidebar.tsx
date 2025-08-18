import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { SidebarOptInForm } from "./sidebar-opt-in-form";
import Link from "next/link";
import { Card } from "./ui/card";
import HomeIcon from "@/lib/icons/home";
import ProjectIcon from "@/lib/icons/project";
import { MessageIcon } from "@/lib/icons/message";

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "About",
      url: "#about",
    },
    {
      title: "Projects",
      url: "#project",
      isActive: true,
    },
    {
      title: "Contact",
      url: "#contact",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent className="pt-12">
        {data.navMain.map((item) => (
          <Link href={item.url} className="flex flex-col items-center">
            {item.title === "About" && <HomeIcon />}
            {item.title === "Projects" && <ProjectIcon className="size-6" />}
            {item.title === "Contact" && <MessageIcon className="size-6" />}
            {item.title}
          </Link>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <div className="p-1">
          <SidebarOptInForm />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
