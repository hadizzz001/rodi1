import Link from 'next/link';
import React from 'react';

function BreadCrumbs({path}) {
  return (
    <>
      {/*
        Heads up! 👋
        This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
      */}

      <nav aria-label="Breadcrumb" className="tw-flex">
        <ol className="tw-flex tw-overflow-hidden tw-rounded-lg tw-border tw-border-gray-200 tw-text-gray-600">
          <li className="tw-flex tw-items-center">
            <Link
              href={'/'}
              className="tw-flex tw-h-10 tw-items-center tw-gap-1.5 tw-bg-gray-100 tw-px-4 tw-transition tw-hover:tw-text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="tw-h-4 tw-w-4 tw-text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>

              <span className="tw-ms-1.5 tw-text-xs tw-font-medium tw-text-gray-500"> Home </span>
            </Link>
          </li>

          <li className="tw-relative tw-flex tw-items-center">
            <span
              className="tw-absolute tw-inset-y-0 tw-start-px tw-h-10 tw-w-4 tw-bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
            ></span>

            <a
              href="#"
              className=" tw-text-gray-500 tw-flex tw-h-10 tw-items-center tw-bg-white tw-pe-4 tw-ps-8 tw-text-xs tw-font-medium tw-transition tw-hover:text-gray-900"
            >
              {path?.split('/')[1]}
            </a>
          </li>
          <li className="tw-relative tw-flex tw-items-center">
            <span
              className="tw-absolute tw-inset-y-0 tw-start-px tw-h-10 tw-w-4 tw-bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
            ></span>

            <a
              href="#"
              className=" tw-text-gray-500 tw-flex tw-h-10 tw-items-center tw-bg-white tw-pe-4 tw-ps-8 tw-text-xs tw-font-medium tw-transition tw-hover:text-gray-900"
            >
              {path?.split('/')[2]}
            </a>
          </li>
        </ol>
      </nav>
    </>
  );
}

export default BreadCrumbs;
