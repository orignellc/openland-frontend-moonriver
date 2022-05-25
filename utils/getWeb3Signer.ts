import * as ethers from "ethers";
import Web3Modal from "web3modal"

class GetWeb3Signer {
    constructor() { }

    async getSigner(): Promise<ethers.ethers.providers.JsonRpcSigner> {
        const web3modal = new Web3Modal()
        const connection = await web3modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        return signer
    }
}

export default GetWeb3Signer