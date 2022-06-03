import { FC } from "react"
import Button from "../ui/Button/Button"

const FractionSalesModal: FC = (props) => {

    return (
        <div className="top-[5%] rounded-lg shadow-lg left-[50%] -translate-x-[50%] -translate-y-[5%] absolute z-[62] bg-white px-[30px] py-[10px]">

            <h4 className="font-black text-xl">Provide liquidity for fractions</h4>


            <div className="flex">
                <p className="text-xs text-gray-500 w-[80%] pt-2 pb-2">
                    Add liquidity on <span className="font-bold">Sushi Swap</span> so that users can buy your fractions.
                </p>

                <div className="grid text-xs place-content-center">
                    <button
                        type="button"
                        className="hover:shadow-md bg-color-primary text-white hover:-translate-y-1 duration-100 px-2 py-[8px] rounded-[40px]"
                    >
                        Enable Sales
                    </button>
                </div>
            </div>

        </div>
    )
}

export default FractionSalesModal