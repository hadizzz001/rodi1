import React from "react";

function ContactInfo() {
  return (
    <>
      <section className="tw-bg-gray-200 tw-mb-40">
        <div className="tw-max-w-7xl tw-mx-auto tw-py-16 tw-px-4 sm:tw-px-6 lg:tw-py-20 lg:tw-px-8">
          <div className="tw-max-w-2xl lg:tw-max-w-4xl tw-mx-auto tw-text-center">
            <h2 className="tw-text-3xl tw-font-extrabold tw-text-gray-900">
            Visit our location
            </h2> 
          </div>
          <div className="tw-mt-16 lg:tw-mt-20">
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8">
              <div className="tw-rounded-lg tw-overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4663.821369622676!2d56.21882408602423!3d58.003748804975784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415eb8d001ce5c9b%3A0x8faa2d11b104db12!2z0YPQuy4g0KHRg9GA0LDRgtC40YHRjNC60LAg0JHQsNGA0YHQutCwLCA1Nywg0JrQuNGX0LI!5e0!3m2!1sen!2sru!4v1619524992238!5m2!1sen!2sru"
                  width="100%"
                  height={480}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
              <div>
                <div className="tw-max-w-full tw-mx-auto tw-rounded-lg tw-overflow-hidden">
                  <div className="tw-px-6 tw-py-4">
                    <h3 className="tw-text-lg tw-font-medium tw-text-gray-900">
                    Our address
                    </h3>
                    <p className="tw-mt-1 tw-text-gray-600">
                      614015, Perm, st. Monastyrskaya, 57
                    </p>
                  </div>
                  <div className="tw-border-t tw-border-gray-200 tw-px-6 tw-py-4">
                    <h3 className="tw-text-lg tw-font-medium tw-text-gray-900">
                      Open
                    </h3>
                    <p className="tw-mt-1 tw-text-gray-600">
                    Monday – Friday: 9:00 – 17:00.
                    </p>
                    <p className="tw-mt-1 tw-text-gray-600">
                    Saturday: 10:00 – 16:00.
                    </p>
                    <p className="tw-mt-1 tw-text-gray-600">
                    Sunday: closed
                    </p>
                  </div>
                  <div className="tw-border-t tw-border-gray-200 tw-px-6 tw-py-4 ">
                    <h3 className="tw-text-lg tw-font-medium tw-text-gray-900">
                    Contact
                    </h3>
                    <p className="tw-mt-1 tw-text-gray-600">
                      Email: rody.raydan@hotmail.com
                    </p>
                    <p className="tw-mt-1 tw-text-gray-600">
                      Phone: +7 964 643-62-71
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactInfo;
