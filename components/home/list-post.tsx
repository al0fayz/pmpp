import Pagination from "@/components/home/pagination";

const data = [
  {
    title:
      "SEMPU XXV-O UNIFIL MENGGELAR KEGIATAN ROAD SAFETY CAMPAIGN DI INDOBATT, UNP 7-1",
    img: "/img/img1.webp",
    creted_at: "11/07/2023",
    category: "Kontingen Garuda",
  },
  {
    title:
      "DEPUTY OF NORTHERN SECTOR COMMANDER MONUSCO BERKUNJUNG KE PERMANENT OPERATION BASE (POB) BOGORO DAN DANAU ALBERT",
    img: "/img/img2.webp",
    creted_at: "11/07/2023",
    category: "Kontingen Garuda",
  },
  {
    title:
      "KOMANDAN INDOBATT XXIII-Q/UNIFIL HADIRI UPACARA TOA FRENCHBATT DI DAYR KIFA",
    img: "/img/img3.webp",
    creted_at: "11/07/2023",
    category: "Kontingen Garuda",
  },
  {
    title: "SATGAS INDO RDB SELENGGARAKAN FUTSAL OPEN TOURNAMENT",
    img: "/img/img3.webp",
    creted_at: "11/07/2023",
    category: "Kontingen Garuda",
  },
  {
    title:
      "DANSATGAS KIZI TNI KONGA XX-T MONUSCO HADIRI UPACARA MEDAL PARADE MALAWI BATALYON CONTINGEN",
    img: "/img/img4.webp",
    creted_at: "11/07/2023",
    category: "Kontingen Garuda",
  },
  {
    title:
      "DEPUTY OF NOTHERN SECTOR of Nothern SECTOR COMMANDER MONUSCO BERKUNJUNG KE MAKO SATGAS INDO RDB",
    img: "/img/img5.webp",
    creted_at: "11/07/2023",
    category: "Kontingen Garuda",
  },
];
const ListPost = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-cyan-700 capitalize lg:text-3xl dark:text-white">
            Semua Berita
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {data.map((dt, index) => (
              <div className="lg:flex" key={index}>
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src={dt.img}
                  alt=""
                />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="#"
                    className="text-md font-semibold text-gray-800 hover:underline hover:text-cyan-400 dark:text-white "
                  >
                    {dt.title}
                  </a>
                  <span className="text-cyan-700">{dt.category}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    On: {dt.creted_at}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <Pagination />
        </div>
      </section>
    </>
  );
};

export default ListPost;
