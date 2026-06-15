import { FiArrowDown, FiArrowRight } from "react-icons/fi";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  href,
  download,
  target,
  rel,
  iconDirection = "right",
  ...props
}) => {
  const Icon = iconDirection === "down" ? FiArrowDown : FiArrowRight;
  const classes = `hero-button ${iconDirection === "down" ? "hero-button--down " : ""}${className}`.trim();
  const content = (
    <>
      <span className="hero-button-label">{children}</span>
      <span className="hero-button-icon" aria-hidden="true">
        <Icon />
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={classes}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
