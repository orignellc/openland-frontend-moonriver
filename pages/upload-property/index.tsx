import { ChangeEvent, FC, useState, useEffect, SetStateAction, Dispatch } from "react";
import { useForm } from "react-hook-form";
import { Web3Storage } from "web3.storage"
import * as ethers from "ethers";
import { useRouter } from "next/router";
import { Range, getTrackBackground } from "react-range";
import { Tag, WithContext as ReactTags } from 'react-tag-input';

import { uploadPropertyToIpfs } from "../../services/uploadPropertyToIpfs"
import makeFilesObject from "../../utils/makeFilesObject"
import Tabs from "../../components/pages/ChooseProperty/Tabs";
import GetWeb3Signer from "../../utils/getWeb3Signer"
import Backdrop from "../../components/ui/Backdrop/Backdrop";
import UploadPropertyConfirmationModal from "../../components/UploadPropertyConfirmationModal/UploadPropertyConfirmationModal";
import PropertyUploadSuccessModal from "../../components/PropertyUploadSuccessModal/PropertyUploadSuccessModal";
import FractionSalesModal from "../../components/FractionSalesModal/FractionSalesModal";

import PropertyModel from "../../models/propertyModel";
import { NFT_ADDRESS } from "../../constants/contractAddresses";
import Alert from "../../components/ui/Alert/Alert";
import AlertModel from "../../models/AlertModel";
const NFT_ABI = require("../../abi/nftabi.json")

interface UploadPropertyModal {
  togglePropertyModal: () => void;
}

const intialFormState: PropertyModel = { name: "", location: "", title: "", size: 0, about: "", image: "", landmark: "", propertyFeatures: "" }

