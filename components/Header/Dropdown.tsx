import Image from "next/image";
import Fractionalize from "../../public/assets/images/svg/fractionalize.svg";
import BuyTokens from "../../public/assets/images/svg/buy-tokens.svg";

const Dropdown = () => (
  <ul className="mt-[41px] w-[546px] absolute top-[-100%] left-[-100px] bg-white rounded-lg px-6 py-9">
    <li>
      <ul className="flex mb-9">
        <div className="w-11 grid place-content-center mr-2 h-11 rounded-[50%] bg-[#F7F8F8]">
          <Image
            src={Fractionalize}
            height="20.71"
            width="20.71"
            alt="fractionalize"
          />
        </div>
        <div className="">
          <h6 className="font-medium text-base text-black">
            Fractionalize NFTs
          </h6>
          <p className="text-sm font-normal text-[#727A76]">
            Select the NFT(s) you own and transfer to a new vault to be
            fractionalized
          </p>
        </div>
      </ul>
      <ul className="flex">
        <div className="w-11 grid place-content-center mr-2 h-11 rounded-[50%] bg-[#F7F8F8]">
          <Image
            src={BuyTokens}
            height="20.71"
            width="20.71"
            alt="fractionalize"
          />
        </div>
        <div className="">
          <h6 className="font-medium text-base text-black">Buy Tokens</h6>
          <p className="text-sm font-normal text-[#727A76]">
            Buy tokens from other crypto assets
          </p>
        </div>
      </ul>
    </li>
  </ul>
);

export default Dropdown;
