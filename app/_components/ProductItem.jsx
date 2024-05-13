import Image from "next/image";
import React from "react";

function ProductItem({ product }) {
  return (
    <div className="productItem">
      <div className="imageContainer">
        <Image
          src={product?.attributes?.banner?.data?.attributes?.url}
          alt="banner-card"
          width={400}
          height={350}
        />
      </div>
      <div className="details">
        <h5 className="title ">{product?.attributes?.title}</h5>
        <h6 className="price">{product?.attributes?.price} $</h6>
        <h6 className="category">{product?.attributes?.category}</h6>
      </div>

    </div>
  );
}

export default ProductItem;
