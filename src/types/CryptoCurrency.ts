export class CryptoCurrency {
  id: string;
  name: string;
  symbol: string;
  image: string;
  currentPrice: number;
  marketCap: number;
  marketCapRank: number;
  fullyDilutedValuation: number;
  totalVolume: number;
  high24h: number;
  low24h: number;
  priceChange24h: number;
  priceChangePercentage24h: number;
  marketCapChange24h: number;
  marketCapChangePercentage24h: number;
  circulatingSupply: number;
  totalSupply: number;
  maxSupply: number;
  ath: number;
  athChangePercentage: number;
  athDate: string;
  atl: number;
  atlChangePercentage: number;
  atlDate: string;
  lastUpdated: string;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.symbol = data.symbol;
    this.image = data.image;
    this.currentPrice = data.current_price;
    this.marketCap = data.market_cap;
    this.marketCapRank = data.market_cap_rank;
    this.fullyDilutedValuation = data.fully_diluted_valuation || null;
    this.totalVolume = data.total_volume;
    this.high24h = data.high_24h;
    this.low24h = data.low_24h;
    this.priceChange24h = data.price_change_24h;
    this.priceChangePercentage24h = data.price_change_percentage_24h;
    this.marketCapChange24h = data.market_cap_change_24h;
    this.marketCapChangePercentage24h = data.market_cap_change_percentage_24h;
    this.circulatingSupply = data.circulating_supply;
    this.totalSupply = data.total_supply || null;
    this.maxSupply = data.max_supply || null;
    this.ath = data.ath;
    this.athChangePercentage = data.ath_change_percentage;
    this.athDate = data.ath_date;
    this.atl = data.atl;
    this.atlChangePercentage = data.atl_change_percentage;
    this.atlDate = data.atl_date;
    this.lastUpdated = data.last_updated;
  }
}
