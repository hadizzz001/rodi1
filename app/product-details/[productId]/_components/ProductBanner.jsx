import Image from "next/image";
import React from "react";

function ProductBanner({product}) {
  return (
    <div>
      <Image
        src={product?.attributes?.banner?.data?.attributes?.url}
        alt="product-details-banner"
        width={250}
        height={200}
		className='tw-mx-auto tw-my-auto tw-bg-slate-200 tw-rounded-lg '
      />
    </div>
  );
}

export default ProductBanner;
