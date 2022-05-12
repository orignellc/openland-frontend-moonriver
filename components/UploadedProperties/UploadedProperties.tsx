import { useState } from "react"

import Tabs from "../pages/ChooseProperty/Tabs"
import PropertiesCard from "../PropertiesCard/PropertiesCard";
import PropertyDetails from "../PropertyDetails/PropertyDetails";
import Backdrop from "../ui/Backdrop/Backdrop";


const UploadedProperties = () => {
    const [showPropertyDetails, setShowPropertiesDetails] = useState(false)

    const propertyDetailsHandler = () => {
        setShowPropertiesDetails(prevState => !prevState)
    }

    return (
        <>
            <Backdrop showBackdrop={showPropertyDetails}>
                <PropertyDetails />
            </Backdrop>
            <div className="top-0 left-0 fixed z-[60] bg-white py-[130px] w-screen h-screen overflow-y-scroll px-[30px] mx-auto">
                <div className="flex justify-between mb-[29px]">
                    <img src="/assets/images/svg/arrow-left.svg" alt="back" />
                    <img src="/assets/images/svg/cancel.svg" alt="cancel" />
                </div>

                <Tabs />

                <div className="mb-[67px]">
                    <h5 className="font-semibold text-[42px] text-center mb-[10px]">Uploaded Properties</h5>
                    <p className="font-medium text-lg text-center">You can only choose one property to be fractionalized</p>
                </div>

                <div className={styles.featuredPropertiesCardContainer}>
                    {FEATURED_PROPERTIES.map((property, idx) => {
                        return <div className={styles.featuredPropertiesCardContainer}>
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
    featuredPropertiesCardContainer: "flex flex-wrap mx-auto",
}

export default UploadedProperties