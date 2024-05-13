'use client'
import Script from 'next/script';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';  // Import useRouter
import Inner from '../_components/Inner';
import ProductList from '../_components/ProductList';
import ProductApis from '../_utils/ProductApis';
import { useSearchParams } from 'next/navigation'
 

function Products() {
  const [productList, setProductList] = useState([]);
  const searchParams = useSearchParams() 
  const search = searchParams.get('category')
  
 
  useEffect(() => { 
    if (search) {
      getProductsByCategoryId_(search);
    } else {
      getLatestProducts_();
    }
  }, [search]); // Depend on router.isReady and router.query to re-run the effect when router is ready and query parameters change

  const getLatestProducts_ = () => {
    ProductApis.getLatestProducts().then(res => {
      console.log(res.data.data);
      setProductList(res.data.data);
    }).catch(error => {
      console.error('Error fetching latest products:', error);
    });
  };

  const getProductsByCategoryId_ = (categoryId) => {
    ProductApis.getProductsByCategoryId(categoryId).then(res => {
      console.log(res.data.data);
      setProductList(res.data.data);
    }).catch(error => {
      console.error(`Error fetching products by category ID ${categoryId}:`, error);
    });
  };

  return (
    <>
    
      <Script src="/js/bootstrap.js"/>
      <Inner title="Products"/>
      <ProductList productList={productList}/>
      
    </>
  );
}

export default Products;
