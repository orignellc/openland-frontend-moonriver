import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  btnType: "outline" | "fill";
  padding: string;
  fontSize: string;
  fontWeight: string;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, btnType, padding, fontSize, fontWeight } = props;

  const outline_or_fill =
    btnType === "fill"
      ? ""
      : btnType === "outline"
      ? "bg-white border border-color-primary text-color-primary"
      : "";

  return (
    <button
      className={`${outline_or_fill} ${padding} ${fontSize} ${fontWeight} rounded-[40px]`}
    >
      {children}
    </button>
  );
};

export default Button;
