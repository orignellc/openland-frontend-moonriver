import { FC } from "react"

interface SearchProps {
    showSearch: boolean
    setShowSearch: () => void
}


const Search: FC<SearchProps> = (props) => {
    const { showSearch, setShowSearch } = props

    return (
        <div className={`w-screen h-screen bg-white fixed top-0 left-0 z-[51] -translate-y-[150%] duration-500 ease-in-out transition-transform ${showSearch && "translate-y-0"}`}>
            <div className="h-[93px] relative py-4 px-5 shadow-md flex justify-between items-center">
                <input type="text" placeholder="Search by collection, asset or user" className="pl-10 shadow-sm placeholder:font-semibold w-[250px] placeholder:text-sm bg-color-tertiary focus:outline-none rounded-[40px] h-16" />
                <img src="/assets/images/svg/magnifying-glass.svg" alt="search_icon" className="absolute left-7" />
                <div className="h-16 outline-none bg-color-tertiary cursor-pointer shadow-sm w-16 grid place-content-center rounded-full">
                    <img src="/assets/images/svg/cancel.svg" alt="cancel" onClick={setShowSearch} />
                </div>
            </div>

            <div className="w-full bg-color-tertiary h-screen grid place-content-center">
                <p className="-mt-20 text-sm font-semibold">Search by collection, asset or user</p>
            </div>
        </div>
    )
}

export default Search