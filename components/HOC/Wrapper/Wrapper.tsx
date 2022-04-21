import { FC, ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = (props) => {
  const { children } = props;

  return <div>{children}</div>;
};

export default Wrapper;
