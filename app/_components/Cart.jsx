import React, { useContext } from "react";
import { CartContext } from "../_context/CartContext";
import Link from "next/link";
function Cart() {
  const { cart, setcart } = useContext(CartContext);
  return (
    <div
      className="tw-h-[300px] tw-w-[250px]
    tw-bg-gray-100   tw-rounded-md tw-border tw-shadow-sm
    tw-absolute  tw-p-5 tw-overflow-auto tw-ml-4  tw-right-28 tw-top-10" style={{zIndex:"9999999999"}}
    >
      <div className="tw-mt-4 tw-space-y-6">
        <ul className="tw-space-y-4">
          {cart?.map((item) => (
            <li key={item?.id} className="tw-flex tw-items-center tw-gap-4">
              <img
                src={item?.product?.attributes?.banner?.data?.attributes?.url}
                alt=""
                className="tw-object-cover tw-w-12 tw-h-16 "
              />

              <div>
                <h3 className="tw-text-sm tw-text-gray-900 tw-line-clamp-1">
                  {item?.product?.attributes?.title}
                </h3>

                <dl className="tw-mt-0.5 tw-space-y-px tw-text-[10px] tw-text-gray-600">
                  <div>
                    <dt className="tw-inline">Category:</dt>
                    <dd className="tw-inline">
                      {item?.product?.attributes?.category}
                    </dd>
                  </div>

                  <div>
                    <dt className="tw-inline">Price:</dt>
                    <dd className="tw-inline">
                      {item?.product?.attributes?.price}
                    </dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="tw-mt-5 tw-space-y-4 tw-text-center">
        <Link
          href="/cart"
          className="tw-block tw-px-5 tw-py-3 tw-text-sm tw-text-gray-100 tw-transition tw-bg-gray-700 tw-rounded hover:tw-bg-gray-600 hover:tw-text-blue-100"
        >
          View my cart ({cart?.length})
        </Link>

        <Link
          href="/products"
          className="tw-inline-block tw-text-sm tw-text-gray-500 tw-underline tw-transition tw-underline-offset-4 hover:tw-text-gray-600"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
}

export default Cart;
