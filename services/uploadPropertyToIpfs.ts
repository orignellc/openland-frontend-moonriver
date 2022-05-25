import { Web3Storage } from "web3.storage";

export const uploadPropertyToIpfs = async (property: any) => {
    try {
        // Upload Property to IPFS
        const client = new Web3Storage({ token: process.env.NEXT_PUBLIC_WEB3STORAGE_TOKEN! })

        const cid = await client.put(property)
        return `https://dweb.link/ipfs/${cid}`
    } catch (error: any) {
        return error
    }
}