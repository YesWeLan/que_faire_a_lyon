///////////////////
//     AJAX      //

// INITIALISATION AJAX
const containerPrincipal = document.getElementById('container_principal');
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = httpRequest;
//retourURL = xhr.reponseURL;

function httpRequest()
{
    //retourURL = xhr.responseURL;

    if (xhr.readyState === xhr.DONE)
    {
        if (xhr.status === 200 || xhr.status === 304)
        {
            containerPrincipal.innerHTML = xhr.responseText;
            
            // appel checkFunction() pour charger fonction selon la page appelée
            loadFonctions();
        }
    }
}

// Charge la page d'accueil
xhr.open('get', 'assets/html/accueil.html');
xhr.send();