import React, {useEffect} from "react";
import './home.css';
import video2 from '../../assets/video.mp4';
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])


    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video2} muted autoPlay loop type="video/mp4" />

            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos="fade-up"
                    className="smallText">
                        Ayo berlibur
                    </span>
                    <h1 data-aos="fade-up"
                    className="homeTitle">
                        cari tempat liburanmu...
                    </h1>
                </div>

                <div data-aos="fade-up" 
                className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">
                            cari tempat yang km kunjungi:
                        </label>

                        <div className="input flex">
                            <input type="text" placeholder="Enter name here.." />
                            <GrLocation className="icon" />
                        </div>
                    </div>

                    <div className="Date">
                        <label htmlFor="date">
                            pilih tanggal:
                        </label>

                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="labelTotal flex">
                            <label htmlFor="price">Max Price:
                            <h2 className="total">10.000.000</h2>
                            </label>
                        </div>
                        <div className="input flex">
                            <input type="range" max="10000000" min="1000000" />
                        </div>
                    </div>
                    
                    <div className="searchOptions flex">
                        <HiFilter className="icon" />
                        <span>MORE FILTERS</span>
                    </div>
                </div>

                <div className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className="icon" />
                        <AiOutlineInstagram className="icon" />
                        <FaTripadvisor className="icon" />
                    </div>

                    <div className="leftIcons">
                        <BsListTask className="icon"/>
                        <TbApps className="icon"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
