const Footer = () => {
  return (
    <footer className="bg-[#002C14] px-4 py-16 lg:p-[70px]">
      <div className="flex px-4 flex-col lg:flex-row items-center justify-between mb-[64px]">
        <div className="mb-8 lg:mb-0">
          <img
            src="/assets/images/svg/logo-text.svg"
            alt="logo"
            className="mb-[10px]"
          />
          <p className="2xl:w-[364px] w-[331px] text-white">
            We enhance value of bare lands in the Real Estate Industry
          </p>
        </div>

        <ul className="flex">
          <li className="w-[57px] cursor-pointer h-[57px] grid place-content-center mr-8 rounded-[50%] bg-[rgba(227,252,239,0.24)]">
            <img
              src="/assets/images/svg/twitter.svg"
              alt="twitter"
              className="w-6 lg:w-[41px] h-6 lg:h-[41px]"
            />
          </li>
          <li className="w-[57px] cursor-pointer h-[57px] grid place-content-center mr-8 rounded-[50%] bg-[rgba(227,252,239,0.24)]">
            <img
              src="/assets/images/svg/instagram.svg"
              alt="instagram"
              className="w-6 lg:w-[41px] h-6 lg:h-[41px]"
            />
          </li>
          <li className="w-[57px] cursor-pointer h-[57px] grid place-content-center mr-8 rounded-[50%] bg-[rgba(227,252,239,0.24)]">
            <img
              src="/assets/images/svg/telegram.svg"
              alt="telegram"
              className="w-6 lg:w-[41px] h-6 lg:h-[41px]"
            />
          </li>
          <li className="w-[57px] cursor-pointer h-[57px] grid place-content-center mr-8 rounded-[50%] bg-[rgba(227,252,239,0.24)]">
            <img
              src="/assets/images/svg/youtube.svg"
              alt="youtube"
              className="w-6 lg:w-[41px] h-6 lg:h-[41px]"
            />
          </li>
        </ul>
      </div>

      <hr className="border border-white" />

      <p className="font-light text-sm mt-6 text-white">
        Copyright © OpenLand 2022. All rights reserved.{" "}
      </p>
    </footer>
  );
};

export default Footer;
