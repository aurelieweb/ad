import React, { useEffect } from "react";

function CoachingPage() {
  useEffect(() => {
    // Chargement du script Zcal
    const script = document.createElement("script");
    script.src = "https://static.zcal.co/embed/v1/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="zcal-page">
      <h1>Planifiez votre rendez-vous</h1>
      <div className="zcal-inline-widget">
        <a href="https://zcal.co/i/C-ofsADs">Pimpe ton site - Schedule a meeting</a>
      </div>
    </div>
  );
}

export default CoachingPage;
