import React from 'react';
import '../../styles/styles.scss';
import imgMaintenance from '../../assets/imgMaintenance.png';




function Maintenance() {
  return (
    <div className='maintenance'>
    <div className='maintenance__div'>
      <img className="maintenance__div-img" src={imgMaintenance} alt="Page en cours de maintenance" />
      <div className='maintenance__div-text'>
        <p className='maintenance__div-title'>Votre site fait peau neuve… Attachez vos ceintures, décollage imminent!

        </p>
        <p className='maintenance__div-paragraph'>
        "Il est en pleine métamorphose : relooking express, nouvelles fonctionnalités qui claquent et un blog tout neuf pour booster votre site (et votre business 💼)
        </p>
        <p className='maintenance__div-paragraph'>
        Quelques petits bugs peuvent se glisser pendant la manœuvre (promis, je les surveille de près).
Merci pour votre visite et votre confiance — je reviens en version 2.0 plus vite que mon thé ne refroidit 🍵"
        </p>
        <p className='maintenance__div-paragraph'>
        Aurélie
        </p>
      </div>
    </div>
    </div>
  );
}

export default Maintenance;
