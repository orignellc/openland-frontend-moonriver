import Link from "next/link";
import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  btnType: "outline" | "fill" | "outline-white";
  link?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, btnType, link, onClick } = props;

  const outline_or_fill_or_outline_white =
    btnType === "fill"
      ? "bg-color-primary text-white"
      : btnType === "outline"
      ? "bg-transparent border text-color-primary border-color-primary"
      : "bg-transparent border border-color-tertiary text-white opacity-90";

  if (!link) {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`${outline_or_fill_or_outline_white} hover:shadow-md hover:-translate-y-1 duration-100 px-11 py-[17px] font-medium rounded-[40px]`}
      >
        {children}
      </button>
    );
  }

  return (
    <Link href={link}>
      <button
        type="button"
        className={`${outline_or_fill_or_outline_white} hover:shadow-md hover:-translate-y-1 duration-100 px-11 py-[17px] font-medium rounded-[40px]`}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
