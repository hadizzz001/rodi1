import React from "react";

function Feedback() {
  return (
    <>
      <section style={{ marginTop: "100px" }}>
        {" "}
        {/* Adjust the margin-top value as needed */}
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-center">Your feedback</h2>
              <p className="text-secondary text-center lead fs-4 mb-5">
              For the best personal experience, we invite you to visit
                 us at the address. Also, feel free to contact us via
                 our social media are listed below.
              </p>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feedback;
