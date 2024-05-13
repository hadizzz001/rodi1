
import Client from "./_components/Client";
import Subscribe from "./_components/Subscribe";
import Banner from "./_components/Banner";
import Why from "./_components/Why";
import Hero from "./_components/Hero";
import Script from "next/script";
export default function Home() {
  return (
    <>
          <link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
      <Script src="/js/bootstrap.js" />
      <Script src="/lib/owlcarousel/owl.carousel.min.js" strategy="beforeInteractive" />
      
      <Hero/>
      <Why/>
      <Banner/>
      
      <Subscribe />
      <Client />
  
    </>
  );
}
