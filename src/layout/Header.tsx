import { SidebarTrigger } from "@/components/ui/sidebar";
import { Code } from "lucide-react";
export const Header = () => {
  return (
    <div className="h-16">
      <header className="h-16 border-b border-gray-200 bg-background/95 backdrop-blur   fixed top-0 left-0 right-0 z-50 flex p-3 justify-between items-center">
        <div className="flex items-center gap-2">
          <Code className="text-gray-900 font-bold size-7" />
          <h1 className="text-2xl font-bold text-gray-900">React + Liferay</h1>
        </div>
        <SidebarTrigger />
      </header>
    </div>
  );
};
