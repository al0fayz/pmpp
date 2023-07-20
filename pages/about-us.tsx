import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="conatiner mx-auto">
        <h1 className="my-5 text-xl font-semibold text-cyan-700">About Us</h1>
        <p className="text-justify">
          Bangsa Indonesia mempunyai komitmen yang berkaitan dengan perdamaian
          dunia. Komitmen tersebut tertulis pada alenia ke-4 Pembukaan UUD &lsquo;45
          yang berbunyi “… ikut melaksanakan ketertiban dunia yang berdasarkan
          kemerdekaan, perdamaian abadi dan keadilan sosial…”. Untuk mewadahi
          komitmen tersebut, Pemerintah Indonesia pada masa pemerintahan
          Presiden Soekarno mengirimkan pasukan ke Mesir untuk ikut serta dalam
          upaya pemeliharaan perdamaian dunia.
        </p>
        <p className="text-justify">
          Seiring perjalanan waktu, UN semakin membutuhkan peacekeepers untuk
          menjaga perdamaian. Indonesia merupakan salah satu negara yang
          menerima permintaan dari UN untuk mengirimkan pasukan pemeliharaan
          perdamaian. Dengan adanya permintaan tersebut, Pemerintah Indonesia
          membentuk sebuah institusi untuk mempersiapkan Indonesian
          Peacekeepers. Institusi tersebut adalah Pusat Misi Pemeliharaan
          Perdamaian Tentara Nasional Indonesia.
        </p>
        <p className="text-justify">
          PMPP TNI diresmikan oleh Presiden Susilo Bambang Yudhoyono pada tahun
          2011. Dilengkapi dengan berbagai fasilitas dengan standart
          internasional. Di bangun di atas bukit merah putih dengan luas lahan
          261, 569 hektar.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
