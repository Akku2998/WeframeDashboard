export const ThreeDots = ({ height = "7px", width = "21px", ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 7"
      fill="none"
      {...props}
    >
      <circle cx="3.21239" cy="3.49996" r="2.915" fill="#9058FF" />
      <circle cx="10.4996" cy="3.49996" r="2.915" fill="#9058FF" />
      <circle cx="17.7876" cy="3.49996" r="2.915" fill="#9058FF" />
    </svg>
  );
};
