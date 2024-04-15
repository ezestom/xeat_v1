// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

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
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(true);
		
	};
	const handleClose = () => {
		setIsOpen(false);
	};

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
				className="mySwiper bg-black/10  md:h-[80vh]">
				{
					// array of objects
					[
						{
							href: href1,
							img: img1,
							title: title1,
							description: description1,
						},
						{
							href: href2,
							img: img2,
							title: title2,
							description: description2,
						},
						{
							href: href3,
							img: img3,
							title: title3,
							description: description3,
						},
						{
							href: href4,
							img: img4,
							title: title4,
							description: description4,
						},
					].map((item, index) => {
						return (
							<SwiperSlide key={index}>
								<button
									onClick={handleClick}
									className="transition my-5 hover:brightness-125"
									id="link-burger">
									<img
										src={item?.img}
										alt={`image of ${item?.img}`}
									/>
									<div className="text">
										<h1 className="text-xl md:text-2xl font-bold">
											{item?.title}
										</h1>
										<p className="text-base lowercase pt-2">
											{item?.description}
										</p>
									</div>
									{isOpen ?? (
										<dialog open={isOpen}>
											<button onClick={handleClose}>
												Close
											</button>
											<p>{item?.description}</p>
										</dialog>
									)}
								</button>
							</SwiperSlide>
						);
					})
				}
			</Swiper>
		</>
	);
}
