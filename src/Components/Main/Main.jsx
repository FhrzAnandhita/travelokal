import React, {useEffect} from "react";
import './main.css';
import img from '../../assets/masjidagung.jpg';
import img2 from '../../assets/lawangsewu.jpg';
import img3 from '../../assets/dusunsemilir.jpg';
import img4 from '../../assets/borobudur.jpg';
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
    {
        id: 1,
        imgsrc: img,
        destTitle: 'Masjid Agung Jawa Tengah',
        location: 'Semaranng',
        grade: 'Family, Couple, Realigius',
        fees: 'Rp.500.000',
        description: 'Masjid Agung Jawa Tengah, Semarang'
    },
    
    {
        id: 2,
        imgsrc: img2,
        destTitle: 'Lawang Sewu',
        location: 'Semarang',
        grade: 'Family, Couple',
        fees: 'Rp.500.000',
        description: 'Lawang Sewu Jawa Tengah, Semarang'
    },

    {
        id: 3,
        imgsrc: img3,
        destTitle: 'Dusun Semilir',
        location: 'Kabupaten Semarang',
        grade: 'Family, Couple',
        fees: 'Rp.500.000',
        description: 'Dusun Semilir, Kabupaten Semarang'
    },

    {
        id: 4,
        imgsrc: img4,
        destTitle: 'Candi Borobudur',
        location: 'Magelang',
        grade: 'Family, Couple',
        fees: 'Rp.500.000',
        description: 'Candi Borobudur, Magelang'
    },
];

const Main = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return (
        <section className="main">
            <div className="secTitle">
                <h3 data-aos="fade-right"
                className="title">Yang Sering Dikunjungi</h3>
            </div>

            <div className="secContent grid">
                {Data.map(({ id, imgsrc, destTitle, location, grade, fees, description }) => (
                    <div key={id} 
                    data-aos="fade-up"
                    className="singleDestination">
                        <div className="imageDiv">
                            <img src={imgsrc} alt={destTitle} />
                        </div>

                        <div className="cardInfo">
                            <h4 className="destTitle">{destTitle}</h4>
                            <span className="continent flex">
                                <HiOutlineLocationMarker className="icon" />
                                <span className="name">{location}</span>
                            </span>

                            <div className="fees flex">
                                <div className="grade">
                                    <span>{grade}<small>+1</small></span>
                                </div>

                                <div className="price">
                                    <h5>{fees}</h5>
                                </div>
                            </div>

                            <div className="desc">
                                <p>{description}</p>
                            </div>

                            <button className="btn flex">
                                Details<HiOutlineClipboardCheck className="icon" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Main;
