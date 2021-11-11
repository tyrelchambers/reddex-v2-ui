const primary = (props) => (
  <button
    type="button"
    className={`bg-accent-primary text-white  h-12 px-4 rounded-md font-semibold ${
      props.className ? props.className : ""
    }`}
  >
    {props.children}
  </button>
);

export const Button = ({ variant, ...props }) => {
  return primary(props);
};
