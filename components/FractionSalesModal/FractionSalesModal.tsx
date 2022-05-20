import { FC } from "react"
import Button from "../ui/Button/Button"

interface FractionSalesModalProps {
    toggleShowFractionSalesModal: () => void
}

const FractionSalesModal: FC<FractionSalesModalProps> = (props) => {
    const { toggleShowFractionSalesModal } = props

    return (
        <div className="top-[50%] rounded-lg shadow-lg left-[50%] -translate-x-[50%] -translate-y-[50%] fixed z-[62] bg-white px-[30px] py-[20px] w-[700px]">

            <div className="flex justify-between">
                <h4 className="font-black text-2xl">Enable Fraction Sales</h4>
                <img src="/assets/images/svg/cancel.svg" alt="cancel" className="cursor-pointer" onClick={toggleShowFractionSalesModal} />
            </div>

            <p className="text-xl text-gray-500 pr-8 pt-7 pb-10">
                Choose to allow people to buy your fractions by creating or adding
                pool liquidity on Uniswap within a price range
            </p>

            <div className="grid place-content-center">
                <Button btnType="fill">Go to Uniswap</Button>
            </div>
        </div>
    )
}

export default FractionSalesModal