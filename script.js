const API_KEY = "TD4HMUIKN3LBTOU7";
const BASE_URL = "https://www.alphavantage.co/query";

const searchInput = document.getElementById("stock-search");
const searchButton = document.getElementById("search-btn");
const trendingDropdown = document.getElementById("trending-stocks");
const stockName = document.getElementById("stock-name");
const stockDetails = document.getElementById("stock-details");
const stockChart = document.getElementById("stock-chart").getContext("2d");

let chartInstance;

// Fetch top 10 trending stocks (simulated for demo)
const trendingStocks = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "META", "NVDA", "NFLX", "INTC", "ADBE"];
trendingDropdown.innerHTML = trendingStocks
  .map(stock => `<option value="${stock}">${stock}</option>`)
  .join("");

// Fetch stock data from API
async function fetchStockData(symbol) {
  try {
    const response = await fetch(`${BASE_URL}?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`);
    const data = await response.json();
    return data["Time Series (Daily)"];
  } catch (error) {
    console.error("Error fetching stock data:", error);
  }
}

// Update stock chart and details
async function updateStockData(symbol) {
  const data = await fetchStockData(symbol);
  if (!data) {
    alert("Failed to fetch stock data. Please try again.");
    return;
  }

  const dates = Object.keys(data).slice(0, 30).reverse();
  const prices = dates.map(date => parseFloat(data[date]["4. close"]));

  // Update stock name
  stockName.textContent = `Stock: ${symbol}`;

  // Update stock details
  const latestData = data[dates[0]];
  stockDetails.innerHTML = `
    <p>Price: $${parseFloat(latestData["4. close"]).toFixed(2)}</p>
    <p>Volume: ${latestData["5. volume"]}</p>
    <p>Date: ${dates[0]}</p>
  `;

  // Update chart
  if (chartInstance) chartInstance.destroy();
  chartInstance = new Chart(stockChart, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: `${symbol} Stock Price`,
          data: prices,
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
}

// Event listeners
searchButton.addEventListener("click", () => {
  const symbol = searchInput.value.toUpperCase();
  if (symbol) updateStockData(symbol);
});

trendingDropdown.addEventListener("change", () => {
  const symbol = trendingDropdown.value;
  if (symbol) updateStockData(symbol);
});

// Initialize with first trending stock
updateStockData(trendingStocks[0]);
