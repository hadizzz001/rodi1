'use client'
import React, { useEffect,useState } from 'react';
import BreadCrumbs from "../../_components/BreadCrumbs";
import ProductBanner from './_components/ProductBanner'
import ProductInfo from './_components/ProductInfo'
import ProductApis from '../../_utils/ProductApis'
import { usePathname } from 'next/navigation';

function ProductDetails ({params}) {
  const path = usePathname();

  const [productDetails, setProductDetails] = 
  useState({})
  useEffect (()=>{
  getProductById_();
  },[params?.productId])
  const getProductById_=()=>{
  ProductApis.getProductById(params?.productId).then(res =>{
  console.log('product item', res.data.data)
  setProductDetails(res.data.data)
  })
  }
  return (
    <div className='tw-px-10 tw-py-8 tw-md:px-28'>
      <BreadCrumbs path={path} />
      <div className=' tw-grid tw-grid-cols-1 sm:tw-grid-cols-3   tw-mt-10  tw-justify-around tw-gap-5 sm:tw-gap-0 '>
        <ProductBanner product={productDetails} />
        <ProductInfo product={productDetails} />
      </div>
    </div>
  )
}

export default ProductDetails