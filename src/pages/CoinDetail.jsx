import React, { useState, useEffect } from "react";
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

  if (loading) return <p className="text-center mt-8">Loading detail...</p>;
  if (!coin) return <p className="text-center mt-8">Coin not found</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        {coin.name} ({coin.symbol.toUpperCase()})
      </h1>
      <div className="flex items-center gap-4">
        <img src={coin.image.large} alt={coin.name} className="w-16 h-16" />
        <p className="text-xl">
          ${coin.market_data.current_price.usd.toLocaleString()}
        </p>
      </div>
      <div
        className="mt-6 prose max-w-none"
        dangerouslySetInnerHTML={{
          __html: coin.description.en.split(". ")[0] + ".",
        }}
      />
      {chartData && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-2">Price Last 7 Days</h2>
          <Line
            data={{
              labels: chartData.map((item) =>
                new Date(item[0]).toLocaleDateString()
              ),
              datasets: [
                {
                  label: `${coin.name} Price (USD)`,
                  data: chartData.map((item) => item[1]),
                  borderColor: "rgb(75, 192, 192)",
                  fill: false,
                  tension: 0.3,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: { legend: { display: true } },
              scales: {
                y: { ticks: { callback: (value) => `$${value}` } },
              },
            }}
          />
        </div>
      )}
    </div>
  );
}

export default CoinDetail;
