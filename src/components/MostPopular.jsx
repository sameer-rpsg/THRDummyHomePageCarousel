import React, { useEffect, useRef } from "react";
// import style from "./Home.module.css";
import Link from "next/link";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import SlideNavButton from "@/components/common/SlideNavButton";

const MostPopular = ({ data }) => {
  const swiperRef = useRef(null);

  const swiperClass = "most-popular-swiper";

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;

      const handleSlideChange = () => {
        const bullets = document.querySelectorAll(
          `.${swiperClass} .swiper-pagination-bullet`
        );

        bullets.forEach((bullet, index) => {
          bullet.classList.remove("expanded");

          if (index === swiper.realIndex) {
            setTimeout(() => {
              bullet.classList.add("expanded");
            }, 80);
          }
        });
      };

      swiper.on("slideChange", handleSlideChange);

      handleSlideChange();

      return () => {
        swiper.off("slideChange", handleSlideChange);
      };
    }
  }, []);
  return (
    <>
      <section id="mostpopular" className="mostPopular">
        <div className="container">
          <div className="row desk-view">
            <div className="col-md-12 d-flex align-items-start justify-content-between mp-margin">
              <h2>Lists</h2>
              <div className="swiper-nav">
                <div className="d-flex btn-gap">
                  <button className="btn btn-swiper mpPrev">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button className="btn btn-swiper mpNext">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mob-view">
            <div className="col-md-12 d-flex align-items-start justify-content-between mb-2">
              <h2>Lists</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 desk-view">
              <div className="swiper swiper-initialized swiper-horizontal most-popular-swiper swiper-backface-hidden">
                <div className="swiper-wrapper">
                  <div
                    className="swiper-slide swiper-slide-active"
                    data-swiper-slide-index={0}
                    style={{ width: 362, marginRight: 15 }}
                  >
                    <div className="sliderItem">
                      <a
                        className="items"
                        href="/features/insight/the-best-upcoming-concerts-in-india-2025-26-from-linkin-park-and-post-malone-to-travis-scott"
                      >
                        <h3 className="sequence">01{/* */}.</h3>
                        <p className="ff1 mpp">
                          The Best Upcoming Concerts In India 2025-26: From
                          Linkin Park and Post Malone to Travis Scott
                        </p>
                      </a>
                    </div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-next"
                    data-swiper-slide-index={1}
                    style={{ width: 362, marginRight: 15 }}
                  >
                    <div className="sliderItem">
                      <a
                        className="items"
                        href="/features/insight/ganesh-visarjan-2025-top-5-ganpati-scenes-in-bollywood-don-agneepath-bajirao-mastani-vaastav"
                      >
                        <h3 className="sequence">02{/* */}.</h3>
                        <p className="ff1 mpp">
                          Ganesh Visarjan 2025: From 'Don' to 'Sarkar 3,' Here
                          Are Bollywood's Most Memorable Ganpati Festival
                          Moments
                        </p>
                      </a>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    data-swiper-slide-index={2}
                    style={{ width: 362, marginRight: 15 }}
                  >
                    <div className="sliderItem">
                      <a
                        className="items"
                        href="/features/insight/ahead-of-sitaare-zameen-par-aamir-khans-best-performances-ranked"
                      >
                        <h3 className="sequence">03{/* */}.</h3>
                        <p className="ff1 mpp">
                          Ahead of 'Sitaare Zameen Par,' Aamir Khan's Best
                          Performances, Ranked
                        </p>
                      </a>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    data-swiper-slide-index={3}
                    style={{ width: 362, marginRight: 15 }}
                  >
                    <div className="sliderItem">
                      <a
                        className="items"
                        href="/features/insight/ahead-of-kuberaa-every-sekhar-kammula-film-ranked-from-sai-pallavis-fidaa-to-chaitanya-akkinenis-love-story"
                      >
                        <h3 className="sequence">04{/* */}.</h3>
                        <p className="ff1 mpp">
                          Ahead of 'Kuberaa', Every Sekhar Kammula Film, Ranked
                        </p>
                      </a>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    data-swiper-slide-index={4}
                    style={{ width: 362, marginRight: 15 }}
                  >
                    <div className="sliderItem">
                      <a
                        className="items"
                        href="/features/insight/every-tom-cruise-mission-impossible-movie-ranked"
                      >
                        <h3 className="sequence">05{/* */}.</h3>
                        <p className="ff1 mpp">
                          Every 'Mission: Impossible' Movie, Ranked
                        </p>
                      </a>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    data-swiper-slide-index={5}
                    style={{ width: 362, marginRight: 15 }}
                  >
                    <div className="sliderItem">
                      <a
                        className="items"
                        href="/lists/all/the-10-films-were-looking-forward-to-at-cannes-2025"
                      >
                        <h3 className="sequence">06{/* */}.</h3>
                        <p className="ff1 mpp">
                          Cannes 2025: 10 Films We’re Looking Forward To
                        </p>
                      </a>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    data-swiper-slide-index={6}
                    style={{ width: 362, marginRight: 15 }}
                  >
                    <div className="sliderItem">
                      <a
                        className="items"
                        href="/lists/all/10-best-bollywood-meet-cutes-of-the-last-25-years"
                      >
                        <h3 className="sequence">07{/* */}.</h3>
                        <p className="ff1 mpp">
                          From 'Main Hoon Na' to 'Dil Chahta Hai': 10 Memorable
                          Bollywood Meet-Cutes From the Last 25 Years
                        </p>
                      </a>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    data-swiper-slide-index={7}
                    style={{ width: 362, marginRight: 15 }}
                  >
                    <div className="sliderItem">
                      <a
                        className="items"
                        href="/lists/all/berlinale-2025-top-10-must-see-films-at-this-years-festival"
                      >
                        <h3 className="sequence">08{/* */}.</h3>
                        <p className="ff1 mpp">
                          Berlinale 2025: The 10 Most Anticipated Films at This
                          Year’s Festival
                        </p>
                      </a>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    data-swiper-slide-index={8}
                    style={{ width: 362, marginRight: 15 }}
                  >
                    <div className="sliderItem">
                      <a
                        className="items"
                        href="/features/insight/the-5-best-performances-of-varun-dhawan-ranked"
                      >
                        <h3 className="sequence">09{/* */}.</h3>
                        <p className="ff1 mpp">
                          The 5 Best Performances of Varun Dhawan, Ranked
                        </p>
                      </a>
                    </div>
                  </div>
                  <div
                    className="swiper-slide"
                    data-swiper-slide-index={9}
                    style={{ width: 362, marginRight: 15 }}
                  >
                    <div className="sliderItem">
                      <a
                        className="items"
                        href="/lists/all/ahead-of-rifle-club-every-aashiq-abu-film-ranked"
                      >
                        <h3 className="sequence">10{/* */}.</h3>
                        <p className="ff1 mpp">
                          Ahead of 'Rifle Club,' Every Aashiq Abu Film, Ranked
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                  <span className="swiper-pagination-bullet swiper-pagination-bullet-active expanded" />
                  <span className="swiper-pagination-bullet" />
                  <span className="swiper-pagination-bullet" />
                  <span className="swiper-pagination-bullet" />
                  <span className="swiper-pagination-bullet" />
                  <span className="swiper-pagination-bullet" />
                  <span className="swiper-pagination-bullet" />
                  <span className="swiper-pagination-bullet" />
                  <span className="swiper-pagination-bullet" />
                  <span className="swiper-pagination-bullet" />
                </div>
              </div>
            </div>
            <div className="col-md-12 mob-view">
              <div className="sliderItem">
                <a
                  className="items"
                  href="/features/insight/the-best-upcoming-concerts-in-india-2025-26-from-linkin-park-and-post-malone-to-travis-scott"
                >
                  <div className="items" style={{ display: "flex" }}>
                    <h3 className="sequence">01{/* */}.</h3>
                    <p className="ff1 mpp">
                      The Best Upcoming Concerts In India 2025-26: From Linkin
                      Park and Post Malone to Travis Scott
                    </p>
                  </div>
                </a>
                <a
                  className="items"
                  href="/features/insight/ganesh-visarjan-2025-top-5-ganpati-scenes-in-bollywood-don-agneepath-bajirao-mastani-vaastav"
                >
                  <div className="items" style={{ display: "flex" }}>
                    <h3 className="sequence">02{/* */}.</h3>
                    <p className="ff1 mpp">
                      Ganesh Visarjan 2025: From 'Don' to 'Sarkar 3,' Here Are
                      Bollywood's Most Memorable Ganpati Festival Moments
                    </p>
                  </div>
                </a>
                <a
                  className="items"
                  href="/features/insight/ahead-of-sitaare-zameen-par-aamir-khans-best-performances-ranked"
                >
                  <div className="items" style={{ display: "flex" }}>
                    <h3 className="sequence">03{/* */}.</h3>
                    <p className="ff1 mpp">
                      Ahead of 'Sitaare Zameen Par,' Aamir Khan's Best
                      Performances, Ranked
                    </p>
                  </div>
                </a>
                <a
                  className="items"
                  href="/features/insight/ahead-of-kuberaa-every-sekhar-kammula-film-ranked-from-sai-pallavis-fidaa-to-chaitanya-akkinenis-love-story"
                >
                  <div className="items" style={{ display: "flex" }}>
                    <h3 className="sequence">04{/* */}.</h3>
                    <p className="ff1 mpp">
                      Ahead of 'Kuberaa', Every Sekhar Kammula Film, Ranked
                    </p>
                  </div>
                </a>
                <a
                  className="items"
                  href="/features/insight/every-tom-cruise-mission-impossible-movie-ranked"
                >
                  <div className="items" style={{ display: "flex" }}>
                    <h3 className="sequence">05{/* */}.</h3>
                    <p className="ff1 mpp">
                      Every 'Mission: Impossible' Movie, Ranked
                    </p>
                  </div>
                </a>
                <a
                  className="items"
                  href="/lists/all/the-10-films-were-looking-forward-to-at-cannes-2025"
                >
                  <div className="items" style={{ display: "flex" }}>
                    <h3 className="sequence">06{/* */}.</h3>
                    <p className="ff1 mpp">
                      Cannes 2025: 10 Films We’re Looking Forward To
                    </p>
                  </div>
                </a>
                <a
                  className="items"
                  href="/lists/all/10-best-bollywood-meet-cutes-of-the-last-25-years"
                >
                  <div className="items" style={{ display: "flex" }}>
                    <h3 className="sequence">07{/* */}.</h3>
                    <p className="ff1 mpp">
                      From 'Main Hoon Na' to 'Dil Chahta Hai': 10 Memorable
                      Bollywood Meet-Cutes From the Last 25 Years
                    </p>
                  </div>
                </a>
                <a
                  className="items"
                  href="/lists/all/berlinale-2025-top-10-must-see-films-at-this-years-festival"
                >
                  <div className="items" style={{ display: "flex" }}>
                    <h3 className="sequence">08{/* */}.</h3>
                    <p className="ff1 mpp">
                      Berlinale 2025: The 10 Most Anticipated Films at This
                      Year’s Festival
                    </p>
                  </div>
                </a>
                <a
                  className="items"
                  href="/features/insight/the-5-best-performances-of-varun-dhawan-ranked"
                >
                  <div className="items" style={{ display: "flex" }}>
                    <h3 className="sequence">09{/* */}.</h3>
                    <p className="ff1 mpp">
                      The 5 Best Performances of Varun Dhawan, Ranked
                    </p>
                  </div>
                </a>
                <a
                  className="items"
                  href="/lists/all/ahead-of-rifle-club-every-aashiq-abu-film-ranked"
                >
                  <div className="items" style={{ display: "flex" }}>
                    <h3 className="sequence">10{/* */}.</h3>
                    <p className="ff1 mpp">
                      Ahead of 'Rifle Club,' Every Aashiq Abu Film, Ranked
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MostPopular;
