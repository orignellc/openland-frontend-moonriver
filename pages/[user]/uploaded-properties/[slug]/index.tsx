import { useRouter } from "next/router"
import { ChangeEvent, ChangeEventHandler, Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Range, getTrackBackground } from "react-range";
import * as ethers from "ethers";
import { parseEther } from "ethers/lib/utils";
import Web3Modal from "web3modal"

import Tabs from "../../../../components/pages/ChooseProperty/Tabs"
import FractionalizePropertyConfirmationModal from "../../../../components/FractionalizePropertyConfirmationModal/FractionalizePropertyConfirmationModal"
import PropertiesCard from "../../../../components/PropertiesCard/PropertiesCard"
import Button from "../../../../components/ui/Button/Button"
import Input from "../../../../components/ui/Input/Input"
import Backdrop from "../../../../components/ui/Backdrop/Backdrop"
import CreatingVaultOverlay from "../../../../components/CreatingVaultOverlay/CreatingVaultOverlay";
import CreatingVaultOverlaySuccess from "../../../../components/CreatingVaultOverlaySuccess/CreatingVaultOverlaySuccess";
import GetWeb3Signer from "../../../../utils/getWeb3Signer";
import { FACTORY_ADDRESS, NFT_ADDRESS } from "../../../../constants/contractAddresses";
import Alert from "../../../../components/ui/Alert/Alert";
import AlertModel from "../../../../models/AlertModel";
const FACTORY_ABI = require("../../../../abi/erc721valutfactory.json")
const NFT_ABI = require("../../../../abi/nftabi.json")

const RangeComponent: FC<{ values: number[], setValues: Dispatch<SetStateAction<number[]>> }> = (props) => {
    const { values, setValues } = props

    const RANGE_STEP = 10;
    const RANGE_MIN_VALUE = 0;
    const RANGE_MAX_VALUE = 100;

    return (
        <Range
            values={values}
            step={RANGE_STEP}
            min={RANGE_MIN_VALUE}
            max={RANGE_MAX_VALUE}
            onChange={setValues}
            renderTrack={({ props, children }) => (
                <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                        ...props.style,
                        height: "36px",
                        display: "flex",
                        width: "100%",
                    }}
                >
                    <div
                        ref={props.ref}
                        style={{
                            height: "5px",
                            width: "100%",
                            borderRadius: "4px",
                            background: getTrackBackground({
                                values,
                                colors: ["#0FB95D", "#F4F5F4"],
                                min: RANGE_MIN_VALUE,
                                max: RANGE_MAX_VALUE,
                            }),
                            alignSelf: "center",
                        }}
                    >
                        {children}
                    </div>
                </div>
            )}
            renderThumb={({ props, isDragged }) => (
                <div
                    {...props}
                    className="h-[14px] w-[14px] rounded-[50%] bg-[#0FB95D] outline-none"
                />
            )}
        />
    );
};

