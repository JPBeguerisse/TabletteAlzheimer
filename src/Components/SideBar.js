import React from 'react';
import { useState, useEffect } from 'react';
import eatImage from '../public/img/eat.png'


export default function SideBar() 
{
    const [currentTime, setCurrentTime] = useState(''); // Déclaration de la variable d'état pour l'heure actuelle
    const [currentDate, setCurrentDate] = useState(''); // Déclaration de la variable d'état pour le jour actuel

    useEffect(() => {
        const updateDateTime = () => {
          const now = new Date(); // Obtention de la date et de l'heure actuelles
    
          // Récupération de l'heure
          const hours = String(now.getHours()).padStart(2, '0'); // Extraction des heures avec des zéros devant si nécessaire
          const minutes = String(now.getMinutes()).padStart(2, '0'); // Extraction des minutes avec des zéros devant si nécessaire
          const time = hours + ':' + minutes; // Construction de la chaîne de l'heure au format HH:MM
    
          // Récupération du jour
          const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
          const day = now.toLocaleDateString('fr-FR', options);
    
          // Mise à jour des variables 
          setCurrentTime(time);
          setCurrentDate(day);
        };
    
        updateDateTime(); // Appel initial pour mettre à jour l'heure et le jour immédiatement
    
        const intervalId = setInterval(updateDateTime, 1000); // Mettre à jour l'heure et le jour toutes les secondes
    
        return () => {
          clearInterval(intervalId); // Nettoyage du timer lors de la suppression du composant pour éviter les fuites de mémoire
        };
      }, []);

    return(
        <div className="container-bar">
            <div className="navbar-left">
                <div className="row">
                    <div className="column">
                        <h1>{currentTime}</h1>
                    </div>
                </div>
                <div className="row-middle">
                    <div className="column day">
                        <h1>{currentDate}</h1>
                    </div>
                    <div className="column day-night">
                        <h1>Jour</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <h1>Il est bientôt l'heure de déjeûner</h1>
                        <h3>12h - déjeûner</h3>
                        <img className='img-eat' src={eatImage} alt="" />
                    </div>
                </div>
                <div className='row timeToEat'>
                    <button className='btn-help'>
                        Aide
                    </button>
                </div>
            </div>
        </div>
        
    )
    
}