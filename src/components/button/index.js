import "./styles.scss";

const Button = ({ text, theme, size, ...props }) => {
  return (
    <button
      {...props}
      className={`button button__theme--${
        theme ? theme : "classic"
      } button__size--${size ? size : "medium"}`}
    >
      {text}
    </button>
  );
};

export default Button;
