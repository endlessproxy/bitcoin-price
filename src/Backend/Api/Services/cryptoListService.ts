import axios from "axios";

async function getCryptoCurrencyList() {
    const request = await axios.get("https://api.coincap.io/v2/assets")
    let response: Array<string> = [];
    const data = request.data.data;
    
    response = Object.keys(data).map(key => data[key].id);

    return response;
}

export default getCryptoCurrencyList;