import React, {useState} from 'react';
import aboutImage from '../images/Grön1.jpg';
const Modal =({isOpen, onClose, children})=>{
if(!isOpen) return null;
    return(
        <div
        style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <div style= {{background:'white',padding:20, borderRadius:5}}>
            {children}
            <button onClick={onClose}>Sträng</button>
            </div>
        </div>
    );
};

export default function About(){
    const [isModalOpen, setIsModalOpen] =useState(false);
    const openModal = ()=> setIsModalOpen(true);
    const closeModal = ()=> setIsModalOpen(false);
    return(
        <div style={{textAlign: 'center'}}>
            <h2>Om mig</h2>
            <p>Jag heter Patrik Petterson, är 32 år och arbetar i dagsläget som beräkningshandläggare KPA Pension i Sundsvall. Jag började min karriär inom Folksam 2016 som kundrådgivare i Linköping och har sedan dess utvecklats till min nuvarande roll.
            Utanför jobbet har jag ett stort intresse för träning och framför allt styrketräning.</p>
            <p> Min långa erfarenhet som beräkningshandläggare har gett mig en bred kompetens inom område kollektivavtalad tjänstepension och olika pensionsavtal.Min goda erfarenhet av service-relaterat arbete − att skapa och bibehålla goda kundrelationer − har bidragit till god förmåga att kommunicera och samarbeta, vilket gör mig flexibel i mitt arbete. I mitt nuvarande arbete där en stor del av arbetet utgår efter olika regelverk, läggs ett stort fokus på noggrannhet. Något som också är signifikativt är förbättringsarbete i form av att utveckla olika rutiner och effektivisera eller komma med kreativa förslag på till exempel systemförbättringar</p>
            <p>Tidigare erfarenhet från serviceyrket har stärkt min förmåga att skapa och bibehålla goda kundrelationer. Jag är motiverad att fortsätta min personliga utveckling genom att aktivt söka nya sätt att bredda min kompetens inom nya områden.</p>
            <button onClick={openModal}>?</button>          
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <p>Detta är ett hämligt meddelande</p>
                </Modal> 
                <img src={aboutImage} alt="aboutImage" className="about-Image" />
        </div>
    );
}