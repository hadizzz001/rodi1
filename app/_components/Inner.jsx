import React from 'react';

function Inner({ title }) {
  return (
    <section className="inner_page_head">
      <div className="container_fuild">
         <div className="row">
            <div className="col-md-12">
               <div className="full">
                  <h3>{title}</h3>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}

export default Inner;
