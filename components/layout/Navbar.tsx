import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { FiInstagram, FiYoutube } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="sticky top-0 bg-white shadow dark:bg-gray-800 z-50">
        <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-end justify-between">
            <a href="/"><Image width={30} height={30} src="/img/logo-pmpp.webp" alt="logo" /></a>
            <a href="/" className="font-bold text-cyan-800 lg:pl-2 ">
              PMPP
            </a>

            {/* <!-- Mobile menu button --> */}
            <div className="flex lg:hidden">
              <button
                onClick={handleClick}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg
                  x-show="!isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>

                {/* <svg
                  x-show="isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg> */}
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <div
            className={clsx(
              "absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center",
              {
                "translate-x-0 opacity-100": isOpen,
                "opacity-0 -translate-x-full": !isOpen,
              }
            )}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link
                href="/"
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-teal-500 dark:hover:text-teal-400 md:mx-4 md:my-0"
              >
                Home
              </Link>
              <Link
                href="/report"
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-teal-500 dark:hover:text-teal-400 md:mx-4 md:my-0"
              >
                Sejarah
              </Link>
              <Link
                href="/#faq-section"
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-teal-500 dark:hover:text-teal-400 md:mx-4 md:my-0"
              >
                Tugas Pokok
              </Link>

              <Link
                href="/register"
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-teal-500 dark:hover:text-teal-400 md:mx-4 md:my-0"
              >
                Struktur organisasi
              </Link>

              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-teal-400"
              >
                <FiYoutube size={24} className="stroke-current hover:text-teal-400 mr-2" />
              </a>
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-teal-400"
              >
                <FiInstagram size={22} className="stroke-current hover:text-teal-400 mr-2" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
