import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/assets/images/svg/logo-text.svg";
import Avatar from "../../public/assets/images/svg/avatar.svg";
import MagnifyingGlass from "../../public/assets/images/svg/magnifying-glass.svg";
import SettingGear from "../../public/assets/images/svg/settings-gear.svg";
import Button from "../ui/Button/Button";

const styles = {
  nav: "bg-[#ffffff] z-[50] fixed w-full h-[93px] px-4 lg:px-[40px] 2xl:px-[50px]",
  navItems: "flex w-full items-center justify-between h-full",
};

interface HeaderProps {
  toggleSidenav: () => void;
}

const Header: FC<HeaderProps> = (props) => {
  const { toggleSidenav } = props;

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.navItems}>
          <li>
            <Link href="/">
              <Image
                src={Logo}
                height="54"
                width="124"
                className="cursor-pointer"
                alt="open-land-logo"
              />
            </Link>
          </li>
          {/* <li className="">
            <ul className="relative">
              <li className="absolute top-[55%] -translate-y-1/2 left-[32px]">
                <Image
                  src={MagnifyingGlass}
                  alt="search-icon"
                  width="24"
                  height="24"
                />
              </li>
              <li>
                <input
                  type="text"
                  placeholder="search by property name or development company"
                  className="2xl:w-[391px] focus:outline-none w-[42px] h-[42px] rounded-[50%] lg:w-[357px] lg:h-[55px] font-medium text-xs lg:rounded-[50px] pl-[64px] pr-[32px] bg-color-tertiary"
                />
              </li>
            </ul>
          </li> */}
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
              <li>
                <Link href="#">
                  <a className="mx-[24px] 2xl:mx-8">More</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="hidden lg:block">
            <Button btnType="outline">Buy Fractions</Button>
          </li>
          <li className="2xl:w-[52px] w-[47px] h-[47px] 2xl:h-[52px] rounded-[100px] bg-[#F7F8F8] grid place-content-center overflow-hidden">
            <Image src={SettingGear} alt="settings" width="22" height="22" />
          </li>
          <li className="2xl:w-[52px] w-[47px] h-[47px] 2xl:h-[52px] hidden lg:block">
            <Link href="#">
              <Image
                src={Avatar}
                layout={"responsive"}
                className="cursor-pointer"
                alt="user-avatar"
              />
            </Link>
          </li>

          <div className="cursor-pointer lg:hidden" onClick={toggleSidenav}>
            <div className="w-[18px] h-[2px] bg-black my-1" />
            <div className="w-[18px] h-[2px] bg-black my-1" />
            <div className="w-[18px] h-[2px] bg-black my-1" />
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Header;
