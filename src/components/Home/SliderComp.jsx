import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    cssEase: "linear",
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="bg-grey-100">
            <div className="text-5xl font-bold">KingMaon shoes</div>
            <div className="text-lg my-3">
              If you would like to examine both cheap and high quality, you can
              visit our store or browse our website. If you have any questions,
              you can contact us at the following number... xxx xxxx xx x
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex">
              Review
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/60d2e87c-9eaa-46a0-b9aa-0f730291262b/air-force-1-07-ayakkab%C4%B1s%C4%B1-SqKG2H.png"
            alt=""
          />
        </div>
        <div>
          <div className="!flex items-center bg-gray-100 px-6">
            <div className="bg-grey-100">
              <div className="text-5xl font-bold">KingMaon shoes</div>
              <div className="text-lg my-3">
                If you would like to examine both cheap and high quality, you
                can visit our store or browse our website. If you have any
                questions, you can contact us at the following number... xxx
                xxxx xx x
              </div>
              <div>Review</div>
            </div>

            <img
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fa755d1b-d0ce-431b-a385-95a74c0c0c8c/free-metcon-5-antrenman-ayakkab%C4%B1s%C4%B1-zFpHkr.png"
              alt=""
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
