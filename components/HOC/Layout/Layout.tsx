import { FC, ReactNode, useState } from "react";

import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Sidenav from "../../Sidenav/Sidenav";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = (props) => {
  const { children } = props;
  const [showSidenav, setShowSidenav] = useState(false);

  const toggleSidenav = () => setShowSidenav((prevState) => !prevState);

  return (
    <>
      <Sidenav toggleSidenav={toggleSidenav} showSidenav={showSidenav} />
      <Header toggleSidenav={toggleSidenav} />
      <main className="pt-[93px]">{children}</main>
      <Footer />
    </>
  );
};

export default Wrapper;
