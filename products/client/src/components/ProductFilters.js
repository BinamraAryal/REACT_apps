import React, { useState } from 'react';
import './styles/productfilters.css'

const ProductFilters = ({ products, onFilterChange }) => {
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice:'',
    company: '',
    category: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const applyFilters = () => {
    const filtered = products.filter((product) => {
      // Convert values to numbers for comparison
      const price = parseFloat(product.price);
      const minPrice = parseFloat(filters.minPrice);
      const maxPrice = parseFloat(filters.maxPrice);
  
      // Price filtering logic:
      // If there's no input for minPrice or the product's price is greater than or equal to minPrice
      // AND
      // If there's no input for maxPrice or the product's price is less than or equal to maxPrice
      const priceMatch =
        (isNaN(minPrice) || price >= minPrice) && (isNaN(maxPrice) || price <= maxPrice);

      // Company and category filtering logic:
    // If there's no filter for company or the product's company contains the entered company filter value
    // AND
    // If there's no filter for category or the product's category contains the entered category filter value
    const companyMatch =
      !filters.company || product.company.toLowerCase().includes(filters.company.toLowerCase());
    const categoryMatch =
      !filters.category || product.category.toLowerCase().includes(filters.category.toLowerCase());

      return priceMatch && companyMatch && categoryMatch;
    });
    onFilterChange(filtered);
  };

  const resetFilters = () => {
    setFilters({
      minPrice: '',
      maxPrice:'',
      company: '',
      category: '',
    });
    onFilterChange(products);
  };

  return (
    <div className="product-filters">
      <h1>Product Filters</h1>
      <div className="price-filter">
        <input
          type="number"
          placeholder="Min Price"
          name="minPrice"
          value={filters.minPrice}
          onChange={handleFilterChange}
        />
        <input
          type="number"
          placeholder="Max Price"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleFilterChange}
        />
      </div>
      <input
        type="text"
        placeholder="Filter by company"
        name="company"
        value={filters.company}
        onChange={handleFilterChange}
      />
      <input
        type="text"
        placeholder="Filter by category"
        name="category"
        value={filters.category}
        onChange={handleFilterChange}
      />
      <button onClick={applyFilters}>Apply Filters</button>
      <button onClick={resetFilters}>Reset Filters</button>
    </div>
  );
};

export default ProductFilters;
