export const H1 = ({ children, className = "", ...props }) => (
  <h1
    className={`font-bold text-3xl text-primary-black  ${className}`}
    {...props}
  >
    {children}
  </h1>
);
