import './styles/tailwind.css';
import logo from './static/images/logo.PNG';
import hero from './static/images/hero.jpg';


const logoImg = document.querySelector("#logo");

if (logoImg) {
    logoImg.src = logo;
}

const heroEl = document.querySelector('#hero');
if (heroEl) {
    heroEl.style.backgroundImage = `url(${hero})`;
}

console.log('hello world');

window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#sib-form');
    const message = document.getElementById('confirmation-message');
    const errorMessage = document.getElementById('error-message');

     if (!form || !message || !errorMessage) return;

    form.addEventListener('submit', async (e) => {
        console.log('click');
        e.preventDefault();

        const formData = new FormData(form);
        console.log('Form data', formData);

        try {
            const response = await fetch(
                'https://sibforms.com/serve/MUIFAMpl7CFtI_lJSUXL8jE2WDVwiyaFGuyqHG2lJ-bu_-UuiWfzAqHX-DyzCV7wlvtlcoQMZ0prP5sxjLL0rbBC9Y_gT1hz0AAyhG6GTFmEDRaR89PDAUPBvxG_kgljpY6KEwSbLEuCGKO32tcoU1Q7JbwVDo-syEg3CCeO6cwueEVkx21O3JN_oMVVFFyiXTKW3kR5SYJATfGc',
                {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors' // required since it's cross-origin request
                },
            );

            console.log('Response', response);

            form.classList.add('hidden');
            message.classList.remove('hidden');
        } catch (error) {
            console.error('Subscription error: ', error);
            errorMessage.classList.remove('hidden');
        }
    });
});
