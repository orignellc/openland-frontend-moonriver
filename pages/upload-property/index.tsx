import { FC, useState } from "react";
import { useForm } from "react-hook-form";

import Tabs from "../../components/pages/ChooseProperty/Tabs";
import Input from "../../components/ui/Input/Input";
import Backdrop from "../../components/ui/Backdrop/Backdrop";
import UploadPropertyConfirmationModal from "../../components/UploadPropertyConfirmationModal/UploadPropertyConfirmationModal";
import PropertyUploadSuccessModal from "../../components/PropertyUploadSuccessModal/PropertyUploadSuccessModal";

import { useRouter } from "next/router";

interface UploadPropertyModal {
  togglePropertyModal: () => void;
}

const UploadProperty: FC<UploadPropertyModal> = (props) => {
  const { togglePropertyModal } = props;

  const [confirmationModal, setConfirmationModal] = useState(false)
  const [successUpload, setSuccessUpload] = useState(false)
  const [showUploadedProperties, setShowUploadedProperties] = useState(false)
  const [info, setInfo] = useState(true)

  const router = useRouter()

  interface propertyModel {
    name: string,
    location: string,
    title: string,
    size: string,
    about: string,
  }

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<propertyModel>();

  const formSubmitHandler = async (data: propertyModel) => {
    // SUBMIT THE FORM
    console.log(data)
    setConfirmationModal(false)
    setSuccessUpload(true)
  }

  const toggleShowUploadedProperties = () => {
    setShowUploadedProperties(true)
  }

  return (
    <>
      {/* <Backdrop showBackdrop={confirmationModal}>
        <UploadPropertyConfirmationModal formSubmitHandler={formSubmitHandler} />
      </Backdrop> */}
      <Backdrop showBackdrop={successUpload}>
        <PropertyUploadSuccessModal toggleShowUploadedProperties={toggleShowUploadedProperties} />
      </Backdrop>
      {/* <Backdrop showBackdrop={showUploadedProperties}>
        <UploadedProperties />
      </Backdrop> */}
      <div className="px-4 lg:px-[134px] py-10 lg:py-[137px] top-0 left-0 fixed z-[60] bg-white w-screen h-screen overflow-y-scroll">
        <div className="flex justify-between">
          <div />
          <img
            onClick={() => router.push("/")}
            src="/assets/images/svg/cancel.svg"
            alt="cancel"
            className="cursor-pointer"
          />
        </div>
        <Tabs />

        <form
          onSubmit={handleSubmit((data) => {
            formSubmitHandler(data);
            reset();
          })}
          className="px-4 lg:px-[134px]">
          <div className="text-center my-[70px]">
            <h4 className="font-semibold text-3xl mb-3 lg:text-[42px]">Upload Property Details</h4>
            <p className="font-medium text-lg text-[#555555]">
              Kindly provide all of the necessary details of the land
            </p>
          </div>

          <div className="flex flex-col mb-6">
            <label className="font-medium text-[#1C2420] mb-[6px]" htmlFor="What is the name of your property? *">
              What is the name of your property? *
            </label>
            <input {...register("name", {
              required: "Property name is required",
            })}
              id="What is the name of your property? *" className="border border-[#D6D6DD] rounded-[4px] shadow-sm focus:outline-none px-2 py-2" />
            {errors.name && (
              <p className="text-red-500 text-xs italic">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="flex flex-col mb-6">
            <label className="font-medium text-[#1C2420] mb-[6px]" htmlFor="Where is the location of your property? *">
              Where is the location of your property? *
            </label>
            <input {...register("location", {
              required: "Property location is required",
            })}
              id="Where is the location of your property? *" className="border border-[#D6D6DD] rounded-[4px] shadow-sm focus:outline-none px-2 py-2" />
            {errors.location && (
              <p className="text-red-500 text-xs italic">
                {errors.location.message}
              </p>
            )}
          </div>

          <div className="flex flex-col mb-6">
            <label className="font-medium text-[#1C2420] mb-[6px]" htmlFor="What is the title of your property? *">
              What is the title of your property? *
            </label>
            <input {...register("title", {
              required: "Property title is required",
            })}
              id="What is the title of your property? *" className="border border-[#D6D6DD] rounded-[4px] shadow-sm focus:outline-none px-2 py-2" />
            {errors.title && (
              <p className="text-red-500 text-xs italic">
                {errors.title.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col mb-6">
              <label className="font-medium text-[#1C2420] mb-[6px]" htmlFor="What is the total size of your property? *">
                What is the total size of your property? *
              </label>
              <input  {...register("size", {
                required: "Please specify the size of your property in SQM",
              })}
                id="What is the total size of your property? *" className="border border-[#D6D6DD] rounded-[4px] shadow-sm focus:outline-none px-2 py-2" />
              <span className="text-sm lg:text-base text-[rgba(85,85,85,0.6)]">The value should be in square meters (sqm)</span>
              {errors.size && (
                <p className="text-red-500 text-xs italic">
                  {errors.size.message}
                </p>
              )}
            </div>

            <div className="flex items-center">
              How many do you want to fractionalize? *
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <label htmlFor="about-property" className="mb-[6px]">
              About the property *
            </label>
            <textarea
              id=""
              cols={30}
              rows={5}
              className="border border-[#D6D6DD] focus:outline-none p-5"
              {...register("about", {
                required: "Please write a description about the property",
              })}
            />
            {errors.about && (
              <p className="text-red-500 text-xs italic">
                {errors.about.message}
              </p>
            )}
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

          {info && <div className="mt-8 flex items-center justify-between border bg-[#FCFCFD] border-[#D0D5DD] rounded-lg px-4 py-4">
            <img src="/assets/images/svg/info.svg" alt="info" className="mr-3" />
            <p className="font-medium text-sm">Kindly note that this property would be made into an NFT</p>
            <img src="/assets/images/svg/cancel.svg" alt="cancel" className="cursor-pointer" onClick={() => setInfo(false)} />
          </div>}

          <hr className="border-[#D6D6DD mt-8" />

          <div className="flex justify-between mt-5">
            <div />
            <div>
              <button className="px-12 mr-2 py-2 text-[#374151] border rounded-md">
                Cancel
              </button>
              <button type="submit" onClick={() => setConfirmationModal(true)} className="px-12 py-2 bg-[#0FB95D] text-white border rounded-md">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UploadProperty;
