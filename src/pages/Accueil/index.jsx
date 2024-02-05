import React from 'react';
import Banner from '../../components/Banner';
import APropos from '../../sections/APropos';
import Services from '../../sections/Services'
import Portfolio from '../../sections/Portfolio';
import Process from '../../sections/Process';
import Contact from '../../sections/Contact';



function Accueil() {

    const pageTitle = "Bienvenue sur L'agence Digitale";

    return (
        
        <div className='main'>
            <Banner pageTitle={pageTitle}/>
            <APropos/>
            <Services/>
            <Portfolio/>
            <Process/>
            <Contact/>
        </div>
    );
}
export default Accueil;