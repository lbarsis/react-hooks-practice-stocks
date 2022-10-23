import React from "react";

function Stock({ stock, handleStockClick }) {
  const { ticker, name, type, price} = stock


  return (
    <div onClick={() => handleStockClick(stock)}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Price: {price}</p>
          <p className="card-text">Ticker: {ticker}</p>
          <p className="card-text">Type: {type}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
