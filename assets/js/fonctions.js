///////////////////
//   LOAD PAGE   //

function loadPage(e)
{
    // Récupère l'id du lien sur lequel on click
    const id = e.getAttribute('id');


    // CHARGE LES PAGES GENERALES
    if (id === 'accueil_header_link' || id === 'accueil_footer_link')
    {
        // On evite de rapeler une meme page quand on click sur un lien (ex: si je suis sur activites.html et que je reclick sur lien 'activites', la page ne sera pas rapeler car déja présent, evite requete inutile)
        if (!document.getElementById('container_accueil'))
        {
            // On charge la page
            xhr.open('get', 'assets/html/accueil.html');
            xhr.send();
        }
    }

    if (id === 'activites_header_link' || id === 'activites_footer_link')
    {
        if (!document.getElementById('container_activites'))
        {
            xhr.open('get', 'assets/html/activites.html');
            xhr.send();
        }
    }

    if (id === 'contact_header_link' || id === 'contact_footer_link')
    {
        if (!document.getElementById('container_contact'))
        {
            xhr.open('get', 'assets/html/contact.html');
            xhr.send();
        }
    }

    //////////////////////////////////////////////////////////////////////////

    // CHARGE LES PAGES CONTENANT LES ACTIVITES
    if (id === 'visiter')
    {
        xhr.open('get', 'assets/html/activites/visiter.html');
        xhr.send();
    }

    if (id === 'loisirs')
    {
        xhr.open('get', 'assets/html/activites/loisirs.html');
        xhr.send();
    }

    if (id === 'manger')
    {
        xhr.open('get', 'assets/html/activites/manger.html');
        xhr.send();
    }

    if (id === 'shopping')
    {
        xhr.open('get', 'assets/html/activites/shopping.html');
        xhr.send();
    }

    //////////////////////////////////////////////////////////////////////////

    // appel de la fonction pour cacher le menu apres avoir cliquer sur lien du header
    if (id === 'accueil_header_link' || id === 'activites_header_link' || id === 'contact_header_link')
    {
        showHideMenu();
    }

    windowScrollTop();
}

///////////////////
//  LACS A LYON  //

function lacsALyon()
{
    xhr.open('get', 'assets/html/activites/lacs.html');
    xhr.send();
    windowScrollTop();
}

////////////////////
// SHOW HIDE MENU //

function showHideMenu()
{
    if (window.innerWidth < 780 )
    {
        html[0].classList.toggle('overflow_y_hidden');
        headerMenu.classList.toggle('header_menu_animation');
        headerMenu.classList.toggle('header_menu_active');
        accueilHeader[0].classList.toggle('header_link_active');
        activitesHeader[0].classList.toggle('header_link_active');
        contactHeader[0].classList.toggle('header_link_active');
        burgerSvg[0].classList.toggle('burger_svg_active');
        crossSvg[0].classList.toggle('cross_svg_active');
    }

    else
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
}

///////////////////
// HEADER SCROLL //

function headerScroll()
{    

    header[0].classList.toggle('header_scroll', parseInt(window.scrollY) > 0);
    burgerSvg[0].classList.toggle('burger_svg_scroll', parseInt(window.scrollY) > 0);
    logoClair[0].classList.toggle('logo_clair_scroll', parseInt(window.scrollY) > 0);
    logoSombre[0].classList.toggle('logo_sombre_scroll', parseInt(window.scrollY) > 0);

    if (window.innerWidth > 780)
    {
        accueilHeader[0].classList.toggle('header_link_color_scroll', parseInt(window.scrollY) > 0);
        activitesHeader[0].classList.toggle('header_link_color_scroll', parseInt(window.scrollY) > 0);
        contactHeader[0].classList.toggle('header_link_color_scroll', parseInt(window.scrollY) > 0);
        headerSeparation[0].classList.toggle('header_separation_color_scroll', parseInt(window.scrollY) > 0);
        headerSeparation[1].classList.toggle('header_separation_color_scroll', parseInt(window.scrollY) > 0);
    }
}

//////////////////////
// LOGO FOOTER LINK //

function logoFooterLink(e)
{
    let id = e.getAttribute('id');

    if (id === 'grand_lyon')
    {
        window.open('https://www.grandlyon.com/');
    }

    if (id === 'ville_de_lyon')
    {
        window.open('https://www.lyon.fr/');
    }

    if (id === 'tcl_sytral')
    {
        window.open('https://www.tcl.fr/');
    }
}

