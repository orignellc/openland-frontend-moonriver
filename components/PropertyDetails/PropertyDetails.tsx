const PropertyDetails = () => {
    return <div className="top-0 left-0 fixed z-[60] bg-white py-[130px] w-screen h-screen overflow-y-scroll mx-auto">
        <div className="flex justify-between mb-[29px] px-[30px]">
            <img src="/assets/images/svg/arrow-left.svg" alt="back" />
        </div>

        <div className="bg-[#F9F9F9] h-[806px] px-[30px] py-[60px] relative">
            <h2 className="font-semibold text-[42px] mb-3">Angol Estate</h2>
            <div className="flex mb-[75px]">
                <div className="px-8 py-[9.5px] bg-white border border-[rgba(153,153,153,0.5)] rounded-[40px] mr-3">REVOLUTION PROPERTIES</div>
                <div className="px-8 py-[9.5px] bg-white text-[#0FB95D] rounded-[40px]">Verified</div>
            </div>

            <img src="/assets/images/svg/land.svg" alt="property_name" className="" />

            <div className="absolute px-[30px]  bottom-[-4.5%] left-0 flex justify-between w-full">
                <div className="bg-white rounded-[40px] border shadow-md px-4 py-[6px] flex items-center justify-between">
                    <img src="/assets/images/svg/avatar.svg" className="w-[52px] h-[52px]" alt="" />
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

        <div className="mt-[89px] px-[30px] max-w-[645px] text-[#555555] mb-12">
            <h4 className="font-semibold text-[26px]">About Property</h4>
            <p className="mb-4">Angol Property (Lagoon Front ) located on the North side of the Lekki Lagoon located along Lekki-Epe expressway, Ibeju Lekki, Lagos.</p>
            <p>
                The estate is strategically located in the fastest developing area of Lagos with great appreciation rate hence generating a high return on investment.
            </p>
        </div>

        <div className="flex justify-between px-[30px] text-[#555555]">
            <div>
                <h5 className="font-semibold text-[26px]">Landmarks</h5>
                <div className="font-normal text-lg">
                    <p>🔉 Lekki Free Trade Zone</p>
                    <p>🔉 Dangote Refinery and Petrochemical</p>
                    <p>🔉 Dangote Jetty</p>
                    <p>🔉 Eleganza Industrial City</p>
                    <p>🔉 Eleko Junction</p>
                </div>
            </div>
            <div>
                <h5 className="font-semibold text-[26px]">Estate Features</h5>
                <div className="font-normal text-lg">
                    <p>📍 Perimeter Fencing</p>
                    <p>📍 Strong gate house</p>
                    <p>📍 Good road network</p>
                    <p>📍 Sewage Disposal</p>
                    <p>📍 Well planned Drainage System</p>
                </div>
            </div>
        </div>
    </div>
}

export default PropertyDetails