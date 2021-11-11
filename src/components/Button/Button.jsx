const primary = (props) => (
  <button
    type="button"
    className={`bg-accent-primary text-white  h-12 px-4 rounded-md  ${
      props.className ? props.className : ""
    }`}
  >
    {props.children}
  </button>
);

const secondary = (props) => (
  <button
    type="button"
    className={`bg-gray-200 text-gray-700  h-12 px-4 rounded-md  ${
      props.className ? props.className : ""
    }`}
  >
    {props.children}
  </button>
);

export const Button = ({ variant, ...props }) => {
  if (variant === "secondary") {
    return secondary(props);
  }

  return primary(props);
};