///////////////////
//    LOAD SVG   //

function loadSvg()
{
    // Fonction crée car le svg est trop long dans le html et au bout du 8e element il ne s'affiche plus et le reste des elements suivants non plus
    const svgAddr = '<svg viewBox="-56 0 480 480.39494" xmlns="http://www.w3.org/2000/svg"><path d="m272.199219 184.050781c0-48.601562-39.402344-88-88-88-48.601563 0-88 39.398438-88 88 0 48.601563 39.398437 88 88 88 48.574219-.058593 87.941406-39.421875 88-88zm-160 0c0-39.765625 32.234375-72 72-72 39.761719 0 72 32.234375 72 72s-32.238281 72-72 72c-39.746094-.042969-71.957031-32.253906-72-72zm0 0"/><path d="m.199219 432.394531c0 37.96875 120.359375 48 184 48 63.636719 0 184-10.03125 184-48 0-29.3125-71.203125-40.632812-114.714844-44.800781l76.175781-90.917969c4.828125-6.214843 9.238282-12.742187 13.210938-19.535156l.398437-.578125c.289063-.425781.535157-.878906.742188-1.351562 44.210937-77.453126 26.511719-175.457032-41.996094-232.554688s-168.097656-56.847656-236.316406.59375c-68.21875 57.4375-85.425781 155.53125-40.828125 232.761719.046875.09375.101562.1875.160156.277343 4.324219 7.453126 9.171875 14.589844 14.503906 21.363282l75.679688 89.941406c-43.65625 4.128906-115.015625 15.425781-115.015625 44.800781zm51.75-144.800781c-4.804688-6.125-9.183594-12.578125-13.097657-19.3125v-.046875l-.117187-.199219c-40.769531-70.605468-24.960937-160.292968 37.496094-212.703125 62.457031-52.40625 153.527343-52.40625 215.980469 0 62.457031 52.410157 78.269531 142.097657 37.5 212.703125-.074219.113282-.136719.230469-.203126.351563-.042968.0625-.085937.128906-.117187.199219-3.664063 6.269531-7.726563 12.300781-12.160156 18.050781l-110.535157 131.878906c-.144531.128906-.296874.261719-.441406.40625-.800781.800781-1.710937 1.832031-2.703125 2.984375-4.308593 6.371094-11.417969 10.277344-19.105469 10.488281-6.980468.527344-13.683593-2.839843-17.425781-8.757812-1.367187-1.539063-2.789062-3.121094-4.375-4.714844-.152343-.144531-.296875-.277344-.453125-.414063zm75.855469 114.9375 22.921874 27.199219c.382813.460937.820313.871093 1.304688 1.222656 1.085938 1.121094 2.078125 2.242187 3.039062 3.328125 6.800782 9.339844 17.835938 14.640625 29.375 14.113281 12.335938-.140625 23.886719-6.066406 31.199219-16 .449219-.519531.863281-1 1.265625-1.441406.46875-.359375.898438-.769531 1.28125-1.222656l22.765625-27.199219c77.59375 6.085938 111.242188 22.617188 111.242188 29.863281 0 10.855469-59.296875 32-168 32-108.707031 0-168-21.144531-168-32 0-7.273437 33.757812-23.832031 111.605469-29.871093zm0 0"/></svg>';
    const svgWebsite = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 508 508" style="enable-background:new 0 0 508 508;" xml:space="preserve"><path d="M254,0C146.7,0,0,81.1,0,254c0,168.5,141.1,254,254,254c193.7,0,254-169.7,254-254C508,129.6,412.8,0,254,0z M195.1,23.9c-26.5,22.6-48.5,60-62.7,106.4c-18.4-10.9-35.3-24.4-50.3-40.1C113.1,57.7,152.3,34.9,195.1,23.9z M71.2,102.4c16.8,17.5,35.9,32.4,56.7,44.2c-7.8,30.3-12.4,63.9-13,99.2H16.6C18.4,193.1,37.6,142.8,71.2,102.4z M71.2,405.6c-33.7-40.4-52.8-90.7-54.6-143.4h98.3c0.6,35.4,5.2,68.9,13,99.2C107.2,373.3,88.1,388.1,71.2,405.6z M82.1,417.9c15-15.7,31.9-29.2,50.3-40.1c14.2,46.3,36.2,83.8,62.7,106.4C152.3,473.1,113.1,450.3,82.1,417.9z M245.8,491c-42.6-5.4-79.3-53-99.1-121.2c30.6-15.5,64.4-24.2,99.1-25.5V491z M245.8,328c-36.2,1.2-71.4,10.1-103.3,25.7c-6.7-28-10.7-58.9-11.3-91.5h114.6V328z M245.8,245.8H131.2c0.6-32.6,4.6-63.5,11.3-91.5c32,15.6,67.2,24.5,103.3,25.7V245.8zM245.8,163.7c-34.8-1.2-68.5-10-99.1-25.5C166.5,69.9,203.2,22.4,245.8,17V163.7z M436.8,102.4c33.6,40.4,52.8,90.7,54.6,143.4h-98.2c-0.6-35.4-5.2-68.9-13-99.2C400.9,134.7,420,119.9,436.8,102.4z M425.9,90.1c-15,15.7-31.9,29.2-50.3,40.1c-14.2-46.3-36.2-83.7-62.7-106.4C355.7,34.9,394.9,57.7,425.9,90.1z M262.2,17c42.6,5.4,79.3,53,99.1,121.2c-30.6,15.5-64.3,24.2-99.1,25.5V17z M262.2,180c36.2-1.2,71.4-10.1,103.3-25.7c6.7,28,10.7,58.9,11.3,91.5H262.2V180zM262.2,262.2h114.6c-0.6,32.6-4.6,63.5-11.3,91.5c-31.9-15.7-67.1-24.6-103.3-25.7V262.2z M262.2,491V344.3c34.8,1.2,68.5,10,99.1,25.5C341.5,438.1,304.8,485.6,262.2,491z M312.9,484.1c26.5-22.6,48.5-60,62.7-106.4c18.4,10.9,35.3,24.4,50.3,40.1C394.9,450.3,355.7,473.1,312.9,484.1z M436.8,405.6c-16.8-17.5-35.9-32.3-56.6-44.2c7.8-30.3,12.4-63.9,13-99.2h98.2C489.6,314.9,470.4,365.2,436.8,405.6z"/></svg>';
    
    const addr = document.getElementsByClassName('addr');
    const site = document.getElementsByClassName('site');
    
    if (document.getElementsByClassName('addr'))
    {
        for(let i = 0; i < addr.length; i++)
        {
            addr[i].innerHTML = svgAddr;
        }
    }

    if (document.getElementsByClassName('site'))
    {
        for(let i = 0; i < site.length; i++)
        {
            site[i].innerHTML = svgWebsite;
        }
    }
}

