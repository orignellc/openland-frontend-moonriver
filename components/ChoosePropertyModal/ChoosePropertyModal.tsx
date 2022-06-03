import { FC } from "react";
import { useRouter } from "next/router";

import Tabs from "../pages/ChooseProperty/Tabs";

interface ChoosePropertyModalProps {
  showChoosePropertyModal: boolean;
  toggleChoosePropertyModal: () => void;
  togglePropertyModal: () => void;
}

const ChoosePropertyModal: FC<ChoosePropertyModalProps> = (props) => {
  const {
    showChoosePropertyModal,
    toggleChoosePropertyModal,
    togglePropertyModal,
  } = props;

  const router = useRouter()

  const userWalletAddress = typeof window !== "undefined" && window.ethereum.selectedAddress

  if (!showChoosePropertyModal) return <></>;

  return (
    <div className="z-[60] fixed w-screen h-screen top-0 left-0 bg-white">
      <div className="flex justify-between p-3 lg:px-[258px]">
        <div />
        <img
          src="/assets/images/svg/cancel.svg"
          alt="cancel"
          className="cursor-pointer"
          onClick={toggleChoosePropertyModal}
        />
      </div>

      <Tabs />

      <div className="text-center mb-[70px]">
        <h4 className="font-semibold text-3xl lg:text-[42px]">
          Choose Property{" "}
        </h4>
        <p className="font-medium lg:text-lg text-[#555555]">
          Kindly choose what property to fractionalize
        </p>
      </div>

      <div
        onClick={() => router.push(`${userWalletAddress}/uploaded-properties`)}
        className="flex max-w-[343px] lg:max-w-full mx-auto place-content-center mb-3 cursor-pointer hover:scale-105 duration-200">
        <div className="border border-[#999999] py-8 px-6 lg:px-[70px] w-[793px] rounded-2xl flex justify-between items-start">
          <div className="w-[253px] mx-auto sm:w-[230px] lg:w-[519px]">
            <h5 className="font-medium text-2xl">Uploaded Property</h5>
            <p className="font-normal text-lg text-[#555555]">
              Kindly select previously uploaded properties which you have not
              fractionalized
            </p>
          </div>
          <div>
            <img
              src="/assets/images/svg/more.svg"
              className="w-[10px] h-[10px]"
              alt="arrow"
            />
          </div>
        </div>
      </div>

      <div
        onClick={() => router.push("/upload-property")}
        className="flex max-w-[343px] pb-20 lg:max-w-full mx-auto place-content-center mb-3 cursor-pointer hover:scale-105 duration-200"
      >
        <div className="border border-[#999999] py-8 px-6 lg:px-[70px] w-[793px] rounded-2xl flex justify-between items-start">
          <div className="w-[253px] mx-auto sm:w-[230px] lg:w-[519px]">
            <h5 className="font-medium text-2xl">New Property</h5>
            <p className="font-normal text-lg text-[#555555]">
              Kindly select previously uploaded properties which you have not
              fractionalized
            </p>
          </div>
          <div>
            <img
              src="/assets/images/svg/more.svg"
              className="w-[10px] h-[10px]"
              alt="arrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChoosePropertyModal;
