import React from 'react';

const ResourceSection = ({ resources }) => {
    const handleQuizClick = (formId) => {
        if (window.Tally) {
            window.Tally.openPopup(formId, {
                layout: 'modal',
                width: 700,
                hideTitle: true,
                overlay: true,
                emoji: {
                    text: '🚀',
                    animation: 'bounce'
                },
                autoClose: 5000,
                hiddenFields: {
                    ref: 'site',
                    email: 'contact@votreentreprise.com'
                },
                onOpen: () => {
                    console.log('Popup ouvert');
                },
                onClose: () => {
                    console.log('Popup fermé');
                },
                onPageView: (page) => {
                    console.log('Page vue:', page);
                },
                onSubmit: (payload) => {
                    console.log('Formulaire soumis:', payload);
                }
            });
        }
    };

    return (
        <div className="resource-section">
            {resources.map((resource, index) => (
                <div key={index} className="resource-item">
                    <h3>{resource.title}</h3>
                    <p>{resource.description}</p>
                    {resource.isQuiz ? (
                        <button onClick={() => handleQuizClick(resource.link)}>
                            {resource.ctaText}
                        </button>
                    ) : (
                        <a href={resource.link} target="_blank" rel="noopener noreferrer">
                            <button>
                                {resource.ctaText}
                            </button>
                        </a>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ResourceSection;
