# 🚀 Crypto Tracker App

A modern cryptocurrency tracking web application built using **React**, **Vite**, **Tailwind CSS**, and **CoinGecko API**. The app allows users to explore real-time crypto market data, search coins, paginate through results, and view detailed charts for each coin.

---

## 🔍 Features

- 🔁 Real-time cryptocurrency market data (via [CoinGecko API](https://www.coingecko.com/en/api))
- 🔎 Live search by coin name or symbol
- 📊 Detailed coin page with 7-day price chart using Chart.js
- 📄 Pagination for browsing through coins
- 🌓 Dark mode ready (optional)
- 🧩 Component-based and modular codebase using React
- 💨 Built with Tailwind CSS for fast, responsive UI
- ⚡️ Powered by Vite for lightning-fast development

---

## 📸 Preview

![Preview Screenshot](![alt text](image.png))

---

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Chart.js](https://www.chartjs.org/) via `react-chartjs-2`
- [CoinGecko API](https://www.coingecko.com/en/api)

---

## 🚀 Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/your-username/crypto-tracker.git
cd crypto-tracker
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── api.js               # API logic (CoinGecko)
├── App.jsx              # App entry
├── main.jsx             # Main renderer
├── index.css            # Tailwind base
├── components/
│   ├── Layout.jsx       # Layout wrapper
│   ├── SearchBar.jsx    # Search input
│   ├── CoinTable.jsx    # Coin list table
│   └── Pagination.jsx   # Pagination controls
├── pages/
│   ├── Home.jsx         # Home page (market list)
│   └── CoinDetail.jsx   # Coin detail page with chart
```

---

## 🔗 API Reference

- Base URL: `https://api.coingecko.com/api/v3`

### Examples:

- Get coins list:

  ```
  /coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1
  ```

- Get coin detail:

  ```
  /coins/{id}
  ```

- Get chart data:
  ```
  /coins/{id}/market_chart?vs_currency=usd&days=7
  ```

> ⚠️ No API key required but be mindful of rate limits.

---

## 🌐 Deployment

You can deploy this app using:

- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)

Make sure to run:

```bash
npm run build
```

and upload contents of the `dist/` folder.

---

## 👨‍💻 Author

Made with ❤️ by Muhamad husnul (https://github.com/your-Mhusnul)

---

## 📄 License

This project is licensed under the MIT License.
