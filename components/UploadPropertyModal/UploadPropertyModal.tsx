import { FC, useState } from "react";

import Tabs from "../../components/pages/ChooseProperty/Tabs";
import Input from "../../components/ui/Input/Input";
import Backdrop from "../ui/Backdrop/Backdrop";
import UploadPropertyConfirmationModal from "../UploadPropertyConfirmationModal/UploadPropertyConfirmationModal";

interface UploadPropertyModal {
  showUploadPropertyModal: boolean;
  togglePropertyModal: () => void;
}

const UploadPropertyModal: FC<UploadPropertyModal> = (props) => {
  const { showUploadPropertyModal, togglePropertyModal } = props;

  const [confirmationModal, setConfirmationModal] = useState(false)

  if (!showUploadPropertyModal) return <></>;

  const formSubmitHandler = async () => {
    // SUBMIT THE FORM
    setConfirmationModal(false)
  }

  return (
    <>
      <Backdrop showBackdrop={confirmationModal}>
        <UploadPropertyConfirmationModal formSubmitHandler={formSubmitHandler} />
      </Backdrop>
      <div className="px-[134px] py-[137px] top-0 left-0 fixed z-[60] bg-white w-screen h-screen overflow-y-scroll">
        <div className="flex justify-between">
          <div />
          <img
            onClick={togglePropertyModal}
            src="/assets/images/svg/cancel.svg"
            alt="cancel"
            className="cursor-pointer"
          />
        </div>
        <Tabs />

        <form className="px-[134px]">
          <div className="text-center my-[70px]">
            <h4 className="font-semibold text-[42px]">Upload Property Details</h4>
            <p className="font-medium text-lg text-[#555555]">
              Kindly provide all of the necessary details of the land
            </p>
          </div>

          <Input label="What is the name of your property? *" />
          <Input label="Where is the location of your property? *" />
          <Input label="What is the title of your property? *" />
          <div className="grid grid-cols-2 gap-6">
            <Input label="What is the total size of your property? *" />
            <div className="flex items-center">
              How many do you want to fractionalize? *
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <label htmlFor="about-property" className="mb-[6px]">
              About the property *
            </label>
            <textarea
              name=""
              id=""
              cols={30}
              rows={5}
              className="border border-[#D6D6DD] focus:outline-none p-5"
            />
          </div>

          <div className="flex flex-col mb-10">
            <label htmlFor="upload-image" className="mb-[6px]">
              <p className="mb-2">Upload photos *</p>
              <input id="upload-image" className="hidden" type="file" />
              <div className="w-full text-center grid place-content-center h-[200px] border border-[#D6D6DD] cursor-pointer border-dotted">
                <img
                  src="/assets/images/svg/img.svg"
                  className="w-9 h-9 mx-auto mb-4"
                  alt="img"
                />
                <p className="font-medium text-[#555555] mb-1">
                  <span className="text-[#0FB95D]">Upload a file</span> or drag
                  and drop
                </p>
                <p className="text-[#999999]">
                  PNG, JPG, GIF up to 10MB for each{" "}
                </p>
              </div>
            </label>
          </div>

          <hr className="border-[#D6D6DD mb-6" />

          <h4 className="text-[#111827] mb-1">Notifications</h4>
          <p className="text-[#777B76]">
            We&apos;ll always let you know about important changes, but you pick what
            else you want to hear about.
          </p>

          <div className="mt-6">
            <h6 className="font-medium text-[#555] mb-4">By Email</h6>

            <div className="flex">
              <input type="checkbox" name="" id="" />
              <div className="flex flex-col ml-3">
                <p className="font-medium text-[#374151]">Comments</p>
                <p className="text-[#6B7280] text-sm">
                  Get notified when someones purchases a fraction.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-[#D6D6DD mt-[42px]" />

          <div className="flex justify-between mt-5">
            <div />
            <div>
              <button className="px-12 mr-3 py-2 text-[#374151] border rounded-md">
                Cancel
              </button>
              <button type="button" onClick={() => setConfirmationModal(true)} className="px-12 py-2 bg-[#0FB95D] text-white border rounded-md">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UploadPropertyModal;
