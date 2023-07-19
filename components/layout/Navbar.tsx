import { FiInstagram, FiYoutube } from "react-icons/fi";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Info</a>
                <ul className="p-2">
                  <li>
                    <a>Sejarah</a>
                  </li>
                  <li>
                    <a>Tugas Pokok</a>
                  </li>
                  <li>
                    <a>Struktur Organisasi</a>
                  </li>
                  <li>
                    <a>Komandan dari masa ke masa</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Aktifitas</a>
                <ul className="p-2">
                  <li>
                    <a>Kegiatan PMPP TNI</a>
                  </li>
                  <li>
                    <a>Kegiatan Kontingen Garuda</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Tentang Kami</a>
              </li>
              <li>
                <a>Hubungi Kami</a>
              </li>
            </ul>
          </div>
          <Image
            width={100}
            height={100}
            src="/img/logo-pmpp.webp"
            alt="logo"
            className="lg:w-10 w-10"
          />
          <a className="btn btn-ghost normal-case text-xl text-cyan-700">
            PMPP
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Info</summary>
                <ul className="p-2">
                  <li>
                    <a>Sejarah</a>
                  </li>
                  <li>
                    <a>Tugas Pokok</a>
                  </li>
                  <li>
                    <a>Struktur Organisasi</a>
                  </li>
                  <li>
                    <a>Komandan dari masa ke masa</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Aktifitas</summary>
                <ul className="p-2">
                  <li>
                    <a>Kegiatan PMPP TNI</a>
                  </li>
                  <li>
                    <a>Kegiatan Kontingen Garuda</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Tentang Kami</a>
            </li>
            <li>
              <a>Hubungi Kami</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <a
            href="/"
            className="text-gray-500 transition-colors duration-300 hover:text-teal-400"
          >
            <FiYoutube
              size={24}
              className="stroke-current hover:text-teal-400"
            />
          </a>
          <a
            href="/"
            className="text-gray-500 transition-colors duration-300 hover:text-teal-400"
          >
            <FiInstagram
              size={22}
              className="stroke-current hover:text-teal-400"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
