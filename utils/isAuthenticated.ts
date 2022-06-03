const isAuthenticated = (): boolean | "undefined" => {
    if (typeof window !== "undefined") {
        return !!window.ethereum.selectedAddress
    } else {
        return "undefined"
    }
}

export default isAuthenticated