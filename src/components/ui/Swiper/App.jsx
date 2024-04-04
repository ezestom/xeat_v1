import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./App.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export function App({
	img1,
	title1,
	description1,
	img2,
	title2,
	description2,
	img3,
	title3,
	description3,
	img4,
	title4,
	description4,
}) {
	return (
		<>
			<Swiper
				slidesPerView={3}
				spaceBetween={1}
				freeMode={true}
				pagination={{
					clickable: true,
				}}
				modules={[FreeMode, Pagination]}
				className="mySwiper">
				<SwiperSlide>
					<a href="#">
						<img src={img1} alt={`image of ${img1}`} />
						<h1>{title1}</h1>
						<p>{description1}</p>
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href="#">
						<img src={img2} alt={`image of ${img2}`} />
						<h1>{title2}</h1>
						<p>{description2}</p>
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href="#">
						<img src={img3} alt={`image of ${img3}`} />
						<h1>{title3}</h1>
						<p>{description3}</p>
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href="#">
						<img src={img4} alt={`image of ${img4}`} />
						<h1>{title4}</h1>
						<p>{description4}</p>
					</a>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
