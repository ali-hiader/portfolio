import { AppSidebar } from "@/components/app-sidebar";

import {
  SidebarInset,
  SidebarProvider,
  //   SidebarTrigger,
} from "@/components/ui/sidebar";
import HeroPage from "./hero";
import Skills from "./skills";

export default function SideBar() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="px-12 py-8">
        <header className="grid rounded-[40px] border-2 bg-lime-100 border-lime-100 h-[550px]">
          <HeroPage />
        </header>
        <Skills />
      </SidebarInset>
    </SidebarProvider>
  );
}
