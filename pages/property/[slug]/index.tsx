import Button from "../../../components/ui/Button/Button"

const PropertyDetails = () => {
    return (
        <>
            <div className="pt-[72px] px-[70px] bg-[#F9F9F9]">
                <h2 className="font-semibold text-[42px] text-center mb-4">Angol Estate</h2>
                <p className="text-[28px] text-center mb-4 font-semibold">$100,000 <span className="font-medium text-[#999]">~ 1000sqm</span></p>
                <div className="grid place-content-center pb-[67px]">
                    <div>
                        <span className="text-[#555] px-8 py-3 border border-[#999999] rounded-[40px] mr-3">REVOLUTION PROPERTIES</span>
                        <span className="border border-[rgba(15,185,93,0.3)] rounded-[40px] py-[13px] text-[#0FB95D] px-8">Verified</span>
                    </div>
                </div>

                <div className="bg-[#F9F9F9] h-[700px] py-[60px] relative">

                    <img src="/assets/images/svg/property.svg" alt="property_name" className="" />

                    <div className="absolute bottom-[-4.5%] left-0 flex justify-between w-full">
                        <div className="bg-white rounded-[40px] border shadow-md px-4 py-[6px] flex items-center justify-between">
                            <img src="/assets/images/svg/avatar.jpg" className="w-[52px] rounded-[50%] h-[52px]" alt="" />
                            <p className="font-semibold text-lg px-[10px]">0xGuj....ftyb552</p>
                            <img src="/assets/images/svg/copy.svg" className="w-[52px] h-[52px] cursor-pointer" alt="" />
                        </div>
                        <div className="flex">
                            <div className="bg-white mr-2 rounded-[40px] border shadow-md px-4 py-[6px] flex items-center justify-between">
                                <img src="/assets/images/svg/share.svg" className="w-[52px] h-[52px] cursor-pointer" alt="share" />
                                <p className="font-semibold text-lg px-[10px]">Share</p>
                            </div>
                            <div className="bg-white w-[66px] h-[66px] rounded-[50%] border shadow-md px-4 py-[6px] flex items-center justify-between">
                                <img src="/assets/images/svg/heart.svg" className="w-[20px] mx-auto h-[18px] cursor-pointer" alt="share" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-2 gap-[50px] mt-[100px] px-[70px] mb-[100px]">
                <div className="font-base text-lg text-[#555]">
                    <h5 className="text-[26px] font-semibold mb-4">About Property</h5>
                    <p className="mb-4">Angol Property (Lagoon Front ) located on the North side of the Lekki Lagoon located along Lekki-Epe expressway, Ibeju Lekki, Lagos. </p>
                    <p>The estate is strategically located in the fastest developing area of Lagos with great appreciation rate hence generating a high return on investment.</p>
                </div>
                <div>

                </div>
            </div>

            <div className="flex justify-between px-[70px] mb-[120px]">


                <div className="max-w-[500px]">
                    <div className="mb-[60px]">
                        <h6 className="text-[#555555] font-semibold text-[26px] mb-[10px]">Buy Fraction</h6>
                        <ul className="text-lg">
                            <li>🔉 Lekki Free Trade Zone</li>
                            <li>🔉 Dangote Refinery and Petrochemical</li>
                            <li>🔉 Dangote Jetty</li>
                            <li>🔉 Eleganza Industrial City</li>
                            <li>🔉 Eleko Junction</li>
                        </ul>
                    </div>

                    <div className="mb-[60px]">
                        <h6 className="text-[#555555] font-semibold text-[26px] mb-[10px]">Buy Fraction</h6>
                        <ul className="text-lg">
                            <li>📍 Perimeter Fencing</li>
                            <li>📍 Strong gate house</li>
                            <li>📍 Good road network</li>
                            <li>📍 Sewage Disposal</li>
                            <li>📍 Well planned Drainage System</li>
                        </ul>
                    </div>
                </div>


                <div className="border rounded-2xl px-[65px] py-8 shadow-2xl">
                    <div className="flex justify-between mb-[54px]">
                        <p className="text-[#667085] font-medium text-lg">Each fraction is sold at $0.04</p>
                        <p><span></span> Set Slippage <span></span></p>
                    </div>

                    <div className="w-[648px] mb-5">
                        <label htmlFor="" className="font-medium text-sm text-[#999999]">How many do you want to buy?</label>
                        <div className="flex flex-col mt-4">
                            <input type="text" placeholder="0.0" className="px-6 py-5 border rounded border-[rgba(153,153,153,0.5)]" />
                            <span className="text-right font-bold text-sm mt-4">Available Balance: 0.0 ANG</span>
                        </div>
                    </div>

                    <div className="grid place-content-center mb-5">
                        <div className="p-[17px] border border-[rgba(0,0,0,0.25)] shadow-lg rounded-full">
                            <img src="/assets/images/svg/arrow-swap.svg" alt="swap" className="w-6 h-6" />
                        </div>
                    </div>

                    <div className="w-[648px]">
                        <label htmlFor="" className="font-medium text-sm text-[#999999]">You would spend</label>
                        <div className="flex flex-col mt-4">
                            <input type="text" placeholder="0.0" className="px-6 py-5 border rounded border-[rgba(153,153,153,0.5)]" />
                            <span className="text-right font-bold text-sm mt-4">Available Balance: 0.0 USD</span>
                        </div>
                    </div>

                    <div className="grid place-content-center py-[53px]">
                        <Button btnType="outline">Buy Fraction</Button>
                    </div>
                </div>
            </div>

            <div className="px-[70px]">
                <h3 className="text-[42px] font-semibold mb-10">Top 5 Property Owners</h3>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left">
                        <thead className="text-[#667085] font-medium text-sm border-b">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Rank
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Wallet Address
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Percentage volume
                                </th>
                                <th scope="col" className="px-6 py-3 font-medium text-[17px] text-[#101828]">
                                    Value
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                PROPERTY_DETAILS.map(propertyDetail => {
                                    const { rank, percentageVol, image, quantity, value, walletAddress } = propertyDetail

                                    return (
                                        <tr key={rank} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                {rank}
                                            </th>
                                            <td className="px-6 py-4 font-medium text-color-primary text-sm flex items-center">
                                                <img src={image} alt={walletAddress} className="mr-[22px]" />  {walletAddress}
                                            </td>
                                            <td className="px-6 py-4">
                                                {quantity} units
                                            </td>
                                            <td className="px-6 py-4 flex items-center">
                                                <div className="relative w-[267px] mr-3 h-2 bg-[#F4F5F4] rounded overflow-hidden">
                                                    <div className="absolute top-0 left-0 bg-color-primary h-full rounded" style={{ width: `${percentageVol}%` }} />
                                                </div>
                                                <span className="font-medium text-lg text-[#555]">{percentageVol}%</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                $ {value}
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>

                <div className="grid place-content-center my-[42px]">
                    <Button btnType="outline">View all owners</Button>
                </div>
            </div>
        </>
    )
}

const PROPERTY_DETAILS = [
    { rank: "1", image: "/assets/images/svg/rank1.svg", walletAddress: "0xskdf...s505", quantity: "10", percentageVol: "70", value: "300" },
    { rank: "2", image: "/assets/images/svg/rank2.svg", walletAddress: "0xgsD4...234e", quantity: "10", percentageVol: "60", value: "200" },
    { rank: "3", image: "/assets/images/svg/rank3.svg", walletAddress: "0xd5as..SD45", quantity: "10", percentageVol: "30", value: "300" },
    { rank: "4", image: "/assets/images/svg/rank4.svg", walletAddress: "0xWmd5...789j", quantity: "10", percentageVol: "80", value: "300" },
    { rank: "5", image: "/assets/images/svg/rank5.svg", walletAddress: "0xsae4...4F67", quantity: "10", percentageVol: "20", value: "300" },
]

export default PropertyDetails