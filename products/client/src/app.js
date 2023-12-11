import React from 'react';
import './styles.css';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import ProductFilters from './components/ProductFilters';
import useProductData from './hooks/useProductData';

const App=()=>{
    
  const { products, filteredProducts, handleSearch, handleFilterChange } = useProductData();

    return(
        <div className = "App">
            <SearchBar handleSearch = {handleSearch}/>
            <div className="product-filters-container">
              <ProductFilters products={products} filteredProducts={filteredProducts} onFilterChange={handleFilterChange} />
              <ProductList filteredProducts={filteredProducts} />
            </div>
        </div>
    );

};
export default App;