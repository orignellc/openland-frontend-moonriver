import { Web3Storage } from "web3.storage";

export const uploadPropertyToIpfs = async (property: any) => {
    try {
        // Upload Property to IPFS
        const client = new Web3Storage({ token: process.env.W3STORAGE_TOKEN! })

        // const files = makeFileObjects()
        const cid = await client.put(property)
        console.log(`https://dweb.link/ipfs/${cid}`)
        // https://dweb.link/ipfs/${cid} THIS IS THE RETURNED URL
    } catch (error: any) {
        return error
    }
}

// export default uploadPropertyToIpfs