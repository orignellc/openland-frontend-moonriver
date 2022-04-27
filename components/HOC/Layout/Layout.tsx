import { FC, ReactNode } from "react";

import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = (props) => {
  const { children } = props;

  return (
    <>
      {/* <Header /> */}
      <main className="pt-[93px]">{children}</main>
      <Footer />
    </>
  );
};

export default Wrapper;
