import React, { useRef } from 'react';
import { BoxBorderless } from './ui/BoxBorderless';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FcPrevious } from 'react-icons/fc';
import { FcNext } from 'react-icons/fc';
import 'swiper/css';
import 'swiper/css/bundle';
import { Link } from 'react-router-dom';
import { pageRoot } from '../utils/constants';

export const Projects = () => {
	const swiperRef = useRef(null);

	const goToPrevSlide = () => {
		if (swiperRef.current) {
			swiperRef.current.swiper.slidePrev();
		}
	};

	const goToNextSlide = () => {
		if (swiperRef.current) {
			swiperRef.current.swiper.slideNext();
		}
	};

	return (
		<BoxBorderless>
			<div className="projects">
				<h2 className="projects__title txt-xl">My pet projects</h2>

				<div className="projects__nav">
					<button
						className="projects__nav-btn"
						onClick={goToPrevSlide}>
						<FcPrevious />
					</button>
					<button
						className="projects__nav-btn"
						onClick={goToNextSlide}>
						<FcNext />
					</button>
				</div>

				<Swiper
					ref={swiperRef}
					loop={true}
					className="projects__swiper"
					spaceBetween={16}
					slidesPerView={1}
					modules={[Autoplay]}
					autoplay={{
						delay: 2500,
						disableOnInteraction: true,
					}}>
					<SwiperSlide>
						<div className="projects__item">
							<div className="projects__item-content">
								<p className="projects__item-title txt-sm">Mern Shop</p>
								<p className="projects__item-desc text-xs txt-neutral">
									Полнофункциональное фулстак MERN приложение. Полностью
									адаптивно благодаря использованию гибкой ui библиотеки
									Bootstrap. Представляет собой магазин различных товаров,
									которые можно добавить в корзину, заказать и даже оплатить
									через интегрированный PAYPAL. Доступна регистрация и
									авторизация. Все свои заказы всегда можно просмотреть, а
									личные данные отредактировать. Еще больше функций открывается
									от лица администратора.
								</p>
								<Link
									to={`/${pageRoot.project}/${1}`}
									className="projects__item-link">
									<span className="text-xs">Details</span>
								</Link>
							</div>
							<Link
								to={`/${pageRoot.project}/${1}`}
								className="projects__item-img">
								<img
									src="/public/img/png/MernShop.png"
									alt="project-img"
								/>
							</Link>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="projects__item">
							<div className="projects__item-content">
								<p className="projects__item-title txt-sm">Audiophile</p>
								<p className="projects__item-desc text-xs txt-neutral">
									Полнофункциональное приложение Todo, созданное с
									использованием MERN-стека: MongoDB, Express, React, Node.js.
									Так же использовался Redux, axios и библиотека компонентов
									Antd. Включает в себя календарь, детальные страницы задач и
									удобные таблицы.
								</p>

								<Link
									to={`/${pageRoot.project}/${2}`}
									className="projects__item-link">
									<span className="text-xs">Details</span>
								</Link>
							</div>
							<Link
								to={`/${pageRoot.project}/${2}`}
								className="projects__item-img">
								<img
									src="/public/img/png/Audiophile.png"
									alt="project-img"
								/>
							</Link>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="projects__item">
							<div className="projects__item-content">
								<p className="projects__item-title txt-sm">Task scheduler</p>
								<p className="projects__item-desc text-xs txt-neutral">
									Полнофункциональное приложение Todo, созданное с
									использованием MERN-стека: MongoDB, Express, React, Node.js.
									Так же использовался Redux, axios и библиотека компонентов
									Antd. Включает в себя календарь, детальные страницы задач и
									удобные таблицы.
								</p>

								<Link
									to={`/${pageRoot.project}/${2}`}
									className="projects__item-link">
									<span className="text-xs">Details</span>
								</Link>
							</div>
							<Link
								to={`/${pageRoot.project}/${2}`}
								className="projects__item-img">
								<img
									src="/public/img/png/TaskScheduler.png"
									alt="project-img"
								/>
							</Link>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</BoxBorderless>
	);
};
