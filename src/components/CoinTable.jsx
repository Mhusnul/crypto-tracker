import { Link } from "react-router-dom";

export default function CoinTable({ coins, search }) {
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="overflow-x-auto rounded-md">
      <table className="min-w-full text-left text-gray-300">
        <thead className="bg-[#334155] uppercase text-gray-400">
          <tr>
            <th className="py-3 px-4 w-10">#</th>
            <th className="py-3 px-4">Coin</th>
            <th className="py-3 px-4 text-right">Price</th>
            <th className="py-3 px-4 text-right">24h %</th>
            <th className="py-3 px-4 text-right">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {filteredCoins.map((coin, index) => (
            <tr
              key={coin.id}
              className="border-b border-gray-700 hover:bg-[#475569] transition cursor-pointer"
            >
              <td className="py-3 px-4">{index + 1}</td>
              <td className="py-3 px-4 flex items-center gap-3">
                <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                <Link
                  to={`/coin/${coin.id}`}
                  className="hover:underline font-semibold text-white"
                >
                  {coin.name}{" "}
                  <span className="uppercase text-gray-400 text-sm">
                    ({coin.symbol})
                  </span>
                </Link>
              </td>
              <td className="py-3 px-4 text-right">
                ${coin.current_price.toLocaleString()}
              </td>
              <td
                className={`py-3 px-4 text-right font-semibold ${
                  coin.price_change_percentage_24h >= 0
                    ? "text-green-400"
                    : "text-red-500"
                }`}
              >
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </td>
              <td className="py-3 px-4 text-right">
                ${coin.market_cap.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
