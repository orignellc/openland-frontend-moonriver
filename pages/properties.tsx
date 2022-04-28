import PropertiesCard from "../components/pages/index/PropertiesCard/PropertiesCard";
import Button from "../components/ui/Button/Button";

const Properties = () => (
  <div className="mt-[154px] px-4 lg:px-[70px]">
    <div className="flex justify-center lg:justify-between items-center mb-[79px]">
      <div className="text-center lg:text-left">
        <h3 className="color-black font-semibold text-[42px]">
          Our Properties
        </h3>
        <p className="text-lg text-[#555555]">
          Some of our featured properties up for sale
        </p>
      </div>
      <input
        className="px-8 hidden lg:block py-3 border border-[#555555] rounded-lg focus:outline-none placeholder:text-[#555555] text-[#555555]"
        placeholder="Filter by"
      />
    </div>

    {/* properties card */}
    <div className="flex flex-wrap">
      {FEATURED_PROPERTIES.map((property, idx) => {
        return <PropertiesCard key={idx} property={property} />;
      })}
    </div>

    <div className="grid place-content-center mb-[120px] mt-12">
      <Button btnType="outline">Load More</Button>
    </div>
  </div>
);

const FEATURED_PROPERTIES = [
  {
    image: "/assets/images/png/image-1.png",
    name: "Angol Estate",
    location: "Epe, Lagos",
    amountPerFraction: "20",
    fractionLeft: "10",
    fraction: "15",
    sqm: "8,000",
  },
  {
    image: "/assets/images/png/image-2.png",
    name: "Angol Estate",
    location: "Epe, Lagos",
    amountPerFraction: "20",
    fractionLeft: "10",
    fraction: "15",
    sqm: "8,000",
  },
  {
    image: "/assets/images/png/image-3.png",
    name: "Angol Estate",
    location: "Epe, Lagos",
    amountPerFraction: "20",
    fractionLeft: "10",
    fraction: "15",
    sqm: "8,000",
  },
  {
    image: "/assets/images/png/image-4.png",
    name: "Angol Estate",
    location: "Epe, Lagos",
    amountPerFraction: "20",
    fractionLeft: "10",
    fraction: "15",
    sqm: "8,000",
  },
  {
    image: "/assets/images/png/image-5.png",
    name: "Angol Estate",
    location: "Epe, Lagos",
    amountPerFraction: "20",
    fractionLeft: "10",
    fraction: "15",
    sqm: "8,000",
  },
  {
    image: "/assets/images/png/image-6.png",
    name: "Angol Estate",
    location: "Epe, Lagos",
    amountPerFraction: "20",
    fractionLeft: "10",
    fraction: "15",
    sqm: "8,000",
  },
  {
    image: "/assets/images/png/image-1.png",
    name: "Angol Estate",
    location: "Epe, Lagos",
    amountPerFraction: "20",
    fractionLeft: "10",
    fraction: "15",
    sqm: "8,000",
  },
  {
    image: "/assets/images/png/image-2.png",
    name: "Angol Estate",
    location: "Epe, Lagos",
    amountPerFraction: "20",
    fractionLeft: "10",
    fraction: "15",
    sqm: "8,000",
  },
  {
    image: "/assets/images/png/image-3.png",
    name: "Angol Estate",
    location: "Epe, Lagos",
    amountPerFraction: "20",
    fractionLeft: "10",
    fraction: "15",
    sqm: "8,000",
  },
  {
    image: "/assets/images/png/image-4.png",
    name: "Angol Estate",
    location: "Epe, Lagos",
    amountPerFraction: "20",
    fractionLeft: "10",
    fraction: "15",
    sqm: "8,000",
  },
  {
    image: "/assets/images/png/image-5.png",
    name: "Angol Estate",
    location: "Epe, Lagos",
    amountPerFraction: "20",
    fractionLeft: "10",
    fraction: "15",
    sqm: "8,000",
  },
  {
    image: "/assets/images/png/image-6.png",
    name: "Angol Estate",
    location: "Epe, Lagos",
    amountPerFraction: "20",
    fractionLeft: "10",
    fraction: "15",
    sqm: "8,000",
  },
];

export default Properties;
