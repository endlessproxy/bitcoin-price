class CryptoModel {
    private Id: string
    private Symbol: string
    private PriceUsd: string

    constructor(id: string, symbol: string, priceUsd: string) {
        this.Id = id;
        this.Symbol = symbol;
        this.PriceUsd = priceUsd;
    }
}

export default CryptoModel;