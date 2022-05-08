const FractionalizePropertyConfirmationModal = () => {
    return (
        <div className="text-center py-9 bg-white rounded-2xl px-[70px]">
            <h3 className="font-medium text-2xl text-[#101828] mb-8">ATTENTION</h3>

            <p className="font-medium text-xl text-[#777B76] mb-4">This property is ready to be fractionalized</p>

            <p className="text-[#777B76] mb-16">Are you sure you want to proceed with this process?</p>

            <div className="grid place-content-center mb-28">
                <div className="flex">
                    <button className="py-[9px] px-[46px] lg:px-[57px] border font-medium mr-[14px] text-sm rounded-md border-[#D1D5DB]">Cancel</button>
                    <button className="py-[9px] px-[46px] lg:px-[57px] border font-medium text-sm text-white rounded-md bg-[#0FB95D]">Fractionalize</button>
                </div>
            </div>
        </div>
    )
}

export default FractionalizePropertyConfirmationModal