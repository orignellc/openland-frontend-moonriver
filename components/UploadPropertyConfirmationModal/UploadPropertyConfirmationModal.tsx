import Image from "next/image"

import warning from "../../public/assets/images/svg/warning.svg"

const UploadPropertyConfirmationModal = () => {
    return (
        <div className="w-[873px] rounded-2xl bg-white py-[38px] px-[70px] relative">
            <div className="w-[92.5px] pulse-circle mx-auto mt-5">
                <Image src={warning} alt="warning" width="33" height="33" />
            </div>
            <h4 className="text-center text-2xl font-medium text-[#101828] mt-[92px] mb-[32px]">ATTENTION</h4>

            <p className="font-medium text-xl text-[#777B76] text-center mb-4">Are you sure you want to upload this property?</p>

            <p className="text-[#777B76] text-center mb-16">Please make sure all details provided are accurate information as all informations would be verified before fractionalization can take place</p>

            <div className="grid place-content-center">
                <div>
                    <button className="py-[9px] px-[57px] border font-medium mr-[14px] text-sm rounded-md border-[#D1D5DB]">Cancel</button>
                    <button className="py-[9px] px-[57px] border font-medium text-sm text-white rounded-md bg-[#0FB95D]">Continue</button>
                </div>
            </div></div>
    )
}

export default UploadPropertyConfirmationModal