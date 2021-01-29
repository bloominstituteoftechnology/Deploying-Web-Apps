import React, { Component } from "react";
import axios from "axios";

export default class MarketsList extends Component {
  state = {
    markets: []
  };

  componentDidMount() {
    this.fetchMarkets(this.state.markets);
    console.log("App: Component is mounted.");
  }


  fetchMarkets = () => {
    axios.get(`http://api.bitcoincharts.com/v1/markets.json`)
   
    .then((res) => {
     console.log(res);
     this.setState({
      plants: res.data.data
     });
     
   })
   .catch((err) => console.log("error: ", err));
}

  render() {
    return (
      <main className="markets-list">
        {this.state?.markets?.map((market) => (
          <div className="market-card" key={market.symbol}>
            <div className="market-details">
              <h2 className="market-currency">{market.currency}</h2>
              <p className="market-bid">{market.bid}</p>

              <div className="market-bottom-row">
                <p>$ {market.ask}</p>
                <p>+ {market.high}</p>
                <p>- {market.low}</p>
              </div>

            </div>
          </div>
        ))}
      </main>
    );
  }
}