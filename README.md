Stock Tracker Dashboard
A responsive and interactive web application for tracking stock prices, viewing historical trends, and comparing stock performance. This project uses the Alpha Vantage API for real-time stock data and Chart.js for visualizing stock price trends.

Features
Search Stocks: Enter a stock symbol (e.g., AAPL, MSFT) to retrieve detailed information, including price, volume, and price changes.
Trending Stocks Dropdown: Select from a list of top 10 trending stocks to view their data and trends.
Interactive Charts: Visualize stock price trends over the past 30 days with a responsive line chart.
Dynamic Table: Compare selected stocks based on price, change, and volume.
Responsive Design: Optimized for desktops, tablets, and mobile devices.
Technologies Used
HTML5: For structuring the webpage.
CSS3: For styling and responsive design.
JavaScript: For DOM manipulation, API integration, and interactivity.
Alpha Vantage API: For fetching real-time stock data.
Chart.js: For creating interactive stock price charts.
Installation and Setup
Clone the Repository


git clone https://github.com/JatinMadan01/stoke.git?authuser=0
cd stock-tracker-dashboard
Add Your API Key Replace the placeholder API key in script.js with your actual Alpha Vantage API key:

javascript
const API_KEY = "TD4HMUIKN3LBTOU7";
Run the Application Use a local web server to run the project:

Option 1: Use the Live Server extension in Visual Studio Code.
Open the application in your browser.
Use the search bar to enter a stock symbol (e.g., AAPL) and view its data.
Select a stock from the dropdown menu to explore trending stocks.
View the stock's historical performance in the interactive chart.
Screenshots
1. Dashboard Overview
Include a screenshot of the main dashboard.

2. Stock Search
Include a screenshot of the search feature.

3. Stock Chart
Include a screenshot of the stock price chart.

Acknowledgments
Alpha Vantage for providing free stock market data.
Chart.js for the interactive charting library.
