import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [sort, setSort] = useState(false)
  const [filter, setFilter] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(r => r.json())
    .then(stocks => setStocks(stocks))
  }, [])

  function handleStockClick(newStock) {
    if (portfolio.includes(newStock)) {
      const displayStocks = portfolio.filter(stock => stock.id !== newStock.id)
    setStocks([...stocks, newStock])
    setPortfolio(displayStocks)
    } else {
      const displayStocks = stocks.filter(stock => stock.id !== newStock.id)
      setStocks(displayStocks)
      setPortfolio([...portfolio, newStock])
    }
  }

  function handleFilter(e){
    setFilter(e.target.value)
  }

  const filteredStocks = stocks.filter(stock => {
    if (filter === "All") {
      return stock
    } else {
      return stock.type === filter
    }
  })

  function handleSort(e) {
    setSort(sort => !sort)
    if (e.target.value === "Alphabetically") {
      stocks.sort((a,b) => {
        const stockA = a.name.toUpperCase()
        const stockB = b.name.toUpperCase()
  
        if (stockA < stockB) {
          return -1;
        }
        if (stockA > stockB) {
          return 1;
        }
        
        return 0;
      })
    } else {
      stocks.sort((a, b) => a.price - b.price);
    }
  }

  return (
    <div>
      <SearchBar onSort={handleSort} onFilter={handleFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} handleStockClick={handleStockClick} sort={sort} onFilter={handleFilter}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} handleStockClick={handleStockClick}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
