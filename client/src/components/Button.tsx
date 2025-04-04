import { ButtonProps } from "../types/Props";

const Button = ({ label, styles, type }: ButtonProps) => {
  return (
    <button type={type} className={`${styles} cursor-pointer`}>
      {label}
    </button>
  );
};

export default Button;
