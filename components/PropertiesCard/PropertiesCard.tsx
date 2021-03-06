import { FC } from "react";

interface PropertiesCardProps {
  // property: {
  //   image: string;
  //   name: string;
  //   location: string;
  //   amountPerFraction: string;
  //   sqm: string;
  //   fraction: string;
  //   fractionLeft: string;
  //   verificationStatus?: boolean
  // };
  property: any,
  verificationBadge?: boolean;
  uploadedProperty?: boolean;
  propertyDetailsHandler?: (tokenId: number) => void
}

const PropertiesCard: FC<PropertiesCardProps> = (props) => {
  const {
    property: {
      about,
      image,
      landmark,
      location,
      name,
      percentageToFractionalize,
      propertyFeatures,
      size,
      title,
      tokenId
      // amountPerFraction,
      // sqm,
      // fraction,
      // fractionLeft,
      // verificationStatus
    },
    verificationBadge,
    uploadedProperty,
    propertyDetailsHandler
  } = props;

  const verificationStatus = true

  const clickHandler = (tokenId: number) => {
    typeof window !== "undefined" && localStorage.setItem("openland-image-url", image)
    propertyDetailsHandler && propertyDetailsHandler(tokenId)
  }

  return (
    <div>
      <div className={styles.propertiesCardContainer}>
        {verificationBadge && <div className={`font-semibold flex items-center absolute z-50 top-[30px] bg-white ${!verificationStatus ? "text-[#555555]" : "text-color-primary"} left-[30px] px-6 py-[10px] rounded-[30px] border ${verificationStatus ? "border-white" : "border-[#F2B705]"} text-[13.5px]`}>
          <img src={`${verificationStatus ? "/assets/images/svg/verified.svg" : "/assets/images/svg/verify.svg"}`} alt="verify" className="w-[18px] h-[18px] mr-[7.5px]" /> {verificationStatus ? "verified" : "Not Verified"}
        </div>}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 duration-500"
        />

        <div
          style={{ backdropFilter: "blur(24px)" }}
          className="absolute p-[24px] text-white z-10 h-[194px] bg-[rgba(255,255,255,0.3)] w-full bottom-0 left-0"
        >
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold text-3xl">{name.substring(0, 7) + "..."}</h3>
            <img
              src="/assets/images/svg/arrow-right.svg"
              alt="feature"
              className="w-[24px] h-[30px]"
            />
          </div>
          <p className="font-medium text-base text-left flex justify-start mb-1">{location}</p>
          <div className="flex justify-between mb-1">
            <p className="font-extrabold text-base">
              ${20} / fraction
            </p>
            <p className="font-semibold text-base">{size}sqm</p>
          </div>
          <p className="flex justify-start">
            {10} out of {15} fractions left
          </p>
        </div>

      </div>
      {
        uploadedProperty && propertyDetailsHandler &&
        <button
          disabled={!verificationStatus}
          onClick={() => clickHandler(tokenId)}
          className="disabled:text-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed disabled:hover:shadow-none mb-9 w-full text-[#0FB95D] hover:shadow-[#0FB95D] hover:shadow-sm border rounded-[50px] py-[16.5px] border-[#0FB95D]">
          Choose
        </button>
      }
    </div>
  );
};

const styles = {
  propertiesCardContainer:
    "relative 2xl:w-[406px] mx-auto w-[340px] h-[528px] rounded-2xl overflow-hidden mb-[48px] border border-transparent cursor-pointer",
};

export default PropertiesCard;
