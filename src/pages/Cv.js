import React from 'react';
import sprakData from '../sprak.json';
import kurserData from '../Kurser.json';
import arbetslivData from '../Arbetsliv.json';
import utbildningData from '../Utbildning.json';
import './Cvstyle.css'
import profile from '../images/profile-picture1.jpg'


export default function Cv() {
    return (
        <div className="cv-section">
            <div className="cv-container">
                <div className="left-section">                  
                <img src={profile} alt="Profilbild" className="profile-picture" /> {/* Använd variabeln 'logo' */}
                    <h2>Patrik Petterson</h2>
                    <h2>Kontaktuppgifter</h2>
                    <p>Epost: Ptrck@live.se</p>
                    <p>Tel: 0703160774</p>
                    <h2>Språkkunskaper</h2>
                    <ul>
                        {sprakData.map((item, index) => (
                            <li key={index}>
                                <strong>{item.sprak}:</strong> {item.niva}
                            </li>
                        ))}
                    </ul>
                    <h2>Studerade kurser</h2>
                    <ul>
                        {kurserData.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                
                <div className="right-section">
                    <h2>Arbetslivserfarenhet</h2>
                    <ul>
                        {arbetslivData.map((item, index) => (
                            <li key={index}>
                                <strong>{item.position}</strong> ({item.startDatum} - {item.slutDatum}): {item.arbetsgivare}
                            </li>
                        ))}
                    </ul>
                    <h2>Utbildning</h2>
                    <ul>
                        {utbildningData.map((item, index) => (
                            <li key={index}>
                                <strong>{item.utbildning}</strong> ({item.startDatum} - {item.slutDatum}): {item.skola}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}