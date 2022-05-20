import { Web3Storage } from "web3.storage";

export const uploadPropertyToIpfs = async (property: any) => {
    try {
        // Upload Property to IPFS
        const client = new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ0MmMzZTk4NGNhY0MxODZCMDVCY2IyNGMyZUQzN2VBNDQ1OEJFMGQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTI3MTQ0NTE5MTUsIm5hbWUiOiJvcGVubGFuZCJ9.Z2BBkxc7cQ9Ot5ZD8_LLAqSA4ck9fgNUrwJjoIzj9Zg" })

        // const files = makeFileObjects()
        const cid = await client.put(property)
        return `https://dweb.link/ipfs/${cid}`
        // console.log()
        // https://dweb.link/ipfs/${cid} THIS IS THE RETURNED URL
    } catch (error: any) {
        return error
    }
}

// export default uploadPropertyToIpfs