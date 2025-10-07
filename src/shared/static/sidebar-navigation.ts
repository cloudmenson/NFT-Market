import * as Icon from "@/assets";

export type sidebarNavigationProps = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  active?: boolean;
};

export const sidebarNavigation: sidebarNavigationProps[] = [
  { Icon: Icon.Navigation, label: "Discover", active: true },
  { Icon: Icon.Dashboard, label: "Collections" },
  { Icon: Icon.Circles, label: "Tokens" },
  { Icon: Icon.Calendar, label: "Drops" },
  { Icon: Icon.Burger, label: "Activity" },
  { Icon: Icon.Anchor, label: "Rewards" },
  { Icon: Icon.Pen, label: "Studio" },
  { Icon: Icon.User, label: "Profile" },
];

export const settingSidebarNavigation: sidebarNavigationProps[] = [
  { Icon: Icon.Resources, label: "Resources" },
  { Icon: Icon.Settings, label: "Settings" },
  { Icon: Icon.Info, label: "Support" },
];
