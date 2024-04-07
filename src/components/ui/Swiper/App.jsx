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
	href1,
	img1,
	title1,
	description1,
	href2,
	img2,
	title2,
	description2,
	href3,
	img3,
	title3,
	description3,
	href4,
	img4,
	title4,
	description4,
}) {
	return (
		<>
			<Swiper
				// slidesPerView={3}
				spaceBetween={1}
				freeMode={true}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					640: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 2,
					},
					1024: {
						slidesPerView: 3,
					},
				}}
				modules={[FreeMode, Pagination]}
				className="mySwiper">
				<SwiperSlide>
					<a href={href1}>
						<img src={img1} alt={`image of ${img1}`} />
						<div className="text">
							<h1 className="text-2xl md:text-3xl font-bold">
								{title1}
							</h1>
							<p className="text-xl pt-2">{description1}</p>
						</div>
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href={href2}>
						<img src={img2} alt={`image of ${img2}`} />
						<div className="text">
							<h1 className="text-2xl md:text-3xl font-bold">
								{title2}
							</h1>
							<p className="text-xl pt-2">{description2}</p>
						</div>
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href={href3}>
						<img src={img3} alt={`image of ${img3}`} />
						<div className="text">
							<h1 className="text-2xl md:text-3xl font-bold">
								{title3}
							</h1>
							<p className="text-xl pt-2 ">{description3}</p>
						</div>
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href={href4}>
						<img src={img4} alt={`image of ${img4}`} />
						<div className="text">
							<h1 className="text-2xl md:text-3xl font-bold">
								{title4}
							</h1>
							<p className="text-xl pt-2 ">{description4}</p>
						</div>
					</a>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
