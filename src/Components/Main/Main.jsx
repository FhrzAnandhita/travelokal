import React from "react";
import './main.css';
import img from '../../assets/img (5).jpg';
import img2 from '../../assets/img (7).jpg';
import img3 from '../../assets/img (3).jpg';
import img4 from '../../assets/img (4).jpg';
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from "react-icons/hi";

const Data = [
    {
        id: 1,
        imgsrc: img,
        destTitle: 'Karimun Jawa',
        location: 'Location 1',
        grade: 'Family, Couple',
        fees: 'Rp.1.500.000',
        description: 'Desc 1'
    },
    
    {
        id: 2,
        imgsrc: img2,
        destTitle: 'Title2',
        location: 'Location 2',
        grade: 'Family, Couple',
        fees: 'Rp.1.500.000',
        description: 'Desc 2'
    },

    {
        id: 3,
        imgsrc: img3,
        destTitle: 'Title3',
        location: 'Location 3',
        grade: 'Family, Couple',
        fees: 'Rp.1.500.000',
        description: 'Desc 3'
    },

    {
        id: 4,
        imgsrc: img4,
        destTitle: 'Title4',
        location: 'Location 4',
        grade: 'Family, Couple',
        fees: 'Rp.1.500.000',
        description: 'Desc 4'
    },
];

const Main = () => {
    return (
        <section className="main">
            <div className="secTitle">
                <h3 className="title">Yang Sering Dikunjungi</h3>
            </div>

            <div className="secContent grid">
                {Data.map(({ id, imgsrc, destTitle, location, grade, fees, description }) => (
                    <div key={id} className="singleDestination">
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
