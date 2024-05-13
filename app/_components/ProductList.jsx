import React, { useState } from 'react';
import ProductItem from './ProductItem';
import Link from 'next/link';

function ProductList({ productList }) {
  const [rowsToShow, setRowsToShow] = useState(12);

  const toggleRows = () => {
    setRowsToShow(rowsToShow + 12);
  };

  return (
    <>
      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
            Our <span>Products</span>
            </h2>
          </div>
          <div className="row">
            {productList.slice(0, rowsToShow).map(item => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={item.id}>
                <div className="box">
                  <div className="option_container">
                    <div className="options">
                      <Link href={`/product-details/${item.id}`} className="option1">
                        Buy Now
                      </Link>
                    </div>
                  </div>
                  <ProductItem product={item} />
                </div>
              </div>
            ))}
          </div>
          {rowsToShow < productList.length && (
            <div className="btn-box">
              <button onClick={toggleRows}>show more</button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default ProductList;