///////////////////////////
// SHOW HIDE DESCRIPTION //

function showHideDescription(e)
{
    const containerDescTitle = e;
    const descTitle = e.children[0];
    const spanArrow = e.children[1];
    const desc = e.nextElementSibling;
    
    containerDescTitle.classList.toggle('container_desc_title_active');
    descTitle.classList.toggle('desc_title_active');
    spanArrow.classList.toggle('span_arrow_active');
    desc.classList.toggle('desc_active');
}

///////////////////
// MODAL ADRESSE //

function modalAdresse(e)
{
    let name = e.getAttribute('data-name');
    let adresse = e.getAttribute('data-adresse');

    const modal = document.createElement('div');
    const popup = document.createElement('div');
    const cross = document.createElement('div');
    const lieu = document.createElement('p');
    const adr = document.createElement('input');
    const containerBouton = document.createElement('div');
    const boutonCopier = document.createElement('button');

    //containerPrincipal.appendChild(modal);
    body[0].insertBefore(modal, header[0])
    modal.appendChild(popup);
    popup.appendChild(cross);
    popup.appendChild(lieu);
    popup.appendChild(adr);
    popup.appendChild(containerBouton);
    containerBouton.appendChild(boutonCopier);
    
    // modal
    modal.setAttribute('class', 'modal');
    modal.setAttribute('id', 'modal');

    // popup
    popup.setAttribute('class', 'popup');
    popup.setAttribute('id', 'popup')

    // cross
    cross.setAttribute('class', 'cross');
    cross.setAttribute('id', 'cross');
    cross.setAttribute('onclick', 'modalClose()');
    cross.innerHTML = '&times';

    // lieu
    lieu.setAttribute('class', 'lieu');
    lieu.setAttribute('id', 'lieu');
    lieu.innerText = name;

    // adr 
    adr.setAttribute('class', 'adr');
    adr.setAttribute('id', 'adr');
    adr.setAttribute('value', adresse);
    adr.setAttribute('readonly', 'readonly');

    // containerBouton
    containerBouton.setAttribute('class', 'container_bouton');
    containerBouton.setAttribute('id', 'container_bouton');

    // boutonCopier
    boutonCopier.setAttribute('class', 'bouton_copier');
    boutonCopier.setAttribute('id', 'bouton_copier');
    boutonCopier.setAttribute('onclick', 'copierAdresse()');
    boutonCopier.innerText = 'Copier';
}

