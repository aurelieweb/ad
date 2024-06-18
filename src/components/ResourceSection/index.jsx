// src/components/ResourceSection.js
import React from 'react';
import '../../styles/styles.scss';

const ResourceSection = ({ resources }) => {
    return (
        <section className="resource-section">
            <h2>''Ressources Gratuites''</h2>
            <div className="resources">
                {resources.map((resource, index) => (
                    <div key={index} className="resource">
                        <h3>{resource.title}</h3>
                        <p>{resource.description}</p>
                        <a href={resource.link} className="cta-button">{resource.ctaText}</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ResourceSection;
