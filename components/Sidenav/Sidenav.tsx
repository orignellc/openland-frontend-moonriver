import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"

import Classes from "./sidenav.module.css"
import Logo from "../../public/assets/images/svg/logo-text.svg";
import Fractionalize from "../../public/assets/images/svg/fractionalize.svg";
import BuyTokens from "../../public/assets/images/svg/buy-tokens.svg";
import Button from "../ui/Button/Button";

interface SidenavProps {
  showSidenav: boolean;
  toggleSidenav: () => void;
}

const Sidenav: FC<SidenavProps> = (props) => {
  const { showSidenav, toggleSidenav } = props;

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  return (
    <aside
      className={`fixed pb-[72px] duration-1000 ease-in-out transition-transform -translate-x-[100%] ${Classes.sideNav} z-[500] flex justify-between flex-col top-0 left-0 w-screen h-screen bg-white 
      ${showSidenav && "-translate-x-0 duration-200 ease-in-out"}`}
    >
      <div>
        <div className="h-[70px] pl-4 flex justify-between items-center shadow-sm">
          <div>
            <Image src={Logo} width="85" height="37" alt="Logo" />
          </div>
          <img
            onClick={toggleSidenav}
            src="/assets/images/svg/cancel.svg"
            alt="X"
            className=""
            width=""
            height=""
          />
        </div>

        <ul className="mt-8 px-4 font-semibold text-base text-[#555555]">
          <li className="mb-8">
            <Link href="#">
              <a className="">Features</a>
            </Link>
          </li>
          <li className="mb-8">
            <Link href="#">
              <a className="">Explore</a>
            </Link>
          </li>
          <li className="mb-8">
            <Link href="#">
              <a className="">How It works</a>
            </Link>
          </li>
          <li className="mb-8">
            <ul
              className="flex justify-between items-center"
              onClick={toggleDropdown}
            >
              <li>More</li>
              <li>
                <img
                  src={
                    showDropdown
                      ? "../assets/images/svg/arrow-up.svg"
                      : "../assets/images/svg/arrow-down.svg"
                  }
                  alt="toggle"
                  className="w-[10px] h-[15px] cursor-pointer"
                />
              </li>
            </ul>


            <AnimatePresence>
              {showDropdown && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-[41px]"
                >
                  <li>
                    <ul className="flex mb-4">
                      <div className="w-11 grid place-content-center mr-2 h-11 rounded-[50%] bg-[#F7F8F8]">
                        <Image
                          src={Fractionalize}
                          height="20.71"
                          width="20.71"
                          alt="fractionalize"
                        />
                      </div>
                      <div className="w-[291px]">
                        <h6 className="font-medium text-base text-black">
                          Fractionalize NFTs
                        </h6>
                        <p className="text-sm font-normal text-[#727A76]">
                          Select the NFT(s) you own and transfer to a new vault to
                          be fractionalized
                        </p>
                      </div>
                    </ul>
                    <ul className="flex mb-4">
                      <div className="w-11 grid place-content-center mr-2 h-11 rounded-[50%] bg-[#F7F8F8]">
                        <Image
                          src={BuyTokens}
                          height="20.71"
                          width="20.71"
                          alt="fractionalize"
                        />
                      </div>
                      <div className="w-[291px]">
                        <h6 className="font-medium text-base text-black">
                          Buy Tokens
                        </h6>
                        <p className="text-sm font-normal text-[#727A76]">
                          Buy tokens from other crypto assets
                        </p>
                      </div>
                    </ul>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>

          </li>
        </ul>
      </div>

      <div className="px-4 flex justify-center">
        <Button link="#" btnType="fill">Connect wallet</Button>
      </div>
    </aside>
  );
};

export default Sidenav;
