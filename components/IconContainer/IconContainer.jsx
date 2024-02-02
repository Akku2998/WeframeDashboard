export function IconContainer({ children, className = "h-6 w-6" }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-voilet-100 d-inline-block text-xs text-voilet-50 ${className}`}
    >
      {children}
    </div>
  );
}
