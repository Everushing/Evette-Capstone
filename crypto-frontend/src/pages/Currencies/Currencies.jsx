import { Link } from "react-router-dom";

export default function Currencies(props) {
  const currencies = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
  ];

  return (
    <div className="currencies">
      <h1>Current Currencies</h1>
      {currencies.map((coin) => {
        const { name, symbol } = coin;

        return (
          <div key={symbol}>
            <Link to={`/price/${symbol}`}>
              <h2>{name}</h2>
            </Link>
          </div>
        );
      })}
      <h3>
        <Link to="/">Go Back</Link>
      </h3>
    </div>
  );
}
