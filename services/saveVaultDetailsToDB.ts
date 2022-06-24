import axios from "axios"

const API_ENDPOINT = "/api/vault"

interface VaultObject {
    _id: string,
    vault: {
        token_address: string,
        token_id: string,
        token_price: string,
        vault_address: string,
        vault_id: string,
    };
}

const saveVaultDetailsToDB = async (vaultObject: VaultObject) => {
    // Simple Validation before sending to DB
    const { _id, vault: { token_address, token_id, token_price, vault_address, vault_id } } = vaultObject;

    // @TODO create a validation UTILITY file to validate

    try {
        const { data } = await axios.post(API_ENDPOINT, vaultObject)
        return data;
        // Discuss with the server
    } catch (error: any) {
        return error;
    }
};

export default saveVaultDetailsToDB;