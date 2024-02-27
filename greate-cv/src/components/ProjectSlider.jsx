import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { BoxBorderless } from './ui/BoxBorderless';

import 'swiper/css';
import 'swiper/css/effect-creative';

export const ProjectSlider = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<BoxBorderless>
			<div className="project-det__sliders-wrap">
				<Swiper
					style={{
						'--swiper-navigation-color': '#fff',
						'--swiper-pagination-color': '#fff',
					}}
					spaceBetween={10}
					navigation={true}
					thumbs={{ swiper: thumbsSwiper }}
					modules={[FreeMode, Navigation, Thumbs]}
					className="project-det__slider">
					<SwiperSlide className="project-det__slider-card">
						<img src="https://swiperjs.com/demos/images/nature-1.jpg" />
					</SwiperSlide>
					<SwiperSlide className="project-det__slider-card">
						<img src="https://swiperjs.com/demos/images/nature-2.jpg" />
					</SwiperSlide>
					<SwiperSlide className="project-det__slider-card">
						<img src="https://swiperjs.com/demos/images/nature-3.jpg" />
					</SwiperSlide>
					<SwiperSlide className="project-det__slider-card">
						<img src="https://swiperjs.com/demos/images/nature-4.jpg" />
					</SwiperSlide>
				</Swiper>

				<Swiper
					onSwiper={setThumbsSwiper}
					spaceBetween={10}
					slidesPerView={4}
					freeMode={true}
					watchSlidesProgress={true}
					modules={[FreeMode, Navigation, Thumbs]}
					className="project-det__slider project-det__slider--second">
					<SwiperSlide className="project-det__slider-card">
						<img src="https://swiperjs.com/demos/images/nature-1.jpg" />
					</SwiperSlide>
					<SwiperSlide className="project-det__slider-card">
						<img src="https://swiperjs.com/demos/images/nature-2.jpg" />
					</SwiperSlide>
					<SwiperSlide className="project-det__slider-card">
						<img src="https://swiperjs.com/demos/images/nature-3.jpg" />
					</SwiperSlide>
					<SwiperSlide className="project-det__slider-card">
						<img src="https://swiperjs.com/demos/images/nature-4.jpg" />
					</SwiperSlide>
					<SwiperSlide className="project-det__slider-card">
						<img src="https://swiperjs.com/demos/images/nature-5.jpg" />
					</SwiperSlide>
					<SwiperSlide className="project-det__slider-card">
						<img src="https://swiperjs.com/demos/images/nature-6.jpg" />
					</SwiperSlide>
					<SwiperSlide className="project-det__slider-card">
						<img src="https://swiperjs.com/demos/images/nature-7.jpg" />
					</SwiperSlide>
					<SwiperSlide className="project-det__slider-card">
						<img src="https://swiperjs.com/demos/images/nature-8.jpg" />
					</SwiperSlide>
					<SwiperSlide className="project-det__slider-card">
						<img src="https://swiperjs.com/demos/images/nature-9.jpg" />
					</SwiperSlide>
					<SwiperSlide className="project-det__slider-card">
						<img src="https://swiperjs.com/demos/images/nature-10.jpg" />
					</SwiperSlide>
				</Swiper>
			</div>
		</BoxBorderless>
	);
};
