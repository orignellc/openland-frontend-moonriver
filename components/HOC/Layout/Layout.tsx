import { FC, ReactNode, useState } from "react";
import ChoosePropertyModal from "../../ChoosePropertyModal/ChoosePropertyModal";

import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Sidenav from "../../Sidenav/Sidenav";
import UploadPropertyModal from "../../UploadPropertyModal/UploadPropertyModal";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = (props) => {
  const { children } = props;
  const [showSidenav, setShowSidenav] = useState(false);
  const [showChoosePropertyModal, setShowChoosePropertyModal] = useState(false);
  const [showUploadPropertyModal, setShowUploadPropertyModal] = useState(false);

  const toggleSidenav = () => setShowSidenav((prevState) => !prevState);
  const togglePropertyModal = () => setShowUploadPropertyModal((prevState) => !prevState);
  const toggleChoosePropertyModal = () => setShowChoosePropertyModal((prevState) => !prevState);

  return (
    <>
      <Sidenav toggleSidenav={toggleSidenav} showSidenav={showSidenav} />
      <Header toggleSidenav={toggleSidenav} />
      <UploadPropertyModal showUploadPropertyModal={showUploadPropertyModal} togglePropertyModal={togglePropertyModal} />
      <ChoosePropertyModal showChoosePropertyModal={showChoosePropertyModal} toggleChoosePropertyModal={toggleChoosePropertyModal} togglePropertyModal={togglePropertyModal} />
      <main className="pt-[93px]">{children}</main>
      <Footer />
    </>
  );
};

export default Wrapper;
