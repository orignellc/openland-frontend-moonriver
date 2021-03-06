import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import FeaturesCard from "../components/pages/index/FeaturesCard/FeaturesCard";
import AffordableIcon from "../public/assets/images/svg/affordable.svg";
import truthlessIcon from "../public/assets/images/svg/truthless.svg";
import daoIcon from "../public/assets/images/svg/dao.svg";
import commodityIcon from "../public/assets/images/svg/commodity.svg";
import PropertiesCard from "../components/PropertiesCard/PropertiesCard";
import Button from "../components/ui/Button/Button";
import TeamCard from "../components/TeamCard/TeamCard";
import ChoosePropertyModal from "../components/ChoosePropertyModal/ChoosePropertyModal";
import connectedNetworkCheck from "../utils/connectedNetworkCheck";
import isAuthenticated from "../utils/isAuthenticated";
import Alert from "../components/ui/Alert/Alert";
import AlertModel from "../models/AlertModel";

const Home: NextPage = () => {
  const [showChoosePropertyModal, setShowChoosePropertyModal] = useState(false);
  const [showUploadPropertyModal, setShowUploadPropertyModal] = useState(false);
  const [showAlert, setShowAlert] = useState<AlertModel>({ message: "", show: false, timer: 0, variant: "danger" });

  const toggleChoosePropertyModal = async () => {
    if (!isAuthenticated()) {
      alert("Please Connect Metamask")
      // setShowAlert({ message: "Please Connect Metamask", show: true, timer: 6000, variant: "danger" })
      return
    }
    try {
      await connectedNetworkCheck()
      setShowChoosePropertyModal((prevState) => !prevState);
    } catch (error) {

    }
  }
  const togglePropertyModal = () => {
    if (!isAuthenticated()) {
      alert("Please Connect Metamask")
      // setShowAlert({ message: "Please Connect Metamask", show: true, timer: 6000, variant: "danger" })
      return
    }
    setShowChoosePropertyModal(false);
    setShowUploadPropertyModal((prevState) => !prevState);
  };

  return (
    <>
      <Head>
        <title>Open Land</title>
        <meta name="description" content="OpenLand is the most open platform for buying, selling and earning returns on land assets on the blockchain." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* CHOOSE PROPERTY MODAL */}
      <ChoosePropertyModal
        togglePropertyModal={togglePropertyModal}
        toggleChoosePropertyModal={toggleChoosePropertyModal}
        showChoosePropertyModal={showChoosePropertyModal}
      />

      <Alert setShowAlert={setShowAlert} showAlert={showAlert} />

      {/* HERO SECTION */}
      <header className="w-full h-[80vh] lg:h-[100vh] grid place-content-center bg-no-repeat bg-cover bg-[url('/assets/images/png/hero.png')]">
        <div className="2xl:w-[710px] w-[345px] lg:w-[648px]">
          <h1 className="mb-[33px] font-bold 2xl:text-[70px] text-[36px] lg:text-[64px] text-center text-white">
            Own &amp; Trade Fractions of Land
          </h1>
          <p className="text-base lg:text-xl text-center text-white 2xl:text-[26px] mb-8 lg:mb-[96px]">
            OpenLand is the most open platform for buying, selling and earning
            returns on land assets on the blockchain.
          </p>
          <div className="flex-col lg:flex-row flex justify-between">
            <Button onClick={toggleChoosePropertyModal} btnType="fill">
              List your property
            </Button>
            <div className="mb-4 lg:mb-0 lg:hidden" />
            <Button link="/properties" btnType="outline">
              Explore Properties
            </Button>
          </div>
        </div>
      </header>

      {/* FEATURES */}
      <section className={styles.featuresContainer}>
        <div className={styles.featuresHeading}>
          <h2 className={styles.featuresHeadingText}>Features</h2>
          <p className={styles.featuresHeadingDescription}>
            We give investors tools to help them purchase affordable properties,
            optimize sale decisions, identify yield and profit opportunities,
            and set their prize amongst other services.
          </p>
        </div>

        <div className={styles.FeaturesCardContainer}>
          {APPLICATION_FEATURES.map((feature) => (
            <FeaturesCard key={feature.featureHeading} feature={feature} />
          ))}
        </div>
      </section>

      {/* DESCRIPTION IMAGE */}
      <section className={styles.descriptionImageContainer}>
        <div className={styles.descriptionImageContainer_}>
          <img
            src="/assets/images/svg/descriptionImage.svg"
            alt="descriptionImage"
            className={styles.descriptionImage}
          />
        </div>
        <p className={styles.descriptionImageDescription}>
          * The values mentioned are just for examples only and do not mean
          actual ownership figures in a particular vault.
        </p>
        <div className="flex-col lg:flex-row flex w-full lg:w-[550px] mx-auto justify-between">
          <Button onClick={toggleChoosePropertyModal} btnType="fill">
            List your property
          </Button>
          <div className="mb-4 lg:mb-0 lg:hidden" />
          <Button link="/properties" btnType="outline">
            Explore Properties
          </Button>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className={styles.featuredPropertiesContainer}>
        <div className={styles.featuredPropertiesContainer_}>
          <div>
            <h2 className={styles.featuredPropertiesContainerHeading}>
              Featured Properties
            </h2>
            <p className={styles.featuredPropertiesContainerDescription}>
              Some of our featured properties up for sale
            </p>
          </div>

          <div className="hidden lg:block">
            <Button link="/properties" btnType="outline-white">
              View all
            </Button>
          </div>
        </div>

        <div className={styles.featuredPropertiesCardContainer}>
          {FEATURED_PROPERTIES.map((property, idx) => {
            return <PropertiesCard key={idx} property={property} />;
          })}
        </div>

        <div className="grid place-content-center lg:hidden">
          <Button link="#" btnType="outline-white">
            View all
          </Button>
        </div>
      </section>

      <section className="bg-[#F9F9F9] py-[120px] px-4 lg:px-[70px]">
        <h3 className="font-semibold text-[42px] text-center lg:text-left mb-20">
          Built on
        </h3>

        <div className="flex lg:flex-row flex-col items-center">
          <img
            src="/assets/images/svg/moonriver.svg"
            className="w-[511px] h-[108px]"
            alt="moon_river"
          />
          <img
            src="/assets/images/svg/moonbeam.svg"
            className="w-[571px] h-[160px]"
            alt="moon_beam"
          />
        </div>
      </section>

      <section className="py-[120px] px-4 lg:px-[70px]">
        <h3 className="mb-[27px] font-semibold text-3xl lg:text-[42px]">
          The Team behind OpenLand
        </h3>

        <p className="text-base text-[#555555]">
          OpenLand was built with love for Africa{" "}
          <span className="text-red-500">&hearts;</span>{" "}
          <span className="text-sm">Powered by</span>{" "}
          <Link href="#">
            <a className="font-normal text-lg text-black underline">
              Origineum FZCO
            </a>
          </Link>
        </p>

        <div className="mt-[75px] flex flex-wrap">
          {TEAMS.map((team) => (
            <TeamCard team={team} key={team.name} />
          ))}
        </div>
      </section>
    </>
  );
};

