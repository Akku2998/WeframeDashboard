import {
  Home,
  Content,
  Team,
  User,
  AppWeb,
  Analytics,
  Media,
  Notification,
  Setting,
  Headphone,
} from "@/svgs";
import { IconContainer } from "..";

const sidenavLinks = [
  { id: 1, icon: <Home />, label: "Dashboard" },
  { id: 2, icon: <Content />, label: "Content", active: true },
  { id: 3, icon: <Team />, label: "Team" },
  { id: 4, icon: <User />, label: "User" },
  { id: 5, icon: <AppWeb />, label: "App/Web" },
  { id: 6, icon: <Analytics />, label: "Analytics", alertCount: 3 },
  { id: 7, icon: <Media />, label: "Media", alertCount: 16 },
  { id: 8, icon: <Notification />, label: "Notification" },
  { id: 9, icon: <Setting />, label: "Settings" },
];

export function SideNavBar() {
  return (
    <div className="p-8 mt-16">
      <ul className="flex flex-col items-left gap-2 justify-center max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 w-48">
        {sidenavLinks.map(({ id, icon, label, active, alertCount }) => (
          <li
            key={id}
            className={`flex items-center gap-4 p-2 rounded-lg text-sm ${
              active ? "bg-voilet-50 text-white" : ""
            }`}
          >
            {icon}
            {label}
            {alertCount && <IconContainer>{alertCount}</IconContainer>}
          </li>
        ))}
      </ul>
      <ul className="flex flex-col items-left justify-center text-gray-500 list-inside dark:text-gray-400 mt-16 w-48">
        <li
          className={`flex items-center gap-4 p-2 rounded-lg bg-voilet-100 text-sm`}
        >
          <Headphone />
          Contact Support
        </li>
      </ul>
    </div>
  );
}
