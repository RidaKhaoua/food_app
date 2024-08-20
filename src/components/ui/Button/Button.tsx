import React from "react";
import "./styles.css";

type TButton = {
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  children: string;
  disabled: boolean;
  className?: string;
  style: React.CSSProperties;
};

const Button = ({
  onClick,
  children,
  style,
  type = "button",
  disabled = false,
  className = "",
}: TButton) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      disabled={disabled}
      className={className}>
      {children}
    </button>
  );
};

export default Button;
