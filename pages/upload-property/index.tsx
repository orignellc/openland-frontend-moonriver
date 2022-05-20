import { ChangeEvent, FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Web3Storage } from "web3.storage"
import * as ethers from "ethers";
import Web3Modal from "web3modal"
import { useRouter } from "next/router";

import { uploadPropertyToIpfs } from "../../services/uploadPropertyToIpfs"
import makeFilesObject from "../../utils/makeFilesObject"
import Tabs from "../../components/pages/ChooseProperty/Tabs";
import Input from "../../components/ui/Input/Input";
import Backdrop from "../../components/ui/Backdrop/Backdrop";
import UploadPropertyConfirmationModal from "../../components/UploadPropertyConfirmationModal/UploadPropertyConfirmationModal";
import PropertyUploadSuccessModal from "../../components/PropertyUploadSuccessModal/PropertyUploadSuccessModal";
import FractionSalesModal from "../../components/FractionSalesModal/FractionSalesModal";

import PropertyModel from "../../models/propertyModel";
import { FACTORY_ADDRESS, NFT_ADDRESS } from "../../constants/contractAddresses";
const NFT_ABI = require("../../abi/nftabi.json")

interface UploadPropertyModal {
  togglePropertyModal: () => void;
}

const UploadProperty: FC<UploadPropertyModal> = (props) => {
  const { togglePropertyModal } = props;

  const [confirmationModal, setConfirmationModal] = useState(false)
  const [successUpload, setSuccessUpload] = useState(false)
  const [showUploadedProperties, setShowUploadedProperties] = useState(false)
  const [showFractionSalesModal, setShowFractionSalesModal] = useState(false)
  const [info, setInfo] = useState(true)
  const [url, setUrl] = useState("")
  const [data, setFormData] = useState<PropertyModel>({ name: "", location: "", title: "", size: "", about: "", image: "" })
  const [fileUrl, setFileUrl] = useState("");

  const router = useRouter()

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<PropertyModel>();

  const formSubmitHandler = async () => {
    const formattedData = makeFilesObject(data)

    // UPLOAD IMAGE

    // SEND TO WEB3STORAGE
    try {
      const urlResponse = await uploadPropertyToIpfs(formattedData)
      setUrl(urlResponse)
    } catch (error) {
      console.log("ERRORRR", error)
    }


    const web3modal = new Web3Modal()
    const connection = await web3modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    const nftContract = new ethers.Contract(NFT_ADDRESS, NFT_ABI, signer)

    const mintProperty = await nftContract.mintProperty(url)

    await mintProperty.wait()

    const userWalletAddress = window.ethereum.selectedAddress()

    setConfirmationModal(false)
    setSuccessUpload(true)

    router.push(`${userWalletAddress}/uploaded-properties`)
  }

  const toggleShowUploadedProperties = () => setShowUploadedProperties(true)
  const toggleShowFractionSalesModal = () => setShowFractionSalesModal(true)

  const captureFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const storage = new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ0MmMzZTk4NGNhY0MxODZCMDVCY2IyNGMyZUQzN2VBNDQ1OEJFMGQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTI3MTQ0NTE5MTUsIm5hbWUiOiJvcGVubGFuZCJ9.Z2BBkxc7cQ9Ot5ZD8_LLAqSA4ck9fgNUrwJjoIzj9Zg" })

    // const files = makeFileObjects()
    // const cid = await storage.put(files)
    // https://dweb.link/ipfs/${cid} THIS IS THE RETURNED URL
  }

  return (
    <>
      <Backdrop showBackdrop={confirmationModal}>
        <UploadPropertyConfirmationModal formSubmitHandler={formSubmitHandler} />
      </Backdrop>
      <Backdrop showBackdrop={successUpload}>
        <PropertyUploadSuccessModal toggleShowUploadedProperties={toggleShowUploadedProperties} />
      </Backdrop>
      <Backdrop showBackdrop={successUpload}>
        <FractionSalesModal toggleShowFractionSalesModal={toggleShowFractionSalesModal} />
      </Backdrop>
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
            setFormData(data)
            setConfirmationModal(true)
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
              <input
                id="upload-image"
                className="hidden"
                type="file"
                onChange={captureFile}
                multiple
              // {...register("image", {
              //   required: "Please upload an image",
              // })}
              />
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
              <button type="submit" className="px-12 py-2 bg-[#0FB95D] text-white border rounded-md">
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

