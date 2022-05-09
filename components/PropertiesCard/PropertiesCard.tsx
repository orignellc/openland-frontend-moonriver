import { FC } from "react";

interface PropertiesCardProps {
  property: {
    image: string;
    name: string;
    location: string;
    amountPerFraction: string;
    sqm: string;
    fraction: string;
    fractionLeft: string;
  };
  verificationBadge?: boolean;
  uploadedProperty?: boolean
}

const PropertiesCard: FC<PropertiesCardProps> = (props) => {
  const {
    property: {
      image,
      name,
      location,
      amountPerFraction,
      sqm,
      fraction,
      fractionLeft,
    },
    verificationBadge,
    uploadedProperty
  } = props;

  return (
    <div>
      <div className={styles.propertiesCardContainer}>
        {verificationBadge && <div className="font-semibold absolute z-50 top-[30px] bg-white text-[#555555] left-[30px] px-6 py-[10px] rounded-[30px] border border-[#F2B705] text-[13.5px]">
          Not Verified
        </div>}
        <img
          src={image}
          alt="land"
          className="w-full h-full object-cover hover:scale-105 duration-500"
        />

        <div
          style={{ backdropFilter: "blur(24px)" }}
          className="absolute p-[24px] text-white z-10 h-[194px] bg-[rgba(255,255,255,0.3)] w-full bottom-0 left-0"
        >
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold text-3xl">{name}</h3>
            <img
              src="/assets/images/svg/arrow-right.svg"
              alt="feature"
              className="w-[24px] h-[30px]"
            />
          </div>
          <p className="font-medium text-lg mb-1">{location}</p>
          <div className="flex justify-between mb-1">
            <p className="font-extrabold text-base">
              ${amountPerFraction} / fraction
            </p>
            <p className="font-semibold text-base">{sqm}sqm</p>
          </div>
          <p>
            {fractionLeft} out of {fraction} fractions left
          </p>
        </div>

      </div>
      {
        uploadedProperty &&
        <button className="mb-9 w-full text-[#0FB95D] hover:shadow-[#0FB95D] hover:shadow-sm border rounded-[50px] py-[16.5px] border-[#0FB95D]">Choose</button>
      }
    </div>
  );
};

const styles = {
  propertiesCardContainer:
    "relative 2xl:w-[406px] mx-auto w-[369px] h-[528px] rounded-2xl overflow-hidden mb-[48px] border border-transparent cursor-pointer",
};

export default PropertiesCard;