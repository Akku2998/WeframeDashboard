import { IconContainer } from "..";

export function SimpleCard({ icon, title, description }) {
  return (
    <div className="flex p-6 bg-white rounded-xl gap-3">
      <IconContainer className="h-16 w-16">{icon}</IconContainer>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm font-light">{description}</p>
      </div>
    </div>
  );
}
