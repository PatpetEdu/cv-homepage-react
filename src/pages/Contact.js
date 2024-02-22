import React from 'react';
import kontaktbild from '../images/kontaktbild.jpg'

export default function Contact() {
    return (
        <div>
             <img src={kontaktbild} alt="kontakt-bild" className="kontaktbild" />
            <main>
                <section id="contact">
                    <h1
                    className='kontakt'
                    >Kontakta mig</h1>
                    <form action="/submit_form" method="post">
                        <label htmlFor="name">Namn</label><br />
                        <input type="text" id="name" name="name" placeholder="Ditt namn.." /><br />
                        
                        <label htmlFor="email">Epost</label><br />
                        <input type="email" id="email" name="email" placeholder="exempel@gmail.com.." /><br />
                        
                        <label htmlFor="message">Meddelande</label><br />
                        <textarea id="message" name="message" placeholder="Skriv något.."></textarea><br />

                        <input type="submit" value="Skicka" />       
                    </form>                           
                </section>
            </main>
        </div>
    );
}