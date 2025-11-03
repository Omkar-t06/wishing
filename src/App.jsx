import { motion } from "framer-motion";
import Sound from "./components/Sound";
import { ConfettiAutoTrigger } from "./components/ConfettiAutoTrigger";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import u1 from './assets/urvi/u1.jpg';
import u2 from './assets/urvi/u2.jpg';
import u3 from './assets/urvi/u3.jpg';
import u4 from './assets/urvi/u4.jpg';
import u5 from './assets/urvi/u5.jpg';

function App() {
  const images = [u1, u2, u3, u4, u5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-linear-to-b from-rose-300 via-pink-200 to-purple-300">
      
      <ConfettiAutoTrigger delayMs={1500} /> 

      {/* Sound toggle button */}
      <div className="absolute top-4 right-4 z-20">
        <Sound />
      </div>

      {/* Carousel container */}
      <div className="w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-white/30 bg-white/10 backdrop-blur-md">
        <Slider {...settings}>
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full h-80 sm:h-88 md:h-104 lg:h-120"
            >
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* Birthday message */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 text-center px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-pink-700 drop-shadow-lg">
          🎉 Happy Birthday <span className="text-rose-600">Urvi</span> 🎂
        </h1>
        <p className="mt-3 text-lg text-white font-light">
          Wishing you endless smiles, laughter & magical moments ✨. I know I am bit late thoda time waste hogya planning problems se forgive me. Wish you have a great day and enjoy every moment. Ye thoda irriating laga ya jada bhi maaf kardena 😂. Sorry 😅!!
        </p>
      </motion.div>

      <div id="my-modal"></div>
    </div>
  );
}

export default App;
