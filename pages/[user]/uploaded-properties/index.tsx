import { useState, useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/router";
import { Web3Storage } from "web3.storage"
import * as ethers from "ethers";
import Web3Modal from "web3modal"

import Tabs from "../../../components/pages/ChooseProperty/Tabs"
import PropertiesCard from "../../../components/PropertiesCard/PropertiesCard";
import Backdrop from "../../../components/ui/Backdrop/Backdrop";
import { NFT_ADDRESS } from "../../../constants/contractAddresses";
const NFT_ABI = require("../../../abi/nftabi.json")


const UploadedProperties = () => {
    const [showPropertyDetails, setShowPropertiesDetails] = useState(false)
    const [FetchedNFTs, setNFTs] = useState<any>([])

    const router = useRouter()

    const propertyDetailsHandler = () => {
        router.push("/user-1/uploaded-properties/p1")
    }

    useEffect(() => {
        const userAddress = window.location.pathname.split("/")[1]
        // Fetch User NFT
        const fetchNFTs = async () => {
            const { data: { result: NFTs } } = await axios.get("https://api-moonriver.moonscan.io/api?module=account&action=tokennfttx&address=0x027B533Cf04D4CCEdc0C9df97405fe230E6c71af&startblock=0&endblock=999999999&sort=asc")

            const web3modal = new Web3Modal()
            const connection = await web3modal.connect()
            const provider = new ethers.providers.Web3Provider(connection)
            const signer = provider.getSigner()

            const nftContract = new ethers.Contract(NFT_ADDRESS, NFT_ABI, signer)
            let transformedNFT = [];

            for (let i = 0; i <= NFTs.length - 1; i++) {
                const NFTItem = NFTs[i];

                const NFTsURI = await nftContract.tokenURI(NFTItem.tokenID)
                transformedNFT.push(NFTsURI)
            }

            setNFTs(transformedNFT)
            console.log(transformedNFT)

        };

        fetchNFTs()
    }, [])

    return (
        <>
            <div className="top-0 left-0 fixed z-[60] bg-white py-[130px] w-screen h-screen overflow-y-scroll px-[px] mx-auto">
                <div className="flex justify-between mb-[29px]">
                    <img src="/assets/images/svg/arrow-left.svg" alt="back" className="cursor-pointer" onClick={() => router.push("/")} />
                    <img src="/assets/images/svg/cancel.svg" alt="cancel" className="cursor-pointer" onClick={() => router.push("/")} />
                </div>

                <Tabs />

                <div className="mb-[67px]">
                    <h5 className="font-semibold text-[42px] text-center mb-[10px]">Uploaded Properties</h5>
                    <p className="font-medium text-lg text-center">You can only choose one property to be fractionalized</p>
                </div>

                <div className={styles.featuredPropertiesCardContainer}>
                    {FEATURED_PROPERTIES.map((property, idx) => {
                        return <div key={idx} className={styles.featuredPropertiesCardContainer}>
                            <PropertiesCard
                                propertyDetailsHandler={propertyDetailsHandler}
                                verificationBadge={true}
                                uploadedProperty={true}
                                key={idx}
                                property={property}
                            />
                        </div>;
                    })}
                </div>
            </div>
        </>
    )
}

const FEATURED_PROPERTIES = [
    {
        image: "/assets/images/png/Image-1.png",
        name: "Angol Estate",
        location: "Epe, Lagos",
        amountPerFraction: "20",
        fractionLeft: "10",
        fraction: "15",
        sqm: "8,000",
        verificationStatus: false
    },
    {
        image: "/assets/images/png/Image-2.png",
        name: "Angol Estate",
        location: "Epe, Lagos",
        amountPerFraction: "20",
        fractionLeft: "10",
        fraction: "15",
        sqm: "8,000",
        verificationStatus: true
    },
    {
        image: "/assets/images/png/Image-3.png",
        name: "Angol Estate",
        location: "Epe, Lagos",
        amountPerFraction: "20",
        fractionLeft: "10",
        fraction: "15",
        sqm: "8,000",
        verificationStatus: false
    },
    {
        image: "/assets/images/png/Image-4.png",
        name: "Angol Estate",
        location: "Epe, Lagos",
        amountPerFraction: "20",
        fractionLeft: "10",
        fraction: "15",
        sqm: "8,000",
        verificationStatus: true
    },
    {
        image: "/assets/images/png/Image-5.png",
        name: "Angol Estate",
        location: "Epe, Lagos",
        amountPerFraction: "20",
        fractionLeft: "10",
        fraction: "15",
        sqm: "8,000",
        verificationStatus: true
    },
    {
        image: "/assets/images/png/Image-6.png",
        name: "Angol Estate",
        location: "Epe, Lagos",
        amountPerFraction: "20",
        fractionLeft: "10",
        fraction: "15",
        sqm: "8,000",
        verificationStatus: true
    },
];

const styles = {
    featuredPropertiesCardContainer: "flex flex-wrap mx-auto",
}

export default UploadedProperties