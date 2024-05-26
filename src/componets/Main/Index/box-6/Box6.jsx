import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "./Card";

export default function Box6() {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-md-11">
          <div className="row">
            <div className="col-md-12 overflow-hidden py-5">
              <Swiper
                spaceBetween={50}
                breakpoints={{
                  660: { slidesPerView: 4 },
                  0: { slidesPerView: 1 },
                }}
                onSlideChange={() => console.log("")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center mb-5">
        <div className="col-md-11 d-flex justify-content-end">
          <div className="d-flex align-items-center fs-small-8 gap-2 text-white btn-purple py-1 px-3 rounded-pill bg-perpur-6a1cc0">
            <span>همه ی مقالات</span>
            <span className="material-symbols-outlined fs-6">
              arrow_circle_left
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
