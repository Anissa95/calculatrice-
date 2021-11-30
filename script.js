//Récuperer les elements du DOM
const touches = [...document.querySelectorAll('.button')];
//console.log(touches);
//Récuperer les KEYCODE
const listeKeyCode = touches.map(touche => touche.dataset.key);
//console.log(listeKeyCode);
//Ce qui s'affiche sur l'ecran )
const ecran = document.querySelector('.ecran');


document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    // console.log(valeur + typeof valeur);
    calculer(valeur);
});
document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    //console.log(valeur );
    calculer(valeur);
});
//la fonction calculer
function calculer(valeur) {
    //on va verifier si notre listekeycode récuperée avant contient la valeurdu keyCode passé en parametre
    if (listeKeyCode.includes(valeur)) {
        //console.log(listeKeyCode)
        switch (valeur) {
            //2 cas specifiques C pour effacer ce qui a a l'ecran et la la touche = pour affiché le total
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeyCode = listeKeyCode.indexOf(valeur);
                const touche = touches[indexKeyCode];
                ecran.textContent += touche.innerHTML;

        }
    }
};
window.addEventListener('error', (e) => { alert('Une erreur est survenue dans votre calcul :' + e.message) })