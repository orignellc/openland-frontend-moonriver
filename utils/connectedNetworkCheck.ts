import { ethers } from "ethers";

const connectedNetworkCheck = async () => {
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const { chainId } = await provider.getNetwork()

    if (typeof window === "undefined") return

    if (chainId !== 1285) {
        localStorage.removeItem("openland-user")
        try {
            // @ts-ignore
            window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                    chainId: '0x505',
                    chainName: 'Moonriver Chain',
                    nativeCurrency: {
                        name: 'Moonriver Token',
                        symbol: 'MOVR',
                        decimals: 18
                    },
                    rpcUrls: ['https://rpc.moonriver.moonbeam.network/'],
                    blockExplorerUrls: ['https://blockscout.moonriver.moonbeam.network/']
                }]
            }).then((response: any) => {
                console.log("RESPONSE", response)
                window.location.reload()
                return response
            })
        } catch (error: any) {
            window.location.reload()
            console.log("ERROR", error)
            return error
        }
    } else {
        // window.location.reload()
    }
}


export default connectedNetworkCheck