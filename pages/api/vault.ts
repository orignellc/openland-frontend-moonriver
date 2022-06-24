// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Insert into the database
    const { _id, vault: { erc20TokenMintedAddress, vaultAddress, vaultId } } = req?.body

    // Validation

    // Save to DB

    // Send response

  } catch (error) {
    res.status(400).json({
      status: "fail",
      error
    })
  }
  // { _id: metaMaskaddress, vault: { erc20TokenMintedAddress: "event", vaultAddress: "event", vaultId: "event" } }
}
