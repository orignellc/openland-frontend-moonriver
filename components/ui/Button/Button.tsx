import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  btnType: "outline" | "fill" | "outline-white";
}

const Button: FC<ButtonProps> = (props) => {
  const { children, btnType } = props;

  const outline_or_fill_or_outline_white =
    btnType === "fill"
      ? "bg-color-primary text-white"
      : btnType === "outline"
      ? "bg-transparent border text-color-primary border-color-primary"
      : "bg-transparent border border-color-tertiary text-white opacity-90";

  return (
    <button
      className={`${outline_or_fill_or_outline_white} hover:shadow-md hover:-translate-y-1 duration-100 px-11 py-[17px] font-medium rounded-[40px]`}
    >
      {children}
    </button>
  );
};

export default Button;
