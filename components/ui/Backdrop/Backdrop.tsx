import { FC, ReactNode } from "react";

interface BackdropProps {
  children: ReactNode;
  showBackdrop: boolean;
}

const Backdrop: FC<BackdropProps> = (props) => {
  const { children, showBackdrop } = props;

  if (!showBackdrop) return <></>;

  return (
    <div className="fixed top-0 left-0 z-[600] grid place-content-center h-screen w-screen bg-[#3F544880]">
      {children}
    </div>
  );
};

export default Backdrop;
