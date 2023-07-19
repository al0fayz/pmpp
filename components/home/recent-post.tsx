import { FiEye } from "react-icons/fi";

const data = [
  {
    title: "MEDAL PARADE GHANBATT UNP 5-66 DI AL QAWZAH",
    category: "Kontingen Garuda",
    created_at: "16-07-2023",
    desc: "Komandan Satuan Tugas INDOBATT XXIII-Q/UNIFIL Kolonel Inf Syafruddin yang diwakili oleh Wakil Komandan Satuan Tugas INDOBATT XXIII-Q/UNIFIL Letnan Kolonel Inf Andika Suseno menghadiri Upacara penerimaan penghargaan Medal parade GHANBATT yang digelar di Markas GHANBATT UNP 5-66, Al Qawzah, Lebanon Selatan, Jum’at (14/07/2023). Bertindak selaku Inspektur Upacara Commander Sector West Brigadir ...",
    img: "/img/post1.webp",
  },
  {
    title:
      "SATGAS INDO RDB MELAKSANAKAN PENYULUHAN KESEHATAN DAN OLAHRAGA BERSAMA MASYARAKAT DESA IDOHU",
    category: "Kontingen Garuda",
    created_at: "16-07-2023",
    desc: "Komanda (MPIO) – Satgas Indo RDB yang sedang melaksanakan misi perdamaian dalam menjaga wilayah Kongo terus menjalin hubungan dengan seluruh komponen masyarakat termasuk para pemuda. Hal ini dapat dilihat dari berbagai kegiatan Cimic mulai dari penyuluhan menjaga kesehatan gigi dan olahraga bersama, bertempat di Desa Idohu, Komanda, Republik Demokratik Kongo,",
    img: "/img/post2.webp",
  },
  {
    title:
      "TIM EOD SATGAS KIZI TNI KONGA XXXVII-I MINUSCA CAR KEMBALI MELAKSANAKAN DISPOSAL AXO MUNISI EXPIRED",
    category: "Kontingen Garuda",
    created_at: "16-07-2023",
    desc: "Tim EOD Satgas Kizi TNI Konga XXXVII-I MINUSCA Pimpinan Dantim EOD Lettu Czi Jusriadi bersama Lettu Czi Opik Riswara Kembali melaksanakan tugas Disposal AXO Munisi Expired di Kassai Camp, Bangui pada tanggal 7 Juli 2023. Tim EOD IEC melaksanakan pendisposalan AXO Munisi Expired yang terdiri dari : Granat Tangan 82.2...",
    img: "/img/post3.webp",
  },
];
const RecentPost = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-cyan-800 capitalize lg:text-3xl dark:text-white">
              Aktifitas Terbaru{" "}
            </h1>
          </div>

          <hr className="my-8 border-gray-200 dark:border-gray-700" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {data.map((dt, index) => (
              <div key={index} className="bg-white shadow-md rounded-md">
                <img
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src={dt.img}
                  alt=""
                />

                <div className="mt-8 px-4">
                  <span className="text-cyan-700 uppercase">{dt.category}</span>
                  <div className="flex justify-start items-center gap-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400 gap-2">
                      {dt.created_at}
                    </span>
                    |
                    <span className="text-blue-800">
                      <FiEye
                        size={20}
                        className="stroke-current hover:text-teal-400"
                      />
                    </span>
                    <span className="text-gray-500">18 views</span>|
                    <span className="text-gray-500">12 comments</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <img
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=764&amp;q=80"
                      alt=""
                    />

                    <div className="mx-4">
                      <h1 className="text-sm text-cyan-700 dark:text-gray-200">
                        by Pentak PMPP TNI
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Lead Developer
                      </p>
                    </div>
                  </div>

                  <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white hover:text-cyan-700">
                    {dt.title}
                  </h1>

                  <p className="mt-2 text-sm text-justify text-gray-500 dark:text-gray-400">
                    {dt.desc}
                  </p>

                  <div className="flex items-center justify-between my-2">
                    <a
                      href="#"
                      className="inline-block text-blue-500 underline hover:text-blue-400"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentPost;
