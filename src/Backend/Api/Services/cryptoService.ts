import axios from "axios";
import CryptoModel from "../Models/cryptoModel";

async function getCryptoById(cryptoId: string) {
    const request = await axios.get(`https://api.coincap.io/v2/assets/${cryptoId}`);

    const priceFloat = parseFloat(request.data.data.priceUsd).toFixed(2)

    const response = {
        id: request.data.data.id,
        symbol:  request.data.data.symbol,
        priceFloat
    };

    const cryptoData = new CryptoModel(
        response.id,
        response.symbol,
        priceFloat
    );

    return cryptoData;
}

export default getCryptoById;