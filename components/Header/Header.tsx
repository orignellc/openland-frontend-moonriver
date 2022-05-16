import { FC, useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ethers } from "ethers";

import Logo from "../../public/assets/images/svg/logo-text.svg";
import Avatar from "../../public/assets/images/svg/avatar.jpg";
import MagnifyingGlass from "../../public/assets/images/svg/magnifying-glass.svg";
import SettingGear from "../../public/assets/images/svg/settings-gear.svg";
import Button from "../ui/Button/Button";
import Backdrop from "../ui/Backdrop/Backdrop";
import ConnectWalletModal from "../ConnectWalletModal/ConnectWalletModal";
import Dropdown from "./Dropdown";
import { AuthContext } from "../../context/Context";
import Search from "../Search/Search";
import connectedNetworkCheck from "../../utils/connectedNetworkCheck";

const styles = {
  nav: "bg-[#ffffff] z-[50] fixed w-full h-[93px] px-4 lg:px-[40px] 2xl:px-[50px]",
  navItems: "w-full flex items-center justify-between h-full",
};

interface HeaderProps {
  toggleSidenav: () => void;
}

const Header: FC<HeaderProps> = (props) => {
  const {
    state: { user },
    dispatch,
  } = useContext(AuthContext);

  const { toggleSidenav } = props;
  const [showDropdown, setShowdropdown] = useState(false);
  const [showConnectWalletModal, setShowConnectWalletModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleShowdropdown = () => setShowdropdown((prevState) => !prevState);
  const toggleConnectWalletModal = () =>
    setShowConnectWalletModal((prevState) => !prevState);
  const toggleSearch = () => setShowSearch(prevState => !prevState)

  const connectToMetamask = async () => {
    if (typeof window === "undefined") return
    // @ts-ignore
    if (!window.ethereum) { // Checking if the user has metamask
      return alert("Please you need to have metamask installed");
    }

    // @ts-ignore
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    // CHECK CONNECTED NETWORK
    try {
      await connectedNetworkCheck()
      dispatch({
        type: "LOGGED_IN_USER",
        payload: accounts[0]
      })
    } catch (error) {
      alert("Please add moonbase network to continue")
    }
    setShowConnectWalletModal(false)
  };

  const connectWallet = async () => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      if (!window.ethereum) { // Checking if the user has metamask
        return alert("Please you need to have metamask installed");
      }

      await connectToMetamask();
      // @ts-ignore
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      // @ts-ignore
      // console.log(ethers.providers.getNetwork(0x505))
    }
  }

  // useEffect(() => {
  //   connectWallet()
  // }, [])

  return (
    <>
      <Backdrop showBackdrop={showConnectWalletModal}>
        <ConnectWalletModal
          toggleConnectWalletModal={toggleConnectWalletModal}
          connectToMetamask={connectToMetamask}
        />
      </Backdrop>
      <Search showSearch={showSearch} setShowSearch={toggleSearch} />
      <nav className={styles.nav}>
        <ul className={styles.navItems}>
          <li className="">
            <Link href="/">
              <img
                src="/assets/images/svg/logo-text.svg"
                alt="open-land-logo"
                className="cursor-pointer h-[37px] w-[85px] lg:h-[54px] lg:w-[124px]"
              />
            </Link>
          </li>
          <ul className="flex items-center">
            <li className="w-[42px] mr-4 h-[42px] rounded-[50%] relative" onClick={toggleSearch}>
              <input
                type="text"
                // placeholder="search by property name or development company"
                className="focus:outline-none rounded-[50%] h-full w-full bg-[#F7F8F8]"
              />
              <img
                src="/assets/images/svg/magnifying-glass.svg"
                alt="search-icon"
                className="w-[18px] h-[18px] absolute top-[50%] -translate-y-1/2 -translate-x-1/2 left-[50%]"
              />
            </li>
            <li className="hidden lg:block">
              <ul className="flex text-[#555555] text-xs 2xl:text-sm">
                <li>
                  <Link href="#">
                    <a className="mx-[24px] 2xl:mx-8">Features</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="mx-[24px] 2xl:mx-8">Explore</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="mx-[24px] 2xl:mx-8">How It works</a>
                  </Link>
                </li>
                <li
                  className="flex cursor-pointer items-center relative"
                  onMouseEnter={toggleShowdropdown}
                  onMouseLeave={toggleShowdropdown}
                >
                  <Link href="#">
                    <a className="mx-[24px] 2xl:mx-8">More</a>
                  </Link>
                  <img
                    src="/assets/images/svg/drop-down.svg"
                    alt="more"
                    className="w-3 h-[6px]"
                  />
                  {showDropdown && <Dropdown />}
                </li>
              </ul>
            </li>
            {!user && (
              <li className="hidden lg:block mx-10">
                <Button onClick={toggleConnectWalletModal} btnType="fill">
                  Connect wallet
                </Button>
              </li>
            )}
            {user && (
              <li className="hidden lg:block mx-[17px]">
                <Button link="/choose-property" btnType="outline">
                  Buy Fractions
                </Button>
              </li>
            )}
            <li className="2xl:w-[52px] mr-[19px] w-[47px] h-[47px] 2xl:h-[52px] rounded-[100px] bg-[#F7F8F8] grid place-content-center overflow-hidden">
              <Image src={SettingGear} alt="settings" width="22" height="22" />
            </li>
            {user && (
              <li className="2xl:w-[52px] w-[44px] rounded-[50%] overflow-hidden h-[44px] 2xl:h-[52px]">
                <Link href="#">
                  <Image
                    src={Avatar}
                    layout={"responsive"}
                    className="cursor-pointer"
                    alt="user-avatar"
                  />
                </Link>
              </li>
            )}

            <div className="cursor-pointer lg:hidden" onClick={toggleSidenav}>
              <div className="w-[18px] h-[2px] bg-black my-1" />
              <div className="w-[18px] h-[2px] bg-black my-1" />
              <div className="w-[18px] h-[2px] bg-black my-1" />
            </div>
          </ul>
        </ul>
      </nav>
    </>
  );
};

export default Header;
