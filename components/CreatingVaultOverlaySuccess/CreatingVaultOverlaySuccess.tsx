import { useRouter } from "next/router"

import PropertiesCard from "../PropertiesCard/PropertiesCard"

const CreatingVaultOverlaySuccess = () => {
    const router = useRouter()

    return <div className="top-0 left-0 fixed z-[60] bg-white py-[130px] w-screen h-screen overflow-y-scroll px-20">
        <div className="flex justify-between mb-[29px]">
            <img src="/assets/images/svg/arrow-left.svg" alt="back" onClick={() => router.push("/")} />
            <img src="/assets/images/svg/cancel.svg" alt="cancel" onClick={() => router.push("/")} />
        </div>

        <div className="w-[800px] mb-8 mx-auto text-center">
            <div className="flex items-center justify-center">
                <h4 className="text-center font-semibold text-5xl mr-4">Congratulations!</h4>
                <img src="/assets/images/svg/party.svg" alt="cheers" />
            </div>

            <p className="text-[#555555] font-medium text-[28px]">Your Vault is now listed</p>
        </div>

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
    </div>
}

export default CreatingVaultOverlaySuccess