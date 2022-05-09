import SpinnerAnimation from "../ui/SpinnerAnimation/SpinnerAnimation"

const CreatingVaultOverlay = () => {
    return (
        <div className="bg-white text-center rounded-2xl w-[611px] p-[38px]">
            <div className="flex justify-between">
                <div />
                <img src="/assets/images/svg/cancel.svg" className="cursor-pointer" alt="cancel" />
            </div>

            <div className="relative grid place-content-center">
                <SpinnerAnimation />
            </div>

            <h5 className="font-medium text-xl text-[#777B76] mt-[68px] mb-4">Creating a vault</h5>

            <p className="text-[#777B76]">It may take a while to create the vault</p>
        </div>
    )
}

export default CreatingVaultOverlay