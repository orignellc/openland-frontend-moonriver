import { ethers } from "ethers";

const connectedNetworkCheck = async () => {
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const { chainId } = await provider.getNetwork()

    if (chainId !== 1285) {
        try {
            // @ts-ignore
            const response = await window.ethereum.request({
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
            })
            console.log("RESPONSE", response)
            return response
        } catch (error: any) {
            console.log("ERROR", error)
            if (typeof window !== "undefined") {
                alert("Please connect to moon river")
            }
            return error
        }
    }
}


export default connectedNetworkCheck