import axios from "axios";
import CryptoModel from "../Models/cryptoModel";

async function getCryptoById(cryptoId: string) {
    const request = await axios.get(`https://api.coincap.io/v2/assets/${cryptoId}`);

    const response = {
        id: request.data.data.id,
        symbol:  request.data.data.symbol,
        priceUsd: request.data.data.priceUsd
    };

    const cryptoData = new CryptoModel(
        response.id,
        response.symbol,
        response.priceUsd,
    )

    return cryptoData;
}

export default getCryptoById;