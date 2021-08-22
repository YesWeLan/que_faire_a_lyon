const html = document.getElementsByTagName('html');
const body = document.getElementsByTagName('body');

///////////////////
//    HEADER    //

const header = document.getElementsByTagName('header');
const headerMenu = document.getElementById('header_menu');

const accueilHeader = document.getElementsByClassName('accueil_header_link');
const activitesHeader = document.getElementsByClassName('activites_header_link');
const contactHeader = document.getElementsByClassName('contact_header_link');
const headerSeparation = document.getElementsByClassName('header_separation');

const containerLogoHeader = document.getElementsByClassName('container_logo_header');
const logoClair = document.getElementsByClassName('logo_clair');
const logoSombre = document.getElementsByClassName('logo_sombre');
const burgerSvg = document.getElementsByClassName('burger_svg');
const crossSvg = document.getElementsByClassName('cross_svg');

containerLogoHeader[0].addEventListener('click', ()=>
{
    window.location.reload();
})

///////////////////
//    FOOTER    //

const villedeLyon = document.getElementById('ville_de_lyon');
const grandLyon = document.getElementById('grand_lyon');
const tclSytral = document.getElementById('tcl_sytral');

///////////////////
//    CONTACT    //

const borderDefault = '1px black solid';
const borderValid = '2px green solid';
const borderInvalid = '2px red solid';

///////////////////
//     WINDOW    //

// SCROLL
windowScrollTop();
window.addEventListener('scroll', headerScroll);

// RESIZE
window.addEventListener('resize', ()=>
{
    if (window.innerWidth > 780)
    {
        html[0].classList.remove('overflow_y_hidden');
        headerMenu.classList.remove('header_menu_animation');
        headerMenu.classList.remove('header_menu_active');
        accueilHeader[0].classList.remove('header_link_active');
        activitesHeader[0].classList.remove('header_link_active');
        contactHeader[0].classList.remove('header_link_active');
        burgerSvg[0].classList.remove('burger_svg_active');
        crossSvg[0].classList.remove('cross_svg_active');
    }

    if (window.scrollY < 480)
    {
        accueilHeader[0].classList.remove('header_link_color_scroll');
        activitesHeader[0].classList.remove('header_link_color_scroll');
        contactHeader[0].classList.remove('header_link_color_scroll');
        headerSeparation[0].classList.remove('header_separation_scroll');
        headerSeparation[1].classList.remove('header_separation_scroll');
    }

    headerScroll()
});