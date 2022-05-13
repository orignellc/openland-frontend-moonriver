import { useRouter } from "next/router"
import { useState } from "react";
import { Range, getTrackBackground } from "react-range";

import Tabs from "../../../../components/pages/ChooseProperty/Tabs"
import FractionalizePropertyConfirmationModal from "../../../../components/FractionalizePropertyConfirmationModal/FractionalizePropertyConfirmationModal"
import PropertiesCard from "../../../../components/PropertiesCard/PropertiesCard"
import Button from "../../../../components/ui/Button/Button"
import Input from "../../../../components/ui/Input/Input"
import Backdrop from "../../../../components/ui/Backdrop/Backdrop"
import CreatingVaultOverlay from "../../../../components/CreatingVaultOverlay/CreatingVaultOverlay";
import CreatingVaultOverlaySuccess from "../../../../components/CreatingVaultOverlaySuccess/CreatingVaultOverlaySuccess";

const RangeComponent = () => {
    const [values, setValues] = useState([0.01]);

    const RANGE_STEP = 0.01;
    const RANGE_MIN_VALUE = 0.01;
    const RANGE_MAX_VALUE = 10;

    return (
        <Range
            values={values}
            step={RANGE_STEP}
            min={RANGE_MIN_VALUE}
            max={RANGE_MAX_VALUE}
            onChange={(values) => setValues(values)}
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
                    className="h-[14px] w-[14px] rounded-[50%] bg-white outline-none"
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

    const toggleFractionalize = () => setFractionalize(prevState => !prevState)
    const toggleCreatingVault = () => setCreatingVault(prevState => !prevState)
    const toggleCreatingVaultSuccess = () => {
        setCreateVaultSuccess(prevState => !prevState)
    }

    const handleFractionalize = () => {
        toggleFractionalize()
        toggleCreatingVault()
        toggleCreatingVaultSuccess()
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
            <div className="top-0 left-0 fixed z-[60] bg-white py-[130px] w-screen h-screen overflow-y-scroll lg:px-20">
                <div className="flex justify-between mb-[29px]">
                    <img src="/assets/images/svg/arrow-left.svg" alt="back" />
                    <img src="/assets/images/svg/cancel.svg" alt="cancel" />
                </div>

                <Tabs />

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
                        <p onClick={() => router.push("/user-1/uploaded-properties")} className="text-[#555555] cursor-pointer px-4 font-medium text-2xl mb-16 lg:mb-0 underline flex items-center">
                            <span><img src="/assets/images/svg/cloud-change.svg" alt="swap" className="" /></span> Change Property
                        </p>
                    </div>
                    <form className="px-4">
                        <h4 className="mb-[14px]">Fractionalization Standard</h4>
                        <div className="font-medium text-2xl px-[62px] border-[rgba(153,153,153,0.5)] py-[8px] border inline rounded-[50px]">ERC-20</div>
                        <h6 className="font-medium text-lg mt-12 mb-6">Vault Details</h6>

                        <Input label="Vault Name" placeholder="e.g. “Bol Props”" infoCircle={true} />

                        <div className="grid grid-cols-2 gap-[20px]">
                            <Input label="Token Supply" placeholder="e.g. “Bol Props”" />
                            <Input label="Token Symbol" placeholder="EST" />
                        </div>

                        <Input label="Reserve Price in EST" placeholder="e.g. “Bol Props”" />

                        <div className="flex flex-col mb-6">
                            <div className="flex justify-between">
                                <label className="font-medium text-[#1C2420] mb-[6px]" htmlFor="Annual management fee">
                                    Annual management fee
                                </label>

                                <img src="/assets/images/svg/help-circle.svg" alt="help" />
                            </div>
                            <div>
                                <RangeComponent />
                                <div className="flex justify-between text-sm font-medium text-[#344054]">
                                    <span>0%</span>
                                    <span>10%</span>
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