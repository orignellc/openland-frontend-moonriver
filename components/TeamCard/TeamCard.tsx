import { FC } from "react";

interface TeamCardProps {
  team: {
    image: string;
    name: string;
    title: string;
    linkedinURL?: string;
  };
}

const TeamCard: FC<TeamCardProps> = (props) => {
  const {
    team: { image, name, title, linkedinURL },
  } = props;

  return (
    <div className="2xl:w-[313.5px] w-[286px] mb-5 hover:-translate-y-1 duration-100 hover:shadow-md mx-auto py-10 px-[39px] 2xl:px-[44.75px] rounded-lg bg-color-tertiary">
      <div className="w-[204px] 2xl:w-[218px] h-[204px] 2xl:h-[218px] overflow-hidden rounded-[50%] mb-10">
        <img src={image} alt={name} className="w-full h-full object-contain" />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h6 className="font-medium text-xl text-[#16231C] mb-1">{name}</h6>
          <p className="font-medium text-color-primary">{title}</p>
        </div>

        <img
          src="/assets/images/svg/linkedin.svg"
          className="w-[18px] h-[18px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TeamCard;