const UploadProperty: FC<UploadPropertyModal> = (props) => {
  const { togglePropertyModal } = props;

  const [confirmationModal, setConfirmationModal] = useState(false)
  const [successUpload, setSuccessUpload] = useState(false)
  const [minting, setMinting] = useState(false)
  const [showUploadedProperties, setShowUploadedProperties] = useState(false)
  const [imagePrev, setImagePreview] = useState<any>()
  const [info, setInfo] = useState(true)
  const [localImageUrl, setLocalImageUrl] = useState<any>()
  const [percentageToFractionalize, setPercentageToFractionalize] = useState([0.01]);
  const [data, setFormData] = useState<PropertyModel>(intialFormState)
  const [showAlert, setShowAlert] = useState<AlertModel>({ message: "", show: false, timer: 5000, variant: "danger" })
  const [tags, setTags] = useState<Tag[]>([]);
  const [featureTags, setFeatureTags] = useState<Tag[]>([]);

  const router = useRouter()

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<PropertyModel>();

  const handleAddition = (tag: Tag) => {
    setTags([...tags, tag]);
  };
  const handleDelete = (i: number) => {
    setTags(tags.filter((tag, index) => index !== i));
  };
  const handleAdditionFeatures = (tag: Tag) => {
    setFeatureTags([...featureTags, tag]);
  };
  const handleDeleteFeatures = (i: number) => {
    setFeatureTags(featureTags.filter((tag, index) => index !== i));
  };

  const KeyCodes = {
    comma: 188,
    enter: 13
  };

  const delimiters = [KeyCodes.comma, KeyCodes.enter];

  const formSubmitHandler = async () => {
    if (data.size <= 0) {
      setShowAlert({ message: "Size must be a valid number", show: true, timer: 5000, variant: "danger" })
      return
    }

    setMinting(true)
    // 1_ IMAGE UPLOAD
    const storage = new Web3Storage({ token: process.env.NEXT_PUBLIC_WEB3STORAGE_TOKEN! })

    if (!localImageUrl) return alert("Please select an image")

    console.log(localImageUrl);

    const cid = await storage.put([localImageUrl])
    const imageUrl = `https://dweb.link/ipfs/${cid}/${localImageUrl.name}`

    // console.log(imageUrl);


    const formattedData = makeFilesObject(
      { ...data, landmark: tags, propertyFeatures: featureTags, percentageToFractionalize: percentageToFractionalize[0], image: imageUrl },
      "property-details.json"
    )

    // // 2_ SEND DATA TO IPFS
    const urlResponse = await uploadPropertyToIpfs(formattedData)

    // // 3_ MINT Property   
    const signer = await new GetWeb3Signer().getSigner()

    const nftContract = new ethers.Contract(NFT_ADDRESS, NFT_ABI, signer)

    const mintProperty = await nftContract.mintProperty(urlResponse)

    await mintProperty.wait()

    const userWalletAddress = typeof window !== "undefined" && window.ethereum.selectedAddress

    setConfirmationModal(false)
    setSuccessUpload(true)
    setMinting(false)

    router.push(`${userWalletAddress}/uploaded-properties`)
  }

  // Handle Change
  const captureFile = async (event: ChangeEvent<HTMLInputElement>) => {
    setLocalImageUrl(event.target.files![0])
  }

  const toggleShowUploadedProperties = () => setShowUploadedProperties(true)

  useEffect(() => {
    if (localImageUrl) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(localImageUrl)
    } else {
      setImagePreview(null)
    }
  }, [localImageUrl])

  return (
    <>
      <Backdrop showBackdrop={confirmationModal}>
        <UploadPropertyConfirmationModal cancelFormSubmit={() => setConfirmationModal(false)} minting={minting} formSubmitHandler={formSubmitHandler} />
      </Backdrop>
      <Backdrop showBackdrop={successUpload}>
        <PropertyUploadSuccessModal toggleShowUploadedProperties={toggleShowUploadedProperties} />
      </Backdrop>
      <Alert setShowAlert={setShowAlert} showAlert={showAlert} />
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
        <Tabs activeTab="ChooseProperty" />

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
              <input min={0} type="number" {...register("size", {
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

            <div className="flex items-start relative flex-col">
              <p className="text-left">How many do you want to fractionalize? *</p>
              <RangeComponent
                percentageToFractionalize={percentageToFractionalize}
                setPercentageToFractionalize={setPercentageToFractionalize}
              />
              <div className="flex justify-between items-center w-full">
                <span>50%</span>
                <span className="bg-gray-900 py-2 px-4 rounded-md font-bold text-white">{percentageToFractionalize[0]} %</span>
              </div>
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

          <div className="flex flex-col mb-6">
            <label htmlFor="landmark" className="mb-[6px]">
              What are the Landmarks? *
            </label>
            <ReactTags
              tags={tags}
              delimiters={delimiters}
              handleDelete={handleDelete}
              handleAddition={handleAddition}
              inputFieldPosition="bottom"
            />
          </div>

          <div className="flex flex-col mb-6">
            <label htmlFor="propertyFeatures" className="mb-[6px]">
              What are the Estate Features? *
            </label>
            <ReactTags
              tags={featureTags}
              delimiters={delimiters}
              handleDelete={handleDeleteFeatures}
              handleAddition={handleAdditionFeatures}
              inputFieldPosition="bottom"
            />
          </div>


          <div className="flex flex-col mb-10">
            <label htmlFor="upload-image" className="mb-[6px]">
              <p className="mb-2">Upload photo *</p>
              <input
                id="upload-image"
                className="hidden"
                type="file"
                onChange={captureFile}
              />
              <div className="w-full text-center grid place-content-center h-[200px] border border-[#D6D6DD] cursor-pointer border-dotted">
                {imagePrev ? <img src={imagePrev} className="w-full h-[200px]" /> : <>
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
                </>}
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

interface RangeComponentProps {
  setPercentageToFractionalize: Dispatch<SetStateAction<number[]>>
  percentageToFractionalize: number[]
}

const RangeComponent: FC<RangeComponentProps> = (props) => {
  const { setPercentageToFractionalize, percentageToFractionalize } = props

  const RANGE_STEP = 0.01;
  const RANGE_MIN_VALUE = 0.01;
  const RANGE_MAX_VALUE = 50;

  return (
    <Range
      values={percentageToFractionalize}
      step={RANGE_STEP}
      min={RANGE_MIN_VALUE}
      max={RANGE_MAX_VALUE}
      onChange={(values) => setPercentageToFractionalize(values)}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            height: "36px",
            display: "flex",
            width: "100%",
          }}
        >
          <div
            ref={props.ref}
            style={{
              height: "5px",
              width: "100%",
              borderRadius: "4px",
              background: getTrackBackground({
                values: percentageToFractionalize,
                colors: ["#0FB95D", "#F4F5F4"],
                min: RANGE_MIN_VALUE,
                max: RANGE_MAX_VALUE,
              }),
              alignSelf: "center",
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          className="h-[14px] w-[14px] rounded-[50%] bg-[#0FB95D] outline-none"
        />
      )}
    />
  );
};