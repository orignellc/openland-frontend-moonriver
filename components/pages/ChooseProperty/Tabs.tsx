const Tabs = () => {
  return (
    <div className="grid px-4 place-content-center mt-[22px] mb-9 lg:mb-[70px]">
      <div className="flex items-center">
        <h6 className="lg:px-[39px] cursor-not-allowed py-2 font-medium text-[#999999]">
          Connect wallet
        </h6>
        <p className="px-2 lg:px-6">/</p>
        <h6 className="lg:px-[39px] text-xs lg:text-base text-center cursor-pointer py-2 font-medium text-[#014520] bg-[#E3FCEF] rounded-2xl">
          Choose Property
        </h6>
        <p className="px-2 lg:px-6">/</p>
        <h6 className="lg:px-[39px] py-2 font-medium text-[#999999]">
          Fractionalize{" "}
        </h6>
      </div>
    </div>
  );
};

export default Tabs;
