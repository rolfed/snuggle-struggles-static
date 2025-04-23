import './styles/tailwind.css';
import logo from './static/images/logo.png';
import hero from './static/images/hero.jpg';
import gsap from 'gsap';


const logoImg = document.querySelector("#logo");

if (logoImg) {
    logoImg.src = logo;
}

const heroEl = document.querySelector('#hero');
if (heroEl) {
    heroEl.style.backgroundImage = `url(${hero})`;
}
