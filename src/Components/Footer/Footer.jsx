import React from "react";
import './footer.css';
import video2 from '../../assets/video.mp4';
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";

const Footer = () => {
    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small>Keep in touch</small>
                        <h2>Travel with your family and your girlfriend</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input type="text" placeholder="Enter Email" />
                        <button className="btn flex" type="submit">
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
