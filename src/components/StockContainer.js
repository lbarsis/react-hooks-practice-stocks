import React from "react";
import Stock from "./Stock";

function StockContainer( { stocks, handleStockClick } ) {

  const displayStocks = stocks.map(stock => {
    return <Stock key={stock.id} stock={stock} handleStockClick={handleStockClick} />
  })

  return (
    <div className="stocks">
      <h2>Stocks</h2>
      {displayStocks}
    </div>
  );
}

export default StockContainer;
