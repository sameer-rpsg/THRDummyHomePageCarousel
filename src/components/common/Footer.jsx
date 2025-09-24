import React from "react";
import Link from "next/link";
import Image from "next/image";
import Cookies from "@/assets/images/cookies.png";
import Dropdown from "react-bootstrap/Dropdown";
import Artboard from "../../../public/Artboard-14.jpg";
import Saiyaara from "../../../public/Saiyaara.jpeg"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="container ft-pd pb-0">
          <div className="row">
            <div className="col-md-4">
              <div className="ft-img">
                <Link
                  href={"https://shop.yudirect.biz/THRIndia/Subscribe.php"}
                  target="_blank"
                >
                  <Image
                    src={Saiyaara}
                    fill
                    alt="THR India Cover Featuring Saiyaara's Pair Ahaan Panday and Aneet Padda"
                  />
                  <button className="btn btn-subscribe">SUBSCRIBE</button>
                </Link>
              </div>
            </div>
            <div className="col-md-8">
              <div className="nav-sec">
                <div className="nav-item-sec">
                  <h4 className="nav-item-title">
                    THE HOLLYWOOD REPORTER INDIA
                  </h4>
                  <ul className="nav flex-column">
                    {/* <li className="nav-item">
                      <Link className="nav-link" href="/">
                        ABOUT US
                      </Link>
                    </li> */}
                    {/* <li className="nav-item">
                      <Link className="nav-link" href="/">
                        MEET THE TEAM
                      </Link>
                    </li> */}
                    <li className="nav-item">
                      <Link className="nav-link" href="/work-with-us">
                        WORK WITH US
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/about-us">
                        ABOUT US
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/contact-us">
                        CONTACT US
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="nav-item-sec">
                  <h4 className="nav-item-title">SUPPORT</h4>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link" href="/privacy-policy">
                        PRIVACY POLICY
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/terms-of-use">
                        TERMS OF USE
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/disclaimer">
                        DISCLAIMER
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="nav-item-sec">
                  <h4 className="nav-item-title">FOLLOW US</h4>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        href="https://facebook.com/hollywoodreporterindia"
                        target="_blank"
                      >
                        <FaFacebookF style={{ marginRight: "10px" }} />
                        Facebook
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        href="https://instagram.com/hollywoodreporterindia"
                        target="_blank"
                      >
                        <FaInstagram style={{ marginRight: "10px" }} />
                        INSTAGRAM
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        href="https://www.youtube.com/@HollywoodReporterIndia"
                        target="_blank"
                      >
                        <FaYoutube style={{ marginRight: "10px" }} />
                        YOUTUBE
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        href="https://twitter.com/thrindia_"
                        target="_blank"
                      >
                        <FaXTwitter style={{ marginRight: "10px" }} />X
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-md-10">
              <ul className="ft-list">
                <li className="ft-item">
                  <Link className="ft-link" href="">
                    TERMS OF SERVICE
                  </Link>
                </li>
                <li className="ft-item">
                  <Link className="ft-link" href="">
                    NEWSLETTER
                  </Link>
                </li>
                <li className="ft-item">
                  <Link className="ft-link" href="">
                    SUBSCRIBE
                  </Link>
                </li>
                <li className="ft-item">
                  <Link className="ft-link" href="">
                    CONTACT
                  </Link>
                </li>
                <li className="ft-item">
                  <Link className="ft-link" href="">
                    CAREERS
                  </Link>
                </li>
                <li className="ft-item">
                  <Link className="ft-link" href="">
                    COOKIES SETTINGS
                    <div className="ft-icon">
                      <Image src={Cookies} alt="Toggle sample" fill />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <div className="ft-list justify-content-end">
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-autoclose-true"
                    variant="outline-ft"
                  >
                    <div className="ft-dropdown-icons">
                      <Image
                        fill
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADXklEQVR4nO2Yy08TURTGD5jgyvdCF/oPsDEQw0yca9y4UHcU/w010SiPSgpuRPEOND5mGhfGjQHaqnEPRgiakBgSpbAw0ErkoaILmSGBhZ85Q2NENLS9006J/ZKTTid3en7fveeeOylRRRVVpCwM0A7EqB4WXYRNcVg0DptmYZHrxfr1OCwaQIwu4D7V8TMUtHCXDsGmZtiUhk3IKyyag0VduEdHSg8epd2wqAcWreUNvtnIGmwy+TdLA2/ROVg0rwy+2cg87lNT8cBBVbCoAxb98B3e3mAkighV+wsfpZ2w6HlRwe0N8QwDVOMPfISqve5ROnhkV6LPl5WATb0lh7d/mZBq8BadDQzezkaMzhQGH6M93gEUtAGbPuIh7c3fAPfm4OGRLaXb+cE/oP2wabmMDDi4QwfyKZ/2wKHtTSbCucEDVY7jZFzXRTmF4zhpZtvSgOu6x4KGdf9ton5LA47jXFVN1N//Do2NCYRCCe+TIx6fUDawvLx8ORcDCZUkzc2DaG8fwvT0Z0xOLmBqagEzM18QDg+itXVIdQXiuZTQW5WZZ/hUagEjI2kkkxNIJlPeNZtpaxtEIpFSMTGei4FvhSbgUslkljA2Novu7lF0dr5EJDIM03zt3Uunl7wxCgaWcimhtUITcM1PTS16s97ZOYxQKImmpiSuXx/2VmNyctEbo1BCq0U3wJAMy9AMHwo98cywKTZXdAOu6371p4ReeeXT0TEMKddLKJP5UvwSchU2MbfKcPj3TZzyYnQ0421i7kL8vaib2HGcuEICD5K7ze9t9P37T2hpGUI4/EIFHo7jDORi4IpKEg5ulX8eZIozD46VlZVL2/1Vom5LA9lVmN62L3MsTRrXdFOgzKKNcpW4IfZppvheBtDgYBZmonykm4YsHwPGLcpXDdGG3bppzAYOL8WH4zeP78rbwPoqiFO6FD8CNSHFaVKRJg0zQPhuUhaoSjPFo9KXjvGY/PqTtzZSW6NJ42kJZz7JOclX8UpIo6P4e8KI+jbzf5MmTzRpppjzvWRMMaf1GCEqhbitZc+JVR/gV3mzFtwqVaT1agc1KZp105gpYMY/6qboaoiePEyBK0LVDdI4qpvivCZFvyaNN3wA6VK4HHzN93RT9PEYHlvUOq+oov9IPwEygLQ1QwqqZQAAAABJRU5ErkJggg=="
                      />
                    </div>
                    INDIA
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div> */}
        </div>
      </footer>
      <footer className="sub-footer">
        <div className="container ft-pd">
          <div className="row">
            <div className="col-md-12">
              <div className="ft-end-sec">
                <div className="md-view w-100">
                  <div className="d-flex align-items-center">
                    <div className="ft-end-img">
                      <img
                        src={
                          "https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fstatic.wikia.nocookie.net%2Flogopedia%2Fimages%2F2%2F20%2FRP-Sanjiv_Goenka_Group_logo.png&w=1920&q=75"
                        }
                        alt="RP - Sanjiv Goenka Group Logo"
                        fill
                      />
                    </div>
                    <div className="hr-mob"></div>
                    <div className="ft-end-logo">
                      <Image src="/rpsg-media-logo.png" alt="RPSG MEDIA" fill />
                    </div>
                  </div>
                </div>
                <div className="nmd-view">
                  <div className="ft-end-img">
                    <img
                      src={
                        "https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fstatic.wikia.nocookie.net%2Flogopedia%2Fimages%2F2%2F20%2FRP-Sanjiv_Goenka_Group_logo.png&w=1920&q=75"
                      }
                      alt="RP - Sanjiv Goenka Group Logo"
                      fill
                    />
                  </div>
                </div>
                <div className="vr"></div>
                <div className="ft-end-content">
                  <p>
                    The Hollywood Reporter India is published by RP - Sanjiv
                    Goenka Group under license from The Hollywood Reporter, LLC,
                    a subsidiary of Penske Media Corporation.
                  </p>
                </div>
                <div className="vr nmd-view"></div>
                <div className="ft-end-logo nmd-view">
                  <img src="/rpsg-media-logo.png" alt="RPSG MEDIA" fill />
                </div>
              </div>
            </div>
            {/* <div className="col-md-2 d-flex align-items-center justify-content-end">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-autoclose-true"
                  variant="outline-ft"
                >
                  <div className="ft-dropdown-icons">
                    <Image
                      fill
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADXklEQVR4nO2Yy08TURTGD5jgyvdCF/oPsDEQw0yca9y4UHcU/w010SiPSgpuRPEOND5mGhfGjQHaqnEPRgiakBgSpbAw0ErkoaILmSGBhZ85Q2NENLS9006J/ZKTTid3en7fveeeOylRRRVVpCwM0A7EqB4WXYRNcVg0DptmYZHrxfr1OCwaQIwu4D7V8TMUtHCXDsGmZtiUhk3IKyyag0VduEdHSg8epd2wqAcWreUNvtnIGmwy+TdLA2/ROVg0rwy+2cg87lNT8cBBVbCoAxb98B3e3mAkighV+wsfpZ2w6HlRwe0N8QwDVOMPfISqve5ROnhkV6LPl5WATb0lh7d/mZBq8BadDQzezkaMzhQGH6M93gEUtAGbPuIh7c3fAPfm4OGRLaXb+cE/oP2wabmMDDi4QwfyKZ/2wKHtTSbCucEDVY7jZFzXRTmF4zhpZtvSgOu6x4KGdf9ton5LA47jXFVN1N//Do2NCYRCCe+TIx6fUDawvLx8ORcDCZUkzc2DaG8fwvT0Z0xOLmBqagEzM18QDg+itXVIdQXiuZTQW5WZZ/hUagEjI2kkkxNIJlPeNZtpaxtEIpFSMTGei4FvhSbgUslkljA2Novu7lF0dr5EJDIM03zt3Uunl7wxCgaWcimhtUITcM1PTS16s97ZOYxQKImmpiSuXx/2VmNyctEbo1BCq0U3wJAMy9AMHwo98cywKTZXdAOu6371p4ReeeXT0TEMKddLKJP5UvwSchU2MbfKcPj3TZzyYnQ0421i7kL8vaib2HGcuEICD5K7ze9t9P37T2hpGUI4/EIFHo7jDORi4IpKEg5ulX8eZIozD46VlZVL2/1Vom5LA9lVmN62L3MsTRrXdFOgzKKNcpW4IfZppvheBtDgYBZmonykm4YsHwPGLcpXDdGG3bppzAYOL8WH4zeP78rbwPoqiFO6FD8CNSHFaVKRJg0zQPhuUhaoSjPFo9KXjvGY/PqTtzZSW6NJ42kJZz7JOclX8UpIo6P4e8KI+jbzf5MmTzRpppjzvWRMMaf1GCEqhbitZc+JVR/gV3mzFtwqVaT1agc1KZp105gpYMY/6qboaoiePEyBK0LVDdI4qpvivCZFvyaNN3wA6VK4HHzN93RT9PEYHlvUOq+oov9IPwEygLQ1QwqqZQAAAABJRU5ErkJggg=="
                    />
                  </div>
                  INDIA
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
