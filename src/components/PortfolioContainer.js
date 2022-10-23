import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, handleStockClick }) {

  const portfolioStocks = portfolio.map(stock => {
    return <Stock key={stock.id} stock={stock} handleStockClick={handleStockClick}/>
  })

  return (
    <div className="portfolio">
      <h2>My Portfolio</h2>
      {portfolioStocks}
    </div>
  );
}

export default PortfolioContainer;
