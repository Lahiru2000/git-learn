import React from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Royal Classic",
      brand: "TimeZone",
      price: "$2,499",
      originalPrice: "$2,999",
      image: "⌚",
      features: ["Swiss Movement", "Sapphire Crystal", "Water Resistant"],
      badge: "BESTSELLER"
    },
    {
      id: 2,
      name: "Sports Elite",
      brand: "TimeZone",
      price: "$1,899",
      originalPrice: "$2,299",
      image: "⌚",
      features: ["Chronograph", "Titanium Case", "GPS Enabled"],
      badge: "NEW"
    },
    {
      id: 3,
      name: "Heritage Gold",
      brand: "TimeZone",
      price: "$3,999",
      originalPrice: "$4,499",
      image: "⌚",
      features: ["18K Gold", "Automatic", "Limited Edition"],
      badge: "LIMITED"
    },
    {
      id: 4,
      name: "Modern Steel",
      brand: "TimeZone",
      price: "$1,299",
      originalPrice: "$1,599",
      image: "⌚",
      features: ["Stainless Steel", "Date Display", "Luminous Hands"],
      badge: "SALE"
    }
  ];

  return (
    <section className="featured-products" id="watches">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Timepieces</h2>
          <p className="section-subtitle">
            Handpicked collection of our most sought-after watches
          </p>
        </div>

        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-badge">{product.badge}</div>
              
              <div className="product-image">
                <div className="watch-icon">{product.image}</div>
                <div className="product-overlay">
                  <button className="quick-view-btn">Quick View</button>
                </div>
              </div>

              <div className="product-info">
                <div className="product-brand">{product.brand}</div>
                <h3 className="product-name">{product.name}</h3>
                
                <div className="product-features">
                  {product.features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>

                <div className="product-pricing">
                  <span className="current-price">{product.price}</span>
                  <span className="original-price">{product.originalPrice}</span>
                </div>

                <div className="product-actions">
                  <button className="btn btn-primary add-to-cart">Add to Cart</button>
                  <button className="btn btn-outline wishlist">♡</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="products-footer">
          <button className="btn btn-secondary view-all">View All Watches</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
