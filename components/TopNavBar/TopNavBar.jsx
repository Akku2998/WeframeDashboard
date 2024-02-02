import { SearchBar, CustomDatePicker, ProfileHeader } from "..";

export function TopNavBar() {
  return (
    <div className="flex flex justify-between items-center w-full h-full px-8">
      <SearchBar />
      <div className="flex gap-8">
        <CustomDatePicker />
        <ProfileHeader />
      </div>
    </div>
  );
}
