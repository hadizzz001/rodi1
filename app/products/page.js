'use client'
import Script from 'next/script';
import React, { useEffect, useState } from 'react';
import Product from '../_components/Product';
import {Suspense} from "react";

function Products() { 
  
  

  return (
    <>
    <Suspense fallback={<>Loading...</>}> 
      <Product/>
      </Suspense>
      
    </>
  );
}

export default Products;
