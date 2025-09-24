import Header from "@/components/common/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/header.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "@/components/common/Footer";
export default function App({ Component, pageProps }) {
  return(
    <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}