///////////////////
//  MODAL CLOSE  //

function modalClose()
{
    const modal = document.getElementById('modal');
    const popup = document.getElementById('popup');
    const cross = document.getElementById('cross');
    const lieu = document.getElementById('lieu');
    const adr = document.getElementById('adr');
    const containerBouton = document.getElementById('container_bouton');
    const boutonCopier = document.getElementById('bouton_copier');

    // Anim Fermeture
    modal.style.animation = '.5s fadeOut linear';
    popup.style.width = '0';
    popup.style.minHeight = '0';
    popup.style.transition = 'width .3s linear, min-height .3s linear';

    // Remove 
    if (!document.getElementById('texte_copier'))
    {
        popup.removeChild(cross);
        popup.removeChild(lieu);
        popup.removeChild(adr);
        popup.removeChild(containerBouton);
        containerBouton.removeChild(boutonCopier);
    }
    
    else 
    {
        const textCopier = document.getElementById('texte_copier');
        popup.removeChild(cross);
        popup.removeChild(textCopier);
    }

    setTimeout(function(){
        body[0].removeChild(modal);
        //containerPrincipal.removeChild(modal);
        modal.removeChild(popup);
    }, 490);
}

////////////////////
// COPIER ADRESSE //

function copierAdresse()
{
    const popup = document.getElementById('popup');
    //const cross = document.getElementById('cross');
    const lieu = document.getElementById('lieu');
    const adr = document.getElementById('adr');
    const containerBouton = document.getElementById('container_bouton');
    const boutonCopier = document.getElementById('bouton_copier');
    const textCopierMsg = document.createElement('p');

    // NE FONCTIONNE PAS SUR MOBILE
    //const adresse = document.getElementById('adr');
    //const x = navigator.clipboard.writeText(adresse.innerText);
    //x;

    adr.select();				    // Selection le contenu du input
	document.execCommand("copy");   // On le copie dans le press papiers


    popup.removeChild(lieu);
    popup.removeChild(adr);
    popup.removeChild(containerBouton);
    containerBouton.removeChild(boutonCopier);

    textCopierMsg.setAttribute('id', 'texte_copier');
    textCopierMsg.setAttribute('class', 'texte_copier');
    textCopierMsg.innerHTML = 'L\'adresse a été copiée &#10004;';

    popup.appendChild(textCopierMsg);
}

///////////////////
//  INPUT EVENT  //

// EVENT FORMULAIRE 
function inputEvent()
{
    // Form
    const formulaire = document.querySelector('.formulaire')

    // Input
    const inputNom = document.querySelector('.name_form');
    const inputEmail = document.querySelector('.email_form');
    const inputTextarea = document.querySelector('.message_form');

    // Event
    inputNom.addEventListener('input', checkInputNom);
    inputEmail.addEventListener('input', checkInputEmail);
    inputTextarea.addEventListener('input', checkTextarea);

    formulaire.addEventListener('submit', function(e)
    {
        // evite le rechargement de page au click du bouton 'Envoyer'
        e.preventDefault();

        // Recupere la valeurs des elements input et textarea du formulaire (saisie)
        const nomValue = inputNom.value;
        const emailValue = inputEmail.value;
        const textareaValue = inputTextarea.value;
        const r1 = /[0-9]/;
        const r2 = /[^a-z]/i; 
        const patNom = inputNom.getAttribute('pattern');
        const patEmail = inputEmail.getAttribute('pattern');

        // Condition pour valider l'envoi du formulaire
        // SI la longeur de la saisie Nom est différente de 0 ET la saisie de Nom ne contient pas de chiffres ET la saisie de Nom ne contient pas de caractere alphabétique ET la saisie correspond à la pattern de l'input Nom 
        if (nomValue.length != 0 && !nomValue.match(r1) && !nomValue.match(r2) && nomValue.match(patNom))
        {   
            // Si la longeur de la saisie Email est différente de 0 ET la saisie Email correspond à la pattern de l'input E-mail
            if (emailValue != 0 && emailValue.match(patEmail))
            {
                // Si la longeur saisie de Textarea est différente de 0 || (penser à traiter les caracteres type >, <, /, ...), non traité dans ce code
                if (textareaValue != 0 && textareaValue.length > 10)
                {
                    alert('Votre message à bien été envoyer\nVous allez être redirigé vers l\'accueil');
                    xhr.open('get', 'assets/html/accueil.html');
                    xhr.send(); 
                }
            }
        }

        else 
        {
            // boutton 'Envoyer' n'envoi rien
            return false;
        }
    });
}

