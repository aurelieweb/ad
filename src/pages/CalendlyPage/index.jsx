import React, { useEffect } from "react";


function CalendlyPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-page">
      <h1>Planifiez votre rendez-vous</h1>
      <div className="calendly-inline-widget" 
           data-url="https://calendly.com/aureliedemetrio?hide_landing_page_details=1&hide_gdpr_banner=1&text_color=1E233B&primary_color=ffd4ca"
           style={{ minWidth: "320px", height: "700px" }}>
      </div>
    </div>
  );
}

export default CalendlyPage;
