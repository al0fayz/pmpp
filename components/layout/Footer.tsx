import Image from "next/image";
import { useState } from "react";
import { FiInstagram, FiYoutube } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const [year, setYear] = useState(date.getFullYear());
  return (
    <>
      <div className="bg-gray-900">
        <div className="pt-16 mx-auto container">
          <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
            <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
              <div className="col-span-2">
                <div className="space-y-2">
                  <Image
                    width={100}
                    height={100}
                    src="/img/logo-pmpp.webp"
                    alt="logo"
                    className="lg:w-1/8 w-1/5"
                  />
                  <h1 className="h-1 bold text-white lg:text-4xl text-xl">
                    PMPP
                  </h1>
                </div>
              </div>

              <div>
                <p className="font-medium tracking-wide text-gray-300 text-sm lg:text-base">
                  Beranda
                </p>
                <ul className="mt-2 space-y-2 text-sm lg:text-base">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-500 transition-colors duration-300 hover:text-teal-400"
                    >
                      Sejarah
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-500 transition-colors duration-300 hover:text-teal-400"
                    >
                      Tugas Pokok
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-500 transition-colors duration-300 hover:text-teal-400"
                    >
                      Struktur organisasi
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-sm lg:text-base col-span-1">
                <p className="font-medium tracking-wide text-gray-300">
                  Aktifitas
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-500 transition-colors duration-300 hover:text-teal-400"
                    >
                      Komandan dari masa ke masa
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-500 transition-colors duration-300 hover:text-teal-400"
                    >
                      Kegiatan PMPP TNI
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-500 transition-colors duration-300 hover:text-teal-400"
                    >
                      Kegiatan Kontingen Garuda
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:max-w-md lg:col-span-2">
              <span className="text-base font-medium tracking-wide text-gray-300">
                Subscribe for updates
              </span>
              <form className="flex flex-col mt-4 md:flex-row">
                <input
                  placeholder="Email"
                  required
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-cyan-800 hover:bg-cyan-700 focus:shadow-outline focus:outline-none"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
            <p className="text-xs text-gray-500 lg:text-sm">
              © Copyright {year} IAF PKC — Pusat Misi Pemeliharaan Perdamaian
              TNI (PMPP TNI). All rights reserved.
            </p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              <Link
                href="#"
                className="text-gray-500 transition-colors duration-300 hover:text-teal-400"
              >
                <FiYoutube size={24} className="stroke-current hover:text-teal-400" />
              </Link>
              <Link
                href="#"
                className="text-gray-500 transition-colors duration-300 hover:text-teal-400"
              >
                <FiInstagram size={24} className="stroke-current hover:text-teal-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
