import React from "react";
import Slider from "react-slick";
import avatar1 from './man.svg'
import avatar2 from './girl.svg'

const ReviewsOurSchool = () => {
  return (
    <>
      <div className="reviews my-40">
        <div className="container">
          <h2 className="text-center text-white font-[700] text-[36px]">
            Отзывы о нашей школе
          </h2>
        </div>
        <div className="ml-[350px]">
          <SlidersSwipers />
        </div>
      </div>
    </>
  );
};
const SlidersSwipers = () => {
  const sliderTitle = [
    {
      id: 1,
      avatar: avatar1,
      name: "Виктор Александарович",
      title:
        "С радостью оставляю положительной отзыв! Пройдя курс UX/UI Designer с нуля я с остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
      data: "23.02.2022 г",
    },
    {
      id: 2,
      avatar: avatar2,
      name: "Алина Татьянован",
      title:
        "Лучшая школа в галактике и место, где я полюбил мир IT !!! Я вот-вот стану выпускником Motion Web.  За это время мне дали фундаментальные знания программирования ( C++, C#, Python ), дискретной математики, криптографии, созданию сайтов со сложной серверной архитектурой и многим другим важным навыкам.",
      data: "23.02.2022 г",
    },
    {
      id: 1,
      avatar: avatar1,
      name: "Виктор Александарович",
      title:
        "С радостью оставляю положительной отзыв! Пройдя курс UX/UI Designer с нуля я с остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
      data: "23.02.2022 г",
    },
    {
      id: 2,
      avatar: avatar2,
      name: "Алина Татьянован",
      title:
        "Лучшая школа в галактике и место, где я полюбил мир IT !!! Я вот-вот стану выпускником Motion Web.  За это время мне дали фундаментальные знания программирования ( C++, C#, Python ), дискретной математики, криптографии, созданию сайтов со сложной серверной архитектурой и многим другим важным навыкам.",
      data: "23.02.2022 г",
    },
    {
      id: 1,
      avatar: avatar1,
      name: "Виктор Александарович",
      title:
        "С радостью оставляю положительной отзыв! Пройдя курс UX/UI Designer с нуля я с остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
      data: "23.02.2022 г",
    },
    {
      id: 2,
      avatar: avatar2,
      name: "Алина Татьянован",
      title:
        "Лучшая школа в галактике и место, где я полюбил мир IT !!! Я вот-вот стану выпускником Motion Web.  За это время мне дали фундаментальные знания программирования ( C++, C#, Python ), дискретной математики, криптографии, созданию сайтов со сложной серверной архитектурой и многим другим важным навыкам.",
      data: "23.02.2022 г",
    },
  ];
  const settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="rSwiper my-[50px]">
      {sliderTitle.map((el, idx) => (
        <div className="slides relative  rounded-xl" key={idx}>
          <img src={el.avatar} alt="img" />
          <div className="titles">
            <h4>{el.name}</h4>
            <p>{el.title}</p>
          </div>
          <span>{el.data}</span>
        </div>
      ))}
    </Slider>
  );
};

export default ReviewsOurSchool;
