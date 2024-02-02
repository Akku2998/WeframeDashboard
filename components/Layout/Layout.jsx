import { TopNavBar } from "..";
import { SideNavBar } from "../SideNavBar/SideNavbar";

export function Layout({ children }) {
  return (
    <>
      <main>
        <div className="grid grid-rows-8 grid-flow-col">
          {/* Sidenavbar section */}
          <div className="row-span-8">
            <SideNavBar />
          </div>

          {/* Header section */}
          <div className="row-span-1 col-span-2">
            <TopNavBar />
          </div>

          {/* Content section */}
          <div className="row-span-7 col-span-2 bg-grey-100">{children}</div>
        </div>
      </main>
    </>
  );
}
