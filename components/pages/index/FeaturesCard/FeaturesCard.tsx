import Image from "next/image";
import { FC } from "react";

interface FeaturesCardProps {
  feature: {
    featureIcon: any;
    featureHeading: string;
    featureDescription: string;
  };
}

const FeaturesCard: FC<FeaturesCardProps> = (props) => {
  const {
    feature: { featureIcon, featureHeading, featureDescription },
  } = props;

  return (
    <div className="w-[280px] 2xl:w-[307px] text-left">
      <Image src={featureIcon} width="78" height="78" alt={featureHeading} />
      <h4 className="mt-6 font-semibold text-[26px]">{featureHeading}</h4>
      <p className="text-lg text-[#555555] mt-4">{featureDescription}</p>
    </div>
  );
};

export default FeaturesCard;