const FractionalizeProperty = () => {
    const router = useRouter()
    const [fractionalize, setFractionalize] = useState(false)
    const [creatingVault, setCreatingVault] = useState(false)
    const [createVaultSuccess, setCreateVaultSuccess] = useState(false)
    const [values, setValues] = useState([10]);
    const [inputData, setInputData] = useState({ vaultName: "", tokenSupply: 0, tokenSymbol: "", reservedPrice: 0 })
    const [showAlert, setShowAlert] = useState<AlertModel>({ message: "", show: false, timer: 0, variant: "success" })

    const toggleFractionalize = () => setFractionalize(prevState => !prevState)
    const toggleCreatingVault = () => setCreatingVault(prevState => !prevState)
    const toggleCreatingVaultSuccess = () => {
        setCreateVaultSuccess(prevState => !prevState)
    }
    const userWalletAddress = typeof window !== "undefined" && window.ethereum.selectedAddress

    const handleFractionalize = async () => {
        await fractionalizing()
        // toggleFractionalize()
        // toggleCreatingVault()
        // toggleCreatingVaultSuccess()
    }

    const fractionalizing = async () => {
        try {
            const signer = await new GetWeb3Signer().getSigner()
            const factoryContract = new ethers.Contract(FACTORY_ADDRESS, FACTORY_ABI, signer)
            const nftContract = new ethers.Contract(NFT_ADDRESS, NFT_ABI, signer)

            const approvalResponse = await nftContract.setApprovalForAll(FACTORY_ADDRESS, true)

            if (approvalResponse) setShowAlert({ message: "Token has been locked successfully", show: true, timer: 5000, variant: "success" })

            console.log("APPROVAL RESPONSE ==>", approvalResponse);

            if (!approvalResponse) return

            const { vaultName, tokenSymbol, reservedPrice, tokenSupply } = inputData
            const tokenId = window && window.location.pathname.split("/")[3]

            const mintFactoryResponse = await factoryContract.mint(
                vaultName,
                tokenSymbol,
                NFT_ADDRESS,
                tokenId,
                parseEther(`${reservedPrice}`),
                parseEther(`${tokenSupply}`), //Price of the property(NFT) in MOVR
                values[0] //the AUM fee paid to the curator yearly. 3 decimals. ie. 100 = 10%, 20 = 2%, etc.
            )

            await mintFactoryResponse.wait()
            // Alert Notification
            setShowAlert({ message: "Listing of token successful", show: true, timer: 5000, variant: "success" })
            // We listen to events
            // logthe event 

            // provider.on("pending", (tx) => {
            // Emitted when any new pending transaction is noticed
            // });
            // Address of the vault minted... id of the vault... // To Save...(Address...) { _id: metaMaskaddress, vault: { erc20TokenMintedAddress: "event", vaultAddress: "event", vaultId: "event" } }

            const filter = {
                address: FACTORY_ADDRESS,
                topics: [
                    ethers.utils.id("Mint(address,uint256,uint256,address,uint256)")
                ]
            }

            // console.log("MINT FACTORY RESPONSE ==>", mintFactoryResponse);
            const web3modal = new Web3Modal()
            const connection = await web3modal.connect()
            const provider = new ethers.providers.Web3Provider(connection)

            provider.on(filter, (log, event) => {
                console.log(log);
                console.log(event);
            })
        } catch (error: any) {
            setShowAlert({ message: error.message, show: true, timer: 5000, variant: "danger" })
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const { id, value } = event.target

        setInputData({ ...inputData, [id]: value })
    }

    return (
        <>
            <Backdrop showBackdrop={fractionalize}>
                <FractionalizePropertyConfirmationModal
                    handleFractionalize={handleFractionalize}
                />
            </Backdrop>
            <Backdrop showBackdrop={creatingVault}>
                <CreatingVaultOverlay />
            </Backdrop>
            <Backdrop showBackdrop={createVaultSuccess}>
                <CreatingVaultOverlaySuccess />
            </Backdrop>
            <Alert showAlert={showAlert} setShowAlert={setShowAlert} />
            <div className="top-0 left-0 fixed z-[60] bg-white py-[130px] w-screen h-screen overflow-y-scroll lg:px-20">
                <div className="flex justify-between mb-[29px]">
                    <img src="/assets/images/svg/arrow-left.svg" alt="back" className="cursor-pointer" onClick={() => router.push(`${userWalletAddress}/uploaded-properties`)} />
                    <img src="/assets/images/svg/cancel.svg" alt="cancel" className="cursor-pointer" onClick={() => router.push("/")} />
                </div>

                <Tabs activeTab="ChooseProperty" />

                <div className="text-center w-[343px] lg:w-[900px] mx-auto mb-[90px]">
                    <h4 className="mb-[10px] text-3xl lg:text-[42px] font-semibold">Fractionalize selected Property</h4>
                    <p className="font-medium text-lg">Select your desired fraction type, set your vault&apos;s details, then continue to fractionalize. Once completed, all fractions will appear in your wallet. Be aware that you cannot add to the property in your vault once created.</p>
                </div>

                <div className="flex flex-col lg:flex-row justify-between">
                    <div>
                        <PropertiesCard property={{
                            image: "/assets/images/png/Image-1.png",
                            name: "Angol Estate",
                            location: "Epe, Lagos",
                            amountPerFraction: "20",
                            fractionLeft: "10",
                            fraction: "15",
                            sqm: "8,000",
                            verificationStatus: true
                        }}
                            verificationBadge={true}
                        />
                        <p onClick={() => router.push(`/${userWalletAddress}/uploaded-properties`)} className="text-[#555555] cursor-pointer px-4 font-medium text-2xl mb-16 lg:mb-0 underline flex items-center">
                            <span><img src="/assets/images/svg/cloud-change.svg" alt="swap" className="" /></span> Change Property
                        </p>
                    </div>
                    <form className="px-4">
                        <h4 className="mb-[14px]">Fractionalization Standard</h4>
                        <div className="font-medium text-2xl px-[62px] border-[rgba(153,153,153,0.5)] py-[8px] border inline rounded-[50px]">ERC-20</div>
                        <h6 className="font-medium text-lg mt-12 mb-6">Vault Details</h6>

                        <Input id="vaultName" handleChange={handleChange} label="Vault Name" placeholder="e.g. “Bol Props”" infoCircle={true} />

                        <div className="grid grid-cols-2 gap-[20px]">
                            <Input type="number" min={0} id="tokenSupply" handleChange={handleChange} label="Token Supply" placeholder="e.g. “Bol Props”" />
                            <Input id="tokenSymbol" handleChange={handleChange} label="Token Symbol" placeholder="EST" />
                        </div>

                        <Input id="reservedPrice" handleChange={handleChange} label="Reserve Price in EST" placeholder="e.g. “Bol Props”" />

                        <div className="flex flex-col mb-6">
                            <div className="flex justify-between">
                                <label className="font-medium text-[#1C2420] mb-[6px]" htmlFor="Annual management fee">
                                    Annual management fee
                                </label>

                                <img src="/assets/images/svg/help-circle.svg" alt="help" />
                            </div>
                            <div>
                                <RangeComponent values={values} setValues={(values) => setValues(values)} />
                                <div className="flex items-center justify-between text-sm font-medium text-[#344054]">
                                    <span>0%</span>
                                    <span className="text-white bg-gray-500 rounded-md px-4 py-2">{values[0]}</span>
                                    <span>100%</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid place-content-center">
                            <Button btnType="fill" onClick={toggleFractionalize}>Continue</Button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default FractionalizeProperty