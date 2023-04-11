import React from "react";

interface Props {
  children: string;
  btnType?: "primary" | "secondary" | "danger" | "success"; // defining allowed values
  onClick: () => void;
}
const Button = ({ children, btnType = "primary", onClick }: Props) => {
  return (
    <button type='button' className={`btn btn-${btnType}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
