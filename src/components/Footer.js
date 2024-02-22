import github from '../images/Github2.png'
import instagram from '../images/Instagram2.png'
import linkedin from '../images/Linkedin2.png'
export default function Footer(){
    return(
        <div>
          <a href="https://www.linkedin.com/in/patrik-petterson-b6438b86?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&fbclid=IwAR224J2kE6aO5o_6h8eVaq8Kwr5bZUkoJ9lLs0JH8WsAUuq-J106-b1NJQE" target="_blank">
          <img src={linkedin} alt="linkedin" className="icons" />
        </a>
        <a href="https://github.com/PatpetEdu" target="_blank">
        <img src={github} alt="github" className="icons" />
        </a>
        <a href="https://www.instagram.com/patrikpetterson?igsh=eDJwNWhtYzduZjA5&fbclid=IwAR0bMJL7sZueIMytnUMA0pZZORAJ1ab0gR8koSV6J3CkSCKRrdLAcaOD21c" target="_blank">
        <img src={instagram} alt="insagram" className="icons" />
        </a>
        </div>
    );
}