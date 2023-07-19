import { FiInstagram, FiYoutube } from "react-icons/fi";

const Feature = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="text-xl font-bold text-center text-cyan-600 my-4">
        Ikuti Kami Di:
      </h1>
      <div className="grid gap-8 row-gap-5 md:grid-cols-2">
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
            <div className="mb-6 mr-6 lg:mb-0">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
                <FiYoutube
                  size={40}
                  className="stroke-current text-red-800 hover:text-teal-400"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h6 className="mb-2 font-semibold leading-5 text-red-700">Youtube</h6>
                <p className="mb-2 text-sm text-gray-900">
                  Ikuti kami di Youtube untuk info lebih lanjut
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
            <div className="mb-6 mr-6 lg:mb-0">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
                <FiInstagram
                  size={40}
                  className="stroke-current text-red-800 hover:text-teal-400"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h6 className="mb-2 font-semibold leading-5 text-red-700">Instagram</h6>
                <p className="mb-2 text-sm text-gray-900">
                Ikuti kami di Instagram untuk info lebih lanjut
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
