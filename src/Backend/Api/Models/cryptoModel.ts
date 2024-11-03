class CryptoModel {
    private Id: string
    private Symbol: string
    private PriceUsd: number

    constructor(id: string, symbol: string, priceUsd: number) {
        this.Id = id;
        this.Symbol = symbol;
        this.PriceUsd = priceUsd;
    }
}

export default CryptoModel;