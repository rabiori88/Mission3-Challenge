import React, { useEffect, useState } from "react";
import axios from "../api/axios";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import "./Row.css";

export default function Row({ isLargeRow, title, id, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    console.log("request", request);
    setMovies(request.data.results);
  };

  return (
    <Swiper spaceBetween={0} slidesPerView={6} wrapperTag="ul">
      <section className="row">
        <h2>{title}</h2>
        <div className="slider">
          <div className="slider__arrow-left">
            <span
              className="arrow"
              onClick={() => {
                document.getElementById(id).scrollLeft -=
                  window.innerWidth - 80;
              }}
            >
              {"<"}
            </span>
          </div>
          <div id={id} className="row__posters">
            {movies.map((movie) => (
              <SwiperSlide tag="li" key={`slider-${movie.id}`}>
                <img
                  key={movie.id}
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  src={`https://image.tmdb.org/t/p/original/${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  } `}
                  alt={movie.name}
                />
              </SwiperSlide>
            ))}
          </div>
          <div className="slider__arrow-right">
            <span
              className="arrow"
              onClick={() => {
                document.getElementById(id).scrollLeft +=
                  window.innerWidth - 80;
              }}
            >
              {">"}
            </span>
          </div>
        </div>
      </section>
    </Swiper>
  );
}
