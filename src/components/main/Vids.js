import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Vids() {
  return (
    <main id="vids">
      <Swiper
        modules={[Pagination, Navigation]}
        // pagination={
        //   {
        //     clickable: true,
        //   }
        // }
        spaceBetween={60}
        navigation={true}
        loop={true}
        slidesPerView={1}
        centerSlides={true}
      >
        <SwiperSlide>
          <div className="inner">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est numquam doloremque accusamus voluptatibus, officiis qui aperiam natus eligendi dolore?</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inner">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est numquam doloremque accusamus voluptatibus, officiis qui aperiam natus eligendi dolore?</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inner">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est numquam doloremque accusamus voluptatibus, officiis qui aperiam natus eligendi dolore?</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inner">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est numquam doloremque accusamus voluptatibus, officiis qui aperiam natus eligendi dolore?</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inner">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est numquam doloremque accusamus voluptatibus, officiis qui aperiam natus eligendi dolore?</div>
        </SwiperSlide>
      </Swiper>
    </main>
  )
}

export default Vids;
