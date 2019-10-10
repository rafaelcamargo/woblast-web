export class FinanceResponseMock {
  constructor(){
    this.data = {
      "by": "default",
      "valid_key": false,
      "results": {
        "currencies": {
          "source": "BRL",
          "USD": {
            "name": "Dollar",
            "buy": 4.1037,
            "sell": 4.1096,
            "variation": 0.293
          },
          "EUR": {
            "name": "Euro",
            "buy": 4.5049,
            "sell": 4.5096,
            "variation": 0.406
          },
          "GBP": {
            "name": "Pound Sterling",
            "buy": 5.0249,
            "sell": null,
            "variation": 0.386
          },
          "ARS": {
            "name": "Argentine Peso",
            "buy": 0.0734,
            "sell": null,
            "variation": 3.672
          },
          "BTC": {
            "name": "Bitcoin",
            "buy": 37318.024,
            "sell": 37318.024,
            "variation": -0.199
          }
        },
        "stocks": {
          "IBOVESPA": {
            "name": "BM&F BOVESPA",
            "location": "Sao Paulo, Brazil",
            "points": 101248.781,
            "variation": 1.27
          },
          "NASDAQ": {
            "name": "NASDAQ Stock Market",
            "location": "New York City, United States",
            "points": 7903.74,
            "variation": 1.02
          },
          "CAC": {
            "name": "CAC 40",
            "location": "Paris, French",
            "variation": 0.78
          },
          "NIKKEI": {
            "name": "Nikkei 225",
            "location": "Tokyo, Japan",
            "variation": 0.24
          }
        },
        "available_sources": [
          "BRL"
        ],
        "taxes": []
      },
      "execution_time": 0,
      "from_cache": true
    };
  }
};
