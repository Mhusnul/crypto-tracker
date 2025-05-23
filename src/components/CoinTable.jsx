import { Link } from "react-router-dom";

function CoinTable({ coins, search }) {
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 shadow-md">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3 border-b">#</th>
            <th className="p-3 border-b">Coin</th>
            <th className="p-3 border-b">Price</th>
            <th className="p-3 border-b">24h Change</th>
            <th className="p-3 border-b">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {filteredCoins.map((coin, index) => (
            <tr key={coin.id} className="hover:bg-gray-50">
              <td className="p-3 border-b">{index + 1}</td>
              <td className="p-3 border-b flex items-center gap-2">
                <Link
                  to={`/coin/${coin.id}`}
                  className="flex items-center gap-2 hover:underline"
                >
                  <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                  {coin.name} ({coin.symbol.toUpperCase()})
                </Link>
              </td>
              <td className="p-3 border-b">
                ${coin.current_price.toLocaleString()}
              </td>
              <td
                className={`p-3 border-b ${
                  coin.price_change_percentage_24h > 0
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td className="p-3 border-b">
                ${coin.market_cap.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoinTable;
