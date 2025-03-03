import React, { useEffect, useRef } from 'react';
import './Landing.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import NYC from "../assets/NYC.jpg"
import CLF from "../assets/CLF.jpg"
import LA from "../assets/LA.mp4"
import BG from "../assets/BG Vid.mp4"

const Landing = () => {
    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(e => {
                console.log("Video autoplay was prevented:", e);
            });
        }
    }, []);
    return (
        <div className='container'>
            <video 
                ref={videoRef}
                autoPlay 
                loop 
                muted 
                playsInline
                className="background-video"
            >
                <source src={BG} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h1>Welcome to America's Scenic Landscapes</h1>
            <div className="america-info">
                <p>From coast to coast, America offers breathtaking landscapes, vibrant cities, and cultural diversity like nowhere else. Explore the land of opportunity where innovation meets tradition.</p>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <video autoPlay loop muted playsInline>
                        <source src={LA} type="video/mp4"/>
                    </video>
                    <div className="slide-caption">
                        <h2>Los Angeles</h2>
                        <p>The City of Angels - where dreams come to life under the California sun.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={NYC} alt="New York City" />
                    <div className="slide-caption">
                        <h2>New York City</h2>
                        <p>The Big Apple - a metropolis that never sleeps, where possibilities are endless.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={CLF} alt="City Life" />
                    <div className="slide-caption">
                        <h2>American City Life</h2>
                        <p>Experience the energy and diversity that defines America's urban landscape.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Landing;