import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
const HeroSection = () => {
  return (
    <section id="herosection">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-0">
            <a href="/features/insight/71st-national-film-awards-shah-rukh-rani-mukerji-vikrant-massey-bag-first-wins-mohanlal-gets-dadasaheb-phalke-award">
              <div className="home-carousal">
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                     pauseOnMouseEnter: true,
                  }}
                  // autoplay={{
                  //     delay: 500,
                  //     disableOnInteraction: false
                  // }}
                  spaceBetween={0}
                  slidesPerView={1}
                  //   navigation
                  pagination={{ clickable: false }}
                  //   scrollbar={{ draggable: true }}

                  //   onSwiper={(swiper) => console.log(swiper)}
                  //   onSlideChange={() => console.log("slide change")}
                  //   className="home-carousal"
                  style={{ height: "100%", width: "100%" }}
                >
                  <SwiperSlide style={{ width: "100%" }}>
                    <div className="home-cr-abs">
                      <div className="hcr-text d-xxl-block d-xl-block d-lg-block d-md-block d-none">
                        <h1 className="hcr-title">
                          Recently viewed Rolex watches
                        </h1>
                        <span className="hcr-author">BY Team THR India</span>
                      </div>
                    </div>
                    <div className="hcr-img-cont">
                      <div className="pos-rel-full">
                        <img
                          alt="Shah Rukh Khan, Rani Mukerji, Vikrant Massey and Mohanlal at the National Film Awards"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          sizes="100vw"
                          src="https://media.rolex.com/image/upload/q_auto:eco/f_auto/c_limit,w_1920/v1/rolexcom/returning-visitor/family/submariner"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide style={{ width: "100%" }}>
                    <div className="home-cr-abs">
                      <div className="hcr-text d-xxl-block d-xl-block d-lg-block d-md-block d-none">
                        <h1 className="hcr-title">
                          ‘OG’ Is Like An Indian Tarantino Film: Sriya Reddy 
                        </h1>
                        <span className="hcr-author">BY Team THR India</span>
                      </div>
                    </div>
                    <div className="hcr-img-cont">
                      <div className="pos-rel-full">
                        <img
                          alt="Shah Rukh Khan, Rani Mukerji, Vikrant Massey and Mohanlal at the National Film Awards"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          sizes="100vw"
                          src="https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.hollywoodreporterindia.com%2Farticle%2F2025-09-24T08%253A30%253A51.710Z-Untitled%2520design-202.jpg&w=1920&q=75"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </a>
          </div>
          <div className="col-sm-12 d-block d-md-none">
            <a
              className="mob-hero-text"
              href="/features/insight/71st-national-film-awards-shah-rukh-rani-mukerji-vikrant-massey-bag-first-wins-mohanlal-gets-dadasaheb-phalke-award"
            >
              <h1 className="hcr-title">
                71st National Film Awards: Shah Rukh, Rani Mukerji, Vikrant
                Massey Bag First Wins, Mohanlal Gets Dadasaheb Phalke Award
              </h1>
              <span className="hcr-author">BY Team THR India</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
