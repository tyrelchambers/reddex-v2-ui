const primary = (props) => (
  <button
    type="button"
    className={`bg-accent-primary text-white p-4 rounded-md font-semibold ${
      props.className ? props.className : ""
    }`}
  >
    {props.children}
  </button>
);

export const Buttons = ({ variant, ...props }) => {
  return primary(props);
};
