import { FC } from "react"

import PropertiesCard from "../PropertiesCard/PropertiesCard"

interface PropertyUploadSuccessModalProps {
    toggleShowUploadedProperties: () => void
}

const PropertyUploadSuccessModal: FC<PropertyUploadSuccessModalProps> = (props) => {
    const { toggleShowUploadedProperties } = props

    return <div className="top-0 left-0 fixed z-[60] bg-white py-[40px] lg:py-[130px] w-screen h-screen overflow-y-scroll lg:px-20">
        <div className="flex justify-between mb-[29px] px-4">
            <img src="/assets/images/svg/arrow-left.svg" alt="back" className="w-6 h-6" />
            <img src="/assets/images/svg/cancel.svg" alt="cancel" className="cursor-pointer" onClick={toggleShowUploadedProperties} />
        </div>

        <div className="px-4 w-full lg:w-[800px] mb-8 mx-auto text-center">
            <div className="flex items-center justify-center mb-2">
                <h4 className="text-center font-semibold text-xl lg:text-5xl mr-4">Congratulations!</h4>
                <img src="/assets/images/svg/party.svg" className="w- h-9" alt="cheers" />
            </div>

            <p className="text-[#555555] font-medium leading-10 text-base lg:text-[28px]">Your Property has been successfully uploaded and would undergo verification </p>
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

export default PropertyUploadSuccessModal