  import React, { useState} from 'react';
  import { Swiper, SwiperSlide } from 'swiper/react';
  import 'swiper/css';
  import 'swiper/css/effect-cards';
  import { EffectCards } from 'swiper';
  import { equipments } from '../../pages/User/Equipments';
  import image from '../../assets/images/user-card-bg.jpg'

  const EquipmentsHome = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);

    const goNext = () => {
      if (swiperInstance) {
        swiperInstance.slideNext();
      }
    };

    const goPrev = () => {
      if (swiperInstance) {
        swiperInstance.slidePrev();
      }
    };

    return (
      <div data-aos="fade-up" className="equipments-swiper-container p-4 sm:p-7 bg-black shadow-lg rounded-lg overflow-hidden flex justify-center relative cursor-pointer">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper w-full sm:w-3/4"
          onSwiper={setSwiperInstance}
        >
          {equipments.map((equipment) => (
            <SwiperSlide key={equipment.id}>
              <div className="equipment-card bg-white transition-colors duration-300 p-4 shadow-xl rounded-xl mx-auto max-w-xs sm:max-w-sm hover:cursor-pointer">
                <img src={equipment.img} alt={equipment.title} className="equipment-image w-full h-48 sm:h-64 object-contain rounded-t-lg" />
                <div className="equipment-info p-4">
                  <h3 className="equipment-title text-lg sm:text-xl font-semibold mb-2">{equipment.title}</h3>
                  <p className="equipment-description text-gray-700 text-sm sm:text-base">{equipment.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-y-0 left-0 z-10 flex items-center">
          <button onClick={goPrev} className="swiper-button-prev bg-white p-1 sm:p-2 ml-4 sm:ml-8 rounded-full shadow-md hover:cursor-pointer" aria-label="Previous slide">&#10094;</button>
        </div>
        <div className="absolute inset-y-0 right-0 z-10 flex items-center">
          <button onClick={goNext} className="swiper-button-next bg-white p-1 sm:p-2 mr-4 sm:mr-8 rounded-full shadow-md hover:cursor-pointer" aria-label="Next slide">&#10095;</button>
        </div>
      </div>
    );
  };

  export default EquipmentsHome;

