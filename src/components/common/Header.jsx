import React, { useEffect, useState } from "react";
import { menus } from "@/helpers/MenuData";

import { IoSearchOutline } from "react-icons/io5";
import {
  FaChevronLeft,
  FaChevronRight,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagramSquare,
} from "react-icons/fa";


import { FiFacebook } from "react-icons/fi";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { RiYoutubeLine } from "react-icons/ri";
import { PiYoutubeLogo } from "react-icons/pi";
import { GrFacebookOption } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useRouter } from "next/router";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Header = () => {
  const [hover, setHover] = useState(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActve] = useState(false);
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const [mobmenu, setMobMenu] = useState(null);
  const [menuElement, setMenuElement] = useState(0);
  const [touchNav, setTouchNav] = useState(false);
  const [showNavbar2, setShowNavbar2] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    if (router.pathname !== "/") {
      gsap.to(".Header_Wrapper", {
        height: window.innerWidth >= 901 ? "70px" : "60px",
        duration: 0.2,
        justifyContent: "center",
      });
      gsap.to(".Header_inner", {
        height: window.innerWidth >= 901 ? "70px" : "60px",
        duration: 0.2,
      });
      gsap.to(".nav-items", {
        alignItems: "center",
        paddingBottom: 0,
        // duration: 0.3,
      });
      gsap.to(document.querySelector(".nav-items"), {
        duration: 0.1, // Add duration or customize it as needed
        onStart: () => {
          const nav = document.querySelector(".nav-items");
          if (nav) {
            // nav.style.setProperty("margin-bottom", "0px", "important"); // Apply margin-bottom with !important
            nav.style.setProperty("z-index", "9", "important"); // Apply z-index with !important
          }
        },
      });
      gsap.to(".socialLinks_inner", {
        duration: 0,
        display: "none",
      });
      gsap.to(".socialLinklogoAnimate", {
        duration: 0,
        display: "block",
        width: "160px",
        opacity: 1,
        pointerEvents: "all",
        // scale: 1,
      });
      gsap.to(".Links_logoAnimate", {
        display: window.innerWidth >= 901 ? "none" : "block",
        duration: 0,
      });

      gsap.to(document.querySelector(".nav"), {
        duration: 0.1, // Add duration or customize it as needed
        onStart: () => {
          const nav = document.querySelector(".nav");
          if (nav) {
            nav.style.setProperty("height", "100%"); // Apply margin-bottom with !important
            nav.style.setProperty("z-index", "9", "important"); // Apply z-index with !important
          }
        },
      });
    }
  }, [router.pathname]);
  const handleNavigate = (link) => {
    setMobMenu(null);
    setActve(false);
    setExpanded(false);
    // router.push(link);
  };
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Header_Wrapper",
        start: "top top", // triggers after 100px scroll
        end: "+=50",
        toggleActions: "play none none reverse", // You can adjust this
      },
    });

    tl.to(
      ".Header_Wrapper,.Header_inner",
      {
        height: window.innerWidth >= 900 ? "70px" : "60px",
        // justifyContent: "center",
        ease: "power1.out",
      },
      "a"
    )
      .to(
        ".nav-items",
        {
          // ease:"power1.out",
          paddingBottom: "0rem",
        },
        "a"
      )
      .to(
        ".Header_Wrapper .nav", // replace with actual inner element
        {
          // y: 10, // adjust value for smooth center shift
          ease: "power1.out",
          height: "70px",
        },
        "a"
      )
      .to(
        ".Links_logoAnimate",
        {
          display: window.innerWidth >= 900 ? "none" : "flex",
          opacity: window.innerWidth >= 900 ? "0" : "1",
        },
        "a"
      )
      // .to(
      //   ".Header_inner",
      //   {
      //     height: "70px",
      //     ease: "power1.out",
      //   },
      //   "a"
      // )
      .to(
        ".socialLinks_inner",
        {
          opacity: 0,
          ease: "power1.out",
        },
        "a"
      )
      .to(
        ".socialLinklogoAnimate",
        {
          opacity: 1,
          pointerEvents: "all",
          ease: "power1.out",
        },
        "a"
      );
  });

  return (
    <>
    
      <div className="tn-nav-rel">
        <div
          className="nav-parent"
          style={{ transform: `translateY(${active ? "0%" : "-100%"})` }}
        >
          <div
            className="mob-menu"
            style={{ marginLeft: `${mobmenu != null ? "-50%" : "0%"}` }}
          >
            {menus.map((item, i) => (
              <>
                {item.submenus.length === 0 ? (
                  <Link
                    href={item.link}
                    className={`mob-item ${mobmenu == i ? "mob-open-0" : ""}`}
                    key={`mobile-menu-item-${i}`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <div
                      className={`mob-item ${mobmenu == i ? "mob-open-0" : ""}`}
                      key={i}
                      onClick={() => setMobMenu(i)}
                    >
                      {item.name}
                      <FaChevronRight />
                    </div>
                  </>
                )}
              </>
            ))}
            <div className="mbf">
              <div className="mob-follows">Follow us</div>
              <div className="mf-icons">
                <Link
                  href={"https://facebook.com/hollywoodreporterindia"}
                  target="_blank"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  style={{ color: "black" }}
                  href={"https://instagram.com/hollywoodreporterindia"}
                  target="_blank"
                >
                  <PiInstagramLogoFill />
                </Link>
                <Link
                  style={{ color: "black" }}
                  href={"https://twitter.com/thrindia_"}
                  target="_blank"
                >
                  <FaTwitter />
                </Link>
                <Link
                  style={{ color: "black" }}
                  href={"https://www.youtube.com/@HollywoodReporterIndia"}
                  target="_blank"
                >
                  <FaYoutube />
                </Link>
              </div>
            </div>
            {/* <div className="mbf-thr-wrapped-container">
                      <Link
                        target="_blank"
                        className="bo-right-wrapped"
                        href="/wrapped-2024"
                      >
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          src="/wrapped/vid.mp4"
                        ></video>
                        <div className="bo-right-wrapped-text">
                          <h2>THR India Wrapped 2024</h2>
                        </div>
                      </Link>
                      <Link
                        className="bo-right-click-text-link"
                        href="/wrapped-2024"
                        target="_blank"
                      >
                        <h6 className="bo-right-click-text">"Click" to open</h6>
                      </Link>
                    </div> */}
          
          </div>
         
        </div>
       
      </div>
      <div className="Header_Wrapper">
        <div className="Header_inner">
          <div className="socialLinks_Wrapper">
            <div className="socialLinks_inner abo">
              <div
                className="social-div-main"
                onMouseEnter={() => {
                  setHover(0);
                }}
                onMouseLeave={() => {
                  setHover(null);
                }}
              >
                {hover == 0 ? (
                  <Link
                    href={"https://facebook.com/hollywoodreporterindia"}
                    target="_blank"
                    className="social_elm"
                  >
                    <FaFacebookF />
                  </Link>
                ) : (
                  <Link
                    href={"https://facebook.com/hollywoodreporterindia"}
                    target="_blank"
                    className="social_elm"
                  >
                    <FiFacebook />
                  </Link>
                )}
              </div>
              <div
                className="social-div-main"
                onMouseEnter={() => {
                  setHover(1);
                }}
                onMouseLeave={() => {
                  setHover(null);
                }}
              >
                {hover == 1 ? (
                  <Link
                    href={"https://instagram.com/hollywoodreporterindia"}
                    target="_blank"
                    className="social_elm"
                  >
                    <RiInstagramFill />
                  </Link>
                ) : (
                  <Link
                    href={"https://instagram.com/hollywoodreporterindia"}
                    target="_blank"
                    className="social_elm"
                  >
                    <FaInstagram />
                  </Link>
                )}
              </div>

              <div
                className="social-div-main"
                onMouseEnter={() => {
                  setHover(3);
                }}
                onMouseLeave={() => {
                  setHover(null);
                }}
                style={{ position: "relative" }}
              >
                <Link
                  href={"https://twitter.com/thrindia_"}
                  target="_blank"
                  className={
                    hover == 3 ? "social_elm" : "social_elm visihidden"
                  }
                  style={{ position: "absolute", left: "-7px" }}
                >
                  <img src="/x.png" className="xsvg" alt="X Logo"></img>
                </Link>

                <Link
                  href={"https://twitter.com/thrindia_"}
                  target="_blank"
                  className={
                    hover == 3 ? "social_elm visihidden" : "social_elm"
                  }
                >
                  <BsTwitterX style={{ fontSize: "18px" }} />
                </Link>
              </div>
              <div
                className="social-div-main"
                onMouseEnter={() => {
                  setHover(4);
                }}
                onMouseLeave={() => {
                  setHover(null);
                }}
              >
                {hover == 4 ? (
                  <Link
                    href={"https://www.youtube.com/@HollywoodReporterIndia"}
                    target="_blank"
                    className="social_elm"
                  >
                    <FaYoutube />
                  </Link>
                ) : (
                  <Link
                    href={"https://www.youtube.com/@HollywoodReporterIndia"}
                    target="_blank"
                    className="social_elm"
                  >
                    <PiYoutubeLogo />
                  </Link>
                )}
              </div>
            </div>
            <Link className="logoCntr socialLinklogoAnimate abo" href={"/"}>
              <Image
                width={1000}
                height={1000}
                src="/Thr_logo_updated.png"
                alt="The Hollywood Reporter India Logo"
                className=""
              />
            </Link>
          </div>
          <div className="Links_logoWrapper">
            <Link className="logoCntr Links_logoAnimate" href={"/"}>
              <Image
                width={1000}
                height={1000}
                src="/Thr_logo_updated.png"
                alt="The Hollywood Reporter India Logo"
                className=""
              />
            </Link>
          </div>
          <div className="search_Wrapper">
            <div className="searchdiv" onClick={() => setOpen(true)}>
              <div className="search_icon">
                <IoSearchOutline />
              </div>
              <div id="search">Search</div>
            </div>
          </div>
          <div className="tn-ham">
            <div className="three col">
              <div
                className={`hamburger ${active ? "is-active" : null}`}
                onClick={() => {
                  setActve(!active);
                  setMobMenu(null);
                }}
                id="hamburger-1"
              >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="nav nav-menu-top t3">
          {menus.map((item, i) => (
            <>
              {item.submenus.length === 0 ? (
                <>
                  <Link
                    href={item.link}
                    key={`nev-menu-item-${i}`}
                    className="nav-items"
                  >
                    {item.name}
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href={item.submenus[0].link}
                    key={i}
                    className="nav-items"
                    onMouseOver={() => setMenuElement(i)}
                    onMouseEnter={() => setExpanded(true)}
                    onMouseLeave={() => setExpanded(false)}
                  >
                    {item.name}
                  </Link>
                </>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
