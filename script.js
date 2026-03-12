// Gestion du Menu Mobile
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Fermeture automatique du menu au clic sur un lien (mobile)
const navLinks = document.querySelectorAll('#mobile-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Effet de scroll sur la barre de navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('bg-black');
        nav.style.padding = '15px 24px';
    } else {
        nav.style.padding = '24px';
    }
});
document.getElementById('whatsapp-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Récupération des données
    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    // Numéro de Kangue Styles (Format international sans le +)
    const phoneNumber = "221774031221"; 

    // Construction du message
    const text = `Bonjour Kangue Styles, je m'appelle *${name}*.\n\n` +
                 `Je vous contacte pour : *${service}*.\n` +
                 `Détails supplémentaires : ${message}`;

    // Encodage pour l'URL
    const encodedText = encodeURIComponent(text);

    // Ouverture de WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
});

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    // On laisse un petit délai de 500ms pour que l'utilisateur admire le logo
    setTimeout(() => {
        preloader.classList.add('loader-hidden');
    }, 1000); 
}); 