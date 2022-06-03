import { useState, useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/router";
import * as ethers from "ethers";

import Tabs from "../../../components/pages/ChooseProperty/Tabs"
import PropertiesCard from "../../../components/PropertiesCard/PropertiesCard";
import Backdrop from "../../../components/ui/Backdrop/Backdrop";
import { NFT_ADDRESS } from "../../../constants/contractAddresses";
import GetWeb3Signer from "../../../utils/getWeb3Signer";
import Alert from "../../../components/ui/Alert/Alert";
import AlertModel from "../../../models/AlertModel";
import FractionSalesModal from "../../../components/FractionSalesModal/FractionSalesModal";
const NFT_ABI = require("../../../abi/nftabi.json")


const UploadedProperties = () => {
    const [showAlert, setShowAlert] = useState<AlertModel>({ show: false, timer: 3000, variant: "success", message: "" })
    const [fetchedNFTs, setNFTs] = useState<any>([])
    const [isFetchingNFTs, setIsFetchingNFTs] = useState(false)

    const router = useRouter()

    const propertyDetailsHandler = (tokenId: number) => {
        const userWalletAddress = typeof window !== "undefined" && window.ethereum.selectedAddress
        router.push(`/${userWalletAddress}/uploaded-properties/${tokenId}`)
    }

    useEffect(() => {
        const userAddress = window.location.pathname.split("/")[1]
        // Fetch User NFT
        setIsFetchingNFTs(true)
        const fetchNFTs = async () => {
            try {
                const { data: { result: NFTs } } = await axios.get(`https://api-moonriver.moonscan.io/api?module=account&action=tokennfttx&address=${userAddress}&startblock=0&endblock=999999999&sort=asc`)

                if (!NFTs) throw new Error("Can't fetch nft's, check network connection")

                const signer = await new GetWeb3Signer().getSigner()

                const nftContract = new ethers.Contract(NFT_ADDRESS, NFT_ABI, signer)
                let transformedNFT = [];

                for (let i = 0; i <= NFTs.length - 1; i++) {
                    const NFTItem = NFTs[i];

                    const NFTsURI = await nftContract.tokenURI(NFTItem.tokenID)
                    if (NFTsURI.length > 0) {
                        const { data: nftData } = await axios.get(`${NFTsURI}/property-details.json`)
                        setShowAlert({ show: true, timer: 5000, variant: "success", message: "Fetched Tokens" })
                        transformedNFT.push({ ...nftData, tokenId: Number(NFTItem.tokenID) })
                    }
                }

                setIsFetchingNFTs(false)
                setNFTs(transformedNFT)
                console.log(transformedNFT)
            } catch (error: any) {
                setShowAlert({ message: error.message, show: true, timer: 3000, variant: "danger" })
            }
        };
        fetchNFTs()
    }, [])

    return (
        <div className="">
            <Alert showAlert={showAlert} setShowAlert={setShowAlert} />

            <FractionSalesModal />

            <div className="top-0 left-0 fixed z-[60] bg-white py-[130px] w-screen h-screen overflow-y-scroll px-[px] mx-auto">
                <div className="flex justify-between mb-[29px]">
                    <img src="/assets/images/svg/arrow-left.svg" alt="back" className="cursor-pointer" onClick={() => router.push("/")} />
                    <img src="/assets/images/svg/cancel.svg" alt="cancel" className="cursor-pointer" onClick={() => router.push("/")} />
                </div>

                <Tabs activeTab="ChooseProperty" />

                <div className="mb-[67px]">
                    <h5 className="font-semibold text-[42px] text-center mb-[10px]">Uploaded Properties</h5>
                    <p className="font-medium text-lg text-center">You can only choose one property to be fractionalized</p>
                </div>

                <div className={styles.featuredPropertiesCardContainer}>
                    {isFetchingNFTs && <div className="border border-gray-200 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                        <div className="animate-pulse flex space-x-4">
                            <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                            <div className="flex-1 space-y-6 py-1">
                                <div className="h-2 bg-slate-200 rounded"></div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                                    </div>
                                    <div className="h-2 bg-slate-200 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {!isFetchingNFTs && fetchedNFTs.length > 0 ? fetchedNFTs.map((nft: any, idx: number) => {
                        return <div key={idx} className={styles.featuredPropertiesCardContainer}>
                            <PropertiesCard
                                propertyDetailsHandler={propertyDetailsHandler}
                                verificationBadge={true}
                                uploadedProperty={true}
                                key={idx}
                                property={nft}
                            />
                        </div>;
                    }) :
                        !isFetchingNFTs && <div className="grid w-full place-content-center font-extrabold text-4xl">No Nfts Minted</div>}
                </div>
            </div>
        </div>
    )
}

const styles = {
    featuredPropertiesCardContainer: "flex flex-wrap mx-auto",
}

export default UploadedProperties