// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import close from "../../../icons/close.svg";

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
	price1,
	href2,
	img2,
	title2,
	price2,
	href3,
	img3,
	title3,
	price3,
	href4,
	img4,
	title4,
	price4,
}) {
	const [openSliderIndex, setOpenSliderIndex] = useState(null);

	const handleClick = (index) => {
		setOpenSliderIndex(index);
	};
	const handleClose = () => {
		setOpenSliderIndex(null);
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
							price: price1,
						},
						{
							href: href2,
							img: img2,
							title: title2,
							price: price2,
						},
						{
							href: href3,
							img: img3,
							title: title3,
							price: price3,
						},
						{
							href: href4,
							img: img4,
							title: title4,
							price: price4,
						},
					].map((item, index) => {
						return (
							<SwiperSlide key={index}>
								<button
									onClick={() => handleClick(index)}
									className="transition my-5 hover:brightness-125"
									id="link-burger">
									<img
										id="img"
										transition:name={item?.img}
										src={item?.img}
										alt={`image of ${item?.img}`}
									/>
									<div className="text">
										<h1 className="text-xl md:text-2xl font-bold">
											{item?.title}
										</h1>
									</div>
								</button>
								{openSliderIndex === index && (
									<dialog className=" z-50 backdrop-blur flex bg-black-10 w-full h-full transition-all">
										<div className="bg-black/30 p-5 flex flex-col justify-around items-center ">
											<button
												onClick={handleClose}
												className="bg-black/20 p-2 mt-5">
												<img
													src={close.src}
													alt="close"
													className="w-5 h-5"
												/>
											</button>
											<img
												transition:name={item?.img}
												className="w-full  object-cover brightness-150 "
												src={item?.img}
												alt={`image of ${item?.img}`}
											/>
											<h1 className="text-2xl font-bold">
												{item?.title}
											</h1>
											<p className="text-base  ">
												{/* {item?.description} */}
												Lorem, ipsum dolor sit amet
												consectetur adipisicing elit.
												Excepturi placeat iste fugiat id
												minus sit esse natus.
											</p>
											<p className="text-xl font-semibold py-2">
												{item?.price}
											</p>
											<a
												href="http://tbvmalvin.rhinox.io"
												className="hover:bg-black hover:text-white border border-black py-2 px-4">
												Ir a la tienda
											</a>
										</div>
									</dialog>
								)}
							</SwiperSlide>
						);
					})
				}
			</Swiper>
		</>
	);
}