const TEAMS = [
  {
    image: "/assets/images/png/femi.png",
    name: "Oluwafemi Alofe",
    title: "Blockchain Developer",
  },
  {
    image: "/assets/images/png/emma.png",
    name: "Emmanuel Joseph",
    title: "Fullstack Developer",
  },
  {
    image: "/assets/images/png/dummy-avatar.jpg",
    name: "Paul Oladimeji",
    title: "Product Manager",
  },
  {
    image: "/assets/images/png/bose.png",
    name: "Abosede May",
    title: "Product Designer",
  },
];

const APPLICATION_FEATURES = [
  {
    featureIcon: AffordableIcon,
    featureHeading: "Affordable",
    featureDescription: "Buy any amount of land you can afford in fractions.",
  },
  {
    featureIcon: truthlessIcon,
    featureHeading: "Trustless",
    featureDescription:
      "Ownership and transfer is permanently recorded on the blockchain",
  },
  {
    featureIcon: daoIcon,
    featureHeading: "DAO-based",
    featureDescription: "Tokenized ownership and voting rights on properties",
  },
  {
    featureIcon: commodityIcon,
    featureHeading: "Commodity",
    featureDescription:
      "As a commodity, Earn passive returns on your land when traded as a commodity.",
  },
];

const FEATURED_PROPERTIES = [
  {
    image: "/assets/images/png/Image-1.png",
    name: "Angol Estate",
    location: "Epe, Lagos",
    amountPerFraction: "20",
    fractionLeft: "10",
    fraction: "15",
    sqm: "8,000",
  },
  {
    image: "/assets/images/png/Image-2.png",
    name: "Angol Estate",
    location: "Epe, Lagos",
    amountPerFraction: "20",
    fractionLeft: "10",
    fraction: "15",
    sqm: "8,000",
  },
  {
    image: "/assets/images/png/Image-3.png",
    name: "Angol Estate",
    location: "Epe, Lagos",
    amountPerFraction: "20",
    fractionLeft: "10",
    fraction: "15",
    sqm: "8,000",
  },
  {
    image: "/assets/images/png/Image-4.png",
    name: "Angol Estate",
    location: "Epe, Lagos",
    amountPerFraction: "20",
    fractionLeft: "10",
    fraction: "15",
    sqm: "8,000",
  },
  {
    image: "/assets/images/png/Image-5.png",
    name: "Angol Estate",
    location: "Epe, Lagos",
    amountPerFraction: "20",
    fractionLeft: "10",
    fraction: "15",
    sqm: "8,000",
  },
  {
    image: "/assets/images/png/Image-6.png",
    name: "Angol Estate",
    location: "Epe, Lagos",
    amountPerFraction: "20",
    fractionLeft: "10",
    fraction: "15",
    sqm: "8,000",
  },
];

const styles = {
  featuresContainer: "lg:py-[120px] w-full py-[64px] bg-color-tertiary",
  featuresHeading: "mb-16",
  featuresHeadingText: "font-semibold text-[42px] text-center mb-3",
  featuresHeadingDescription:
    "max-w-4xl text-[18px] text-[#555555] px-4 mx-auto text-center",
  FeaturesCardContainer: "flex w-full flex-wrap px-[16px] lg:px-[70px]",
  descriptionImageContainer: "lg:py-[120px] py-[60px] lg:px-0 px-[16px]",
  descriptionImageContainer_:
    "2xl:w-[1137px] w-full lg:w-[1039px] mx-auto mb-[62px]",
  descriptionImage: "w-full h-full object-cover",
  descriptionImageDescription:
    "ml-auto text-right max-w-[543px] 2xl:max-w-[597px] lg:mr-[70px] text-[#999999] text-xs lg:text-sm mb-[70px]",
  featuredPropertiesContainer:
    "bg-color-secondary px-[16px] text-center 2xl:px-[72px] py-[60px] lg:py-[120px]",
  featuredPropertiesContainer_: "mb-[82px] lg:flex justify-between items-center 2xl:px-[72px] text-center",
  featuredPropertiesContainerHeading: "text-[30px] lg:px-[70px] lg:text-[42px] font-semibold text-white",
  featuredPropertiesContainerDescription: "text-base lg:px-[70px] lg:text-left lg:text-lg text-white",
  featuredPropertiesCardContainer: "flex flex-wrap justify-around w-full",
};

export default Home;
