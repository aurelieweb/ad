import React from 'react';

const Gallery = ({ projects }) => {
  // Filtrer les projets à la une
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section className="gallery-section">
      <h2>Nos Projets à la une</h2>
      <div className="gallery-container">
        {/* Images des projets à la une */}
        {featuredProjects.map((project, index) => (
          <div key={index} className="project-image main-image">
            <img src={project.coverImage} alt={project.title} />
            <figcaption>{project.title}</figcaption>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;


