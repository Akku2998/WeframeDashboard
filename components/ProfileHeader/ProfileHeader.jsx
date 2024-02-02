import { DownArrow } from "@/svgs";
import Image from "next/image";

export function ProfileHeader() {
  return (
    <div className="flex border bg-gray-50 rounded-lg items-center gap-2 px-2">
      <Image src="/user.png" height={28} width={28} alt="user image" />
      <div className="flex flex-col mr-12">
        <p className="text-xs">Welcome back</p>
        <p className="text-base">Akshita Patel</p>
      </div>
      <DownArrow />
    </div>
  );
}