//////////////////////
// CHECK INPUTE NOM //

function checkInputNom()
{
    // élément input
    const nom = document.querySelector('.name_form');
    
    // valeur saisie input
    let nomValue = nom.value;

    const r1 = /[0-9]/;
    const r2 = /[^a-z]/i; 
  
    const pat = this.getAttribute('pattern');

    // On réapplique les memes conditions que la fonction de l'évènement 'submit' (plus haut) pour traiter 'l'estetique' (border, ...)
    if (nomValue.length != 0)
    {
        if (nomValue.length > 0 && nomValue.length < 3 || nomValue.length > 20 || nomValue.match(r1) || nomValue.match(r2) || !nomValue.match(pat))
        {
            nom.style.border = borderInvalid
        }

        else
        {
            nom.style.border = borderValid;
        }   
    }

    else
    {
        nom.style.border = borderDefault;
    }
}

///////////////////////
// CHECK INPUT EMAIL //

function checkInputEmail()
{
    // éléments input
    const email = document.querySelector('.email_form');
    
    // valeur saisie input
    let emailValue = email.value;

    const pat = this.getAttribute('pattern');

    // On réapplique les memes conditions que la fonction de l'évènement 'submit' (plus haut) pour traiter 'l'estetique' (border, ...)
    if (emailValue != 0)
    {
        if (emailValue.match(pat))
        {
            email.style.border = borderValid;
        }
        else 
        {
            email.style.border = borderInvalid;
        }
    }

    else
    {
        email.style.border = borderDefault;
    }
}

////////////////////
// CHECK TEXTAREA //

function checkTextarea()
{
    // éléments input
    const textarea = document.querySelector('.message_form');

    // valeur saisie input
    let textareaValue = textarea.value;

    // On réapplique les memes conditions que la fonction de l'évènement 'submit' (plus haut) pour traiter 'l'estetique' (border, ...)
    if (textareaValue != 0)
    {
        if (textareaValue.length > 10)
        {
            textarea.style.border = borderValid;
        }
        else 
        {
            textarea.style.border = borderInvalid;
        }
    }

    else
    {
        textarea.style.border = borderDefault;
    }
}

////////////////////
// LOAD FONCTIONS //

function loadFonctions()
{
    // WEATHER
    if (document.getElementById('container_accueil'))
    {
        const iconW = document.getElementsByClassName('icon_w');
        const descriptionW = document.getElementsByClassName('description_w');
        const cityW = document.getElementsByClassName('city_w');
        const temperatureW = document.getElementsByClassName('temperature_w'); 

        // SI CONTIENT DEJA DES DONNEES 
        if (sessionStorage.getItem('icon') && sessionStorage.getItem('description') && 
            sessionStorage.getItem('city') && sessionStorage.getItem('temperature'))
        {
            iconW[0].setAttribute('src', sessionStorage.getItem('icon'));
            descriptionW[0].innerText = sessionStorage.getItem('description');
            cityW[0].innerText = sessionStorage.getItem('city');
            temperatureW[0].innerHTML = sessionStorage.getItem('temperature');
        }

        // SINON RAPPEL LA FONCTION
        else
        {
            weather();
        }
    }

    // SVG
    if (document.getElementsByClassName('addr'))
    {
        loadSvg();
    }

    // INPUT FORM
    if (document.getElementById('container_contact'))
    {
        window.onload = inputEvent();
    }
}

///////////////////////
// WINDOW SCROLL TOP //

function windowScrollTop()
{
    setTimeout(()=>
    {
        window.scrollTo(0,0);
    }, 200);
}