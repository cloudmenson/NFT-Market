import { sidebarNavigation, settingSidebarNavigation } from "@/shared";

import { NavigationItem } from "./NavigationItem";

export const Navigation = ({ isOpen }: { isOpen: boolean }) => {
  // const [isActive, setIsActive] = useState(false);

  return (
    <nav className="w-full">
      <div className="flex flex-col gap-2">
        {sidebarNavigation.map((nav) => (
          <NavigationItem key={nav.label} nav={nav} isOpen={isOpen} />
        ))}
      </div>

      <hr className="my-3 h-[0.8px] border-t-0 bg-[#26272D]" />

      <div className="flex flex-col gap-2">
        {settingSidebarNavigation.map((nav) => (
          <NavigationItem key={nav.label} nav={nav} isOpen={isOpen} />
        ))}
      </div>
    </nav>
  );
};
