import React from 'react';
import Banner from '../../components/Banner';
import MaintenancePage from '../../components/MaintenancePage';



function Accueil() {

    const pageTitle = "L'agence Digitale";
    
    return (
        <div className='main'>
            <Banner pageTitle={pageTitle}/>
            <section>
                <MaintenancePage/>
                        
            </section>


        </div>
    );
}
export default Accueil;