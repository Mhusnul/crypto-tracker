import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

function CoinDetail() {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        setCoin(res.data);

        const chartRes = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
          {
            params: { vs_currency: "usd", days: 7 },
          }
        );
        setChartData(chartRes.data.prices);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCoin();
  }, [id]);

  if (loading)
    return (
      <p className="text-center text-gray-400 mt-12 text-lg">
        Loading detail...
      </p>
    );
  if (!coin)
    return (
      <p className="text-center text-red-500 mt-12 text-lg">Coin not found</p>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#1e293b] rounded-lg shadow-lg text-gray-200 font-sans">
      <div className="flex items-center gap-6 mb-6">
        <img src={coin.image.large} alt={coin.name} className="w-20 h-20" />
        <div>
          <h1 className="text-4xl font-extrabold mb-1">{coin.name}</h1>
          <p className="uppercase text-cyan-400 font-semibold text-lg">
            {coin.symbol}
          </p>
          <p className="text-2xl mt-2 font-semibold">
            ${coin.market_data.current_price.usd.toLocaleString()}
          </p>
          <p
            className={`mt-1 font-semibold ${
              coin.market_data.price_change_percentage_24h >= 0
                ? "text-green-400"
                : "text-red-500"
            }`}
          >
            24h: {coin.market_data.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>
      </div>

      <section className="prose prose-invert max-w-none mb-10 leading-relaxed text-gray-300">
        <div
          dangerouslySetInnerHTML={{
            __html: coin.description.en.split(". ")[0] + ".",
          }}
        />
      </section>

      {chartData && (
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Price Last 7 Days
          </h2>
          <div className="bg-[#0f172a] p-4 rounded-md shadow-inner">
            <Line
              data={{
                labels: chartData.map((item) =>
                  new Date(item[0]).toLocaleDateString()
                ),
                datasets: [
                  {
                    label: `${coin.name} Price (USD)`,
                    data: chartData.map((item) => item[1]),
                    borderColor: "rgb(14, 165, 233)", // cyan-500
                    backgroundColor: "rgba(14, 165, 233, 0.3)",
                    fill: true,
                    tension: 0.3,
                    pointRadius: 0,
                    borderWidth: 2,
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: { labels: { color: "#60a5fa" } }, // text-cyan-400
                  tooltip: { mode: "index", intersect: false },
                },
                scales: {
                  x: {
                    ticks: { color: "#94a3b8" }, // text-slate-400
                    grid: { color: "#334155" }, // slate-700
                  },
                  y: {
                    ticks: {
                      color: "#94a3b8",
                      callback: (value) => `$${value}`,
                    },
                    grid: { color: "#334155" },
                  },
                },
              }}
            />
          </div>
        </section>
      )}
    </div>
  );
}

export default CoinDetail;
