import React from "react";

// Import des modules nécessaires de Swiper
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Gallery = ({ projects }) => {
  // Filtrer les projets à la une
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section className="gallery-section">
      <h2>Ils m'ont fait confiance</h2>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        spaceBetween={30}
        slidesPerView={1} // Affiche une image par vue sur les petits écrans
        centeredSlides={true}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          scale: 1,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 slide pour les petits écrans
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2, // 2 slides pour les tablettes
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3, // 3 slides pour les écrans plus grands
            spaceBetween: 40,
          },
        }}
        className="gallery-container"
      >
        {featuredProjects.map((project, index) => (
          <SwiperSlide key={index} className="project-slide">
            <div className="project-image">
              <img src={project.coverImage} alt={project.title} />
              <figcaption>{project.title}</figcaption>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Gallery;
