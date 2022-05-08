import Tabs from "../pages/ChooseProperty/Tabs"
import PropertiesCard from "../PropertiesCard/PropertiesCard"
import Button from "../ui/Button/Button"
import Input from "../ui/Input/Input"

const FractionalizedProperty = () => {
    return (
        <div className="top-0 left-0 fixed z-[60] bg-white py-[130px] w-screen h-screen overflow-y-scroll px-20">
            <div className="flex justify-between mb-[29px]">
                <img src="/assets/images/svg/arrow-left.svg" alt="back" />
                <img src="/assets/images/svg/cancel.svg" alt="cancel" />
            </div>

            <Tabs />

            <div className="text-center w-[900px] mx-auto mb-[90px]">
                <h4 className="mb-[10px] text-[42px] font-semibold">Fractionalize selected Property</h4>
                <p className="font-medium text-lg">Select your desired fraction type, set your vault&apos;s details, then continue to fractionalize. Once completed, all fractions will appear in your wallet. Be aware that you cannot add to the property in your vault once created.</p>
            </div>

            <div className="flex justify-between">
                <div>
                    <PropertiesCard property={{
                        image: "/assets/images/png/Image-1.png",
                        name: "Angol Estate",
                        location: "Epe, Lagos",
                        amountPerFraction: "20",
                        fractionLeft: "10",
                        fraction: "15",
                        sqm: "8,000",
                    }}
                        verificationBadge={true}
                    />
                    <p className="text-[#555555] cursor-pointer font-medium text-2xl underline flex items-center">
                        <span><img src="/assets/images/svg/cloud-change.svg" alt="swap" className="" /></span> Change Property
                    </p>
                </div>
                <form>
                    <h4 className="mb-[14px]">Fractionalization Standard</h4>
                    <div className="font-medium text-2xl px-[62px] border-[rgba(153,153,153,0.5)] py-[8px] border inline rounded-[50px]">ERC-20</div>
                    <h6 className="font-medium text-lg mt-12 mb-6">Vault Details</h6>

                    <Input label="Vault Name" placeholder="e.g. “Bol Props”" />

                    <div className="grid grid-cols-2 gap-[20px]">
                        <Input label="Token Supply" placeholder="e.g. “Bol Props”" />
                        <Input label="Token Symbol" placeholder="EST" />
                    </div>

                    <Input label="Reserve Price in EST" placeholder="e.g. “Bol Props”" />

                    <div className="grid place-content-center">
                        <Button btnType="fill">Continue</Button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default FractionalizedProperty