import React from "react";
import bookData from '../enkeldata.json'

const BookDisplay=()=>{
    return(
        <div>
            <h1>Våra Böcker</h1>
            {bookData.böcker.map((bok)=>(
                  <div key={bok.id}>
                    <h2>{bok.titel}</h2>
                    <p>Författare: {bok.författare}</p>
                    <p>Utgivningsår: {bok.utgivningsår}</p>
                    <p>Genre: {bok.genre}</p>
                  </div>  
                ))}
        </div>

    );
};
export default BookDisplay