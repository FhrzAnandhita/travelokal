/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './footer.css';
import video from '../../assets/video.mp4';
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>Keep in touch</small>
                        <h2>Travel with your family and your girlfriend</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" 
                        type="text" placeholder="Enter Email" />
                        <button data-aos="fade-up"
                        className="btn flex" type="submit">
                            Send <FiSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdOutlineTravelExplore className="icon" />
                                Travelokal
                            </a>
                        </div>

                        <div data-aos="fade-up"
                        className="footerParagraph">
                            Paragraf 1......... Paragraf 2......... Paragraf 3......... Paragraf 4......... Paragraf 5.........
                        </div>

                        <div data-aos="fade-up" className="footerSocials">
                            <AiOutlineTwitter className="icon" />
                            <AiOutlineInstagram className="icon" />
                            <AiOutlineYoutube className="icon" />
                            <FaTripadvisor className="icon" />
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        {/* Group 1 */}
                        <div data-aos="fade-up" data-aos-duration="4000" 
                        className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Asuransi
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Agensi
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Turis
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Pembayaran
                            </li>
                        </div>

                        {/* Group 2 */}
                        <div data-aos="fade-up" data-aos-duration="4000"
                        className="linkGroup">
                            <span className="groupTitle">
                                Kerja Sama
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Booking Hotel
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Sewa Mobil
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Tourgate
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Travel Bus
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                TripAdvisor
                            </li>
                        </div>

                        {/* Group 3 */}
                        <div data-aos="fade-up" data-aos-duration="5000"
                        className="linkGroup">
                            <span className="groupTitle">
                                Favorite Location
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Bali
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                NTB
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Bandung
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Jakarta
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Jogja
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>
                            Copyright © 2024. All Rights Reserved
                        </small>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
