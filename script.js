let button_nouvelle = document.getElementById("nouvelle");
let button_ajouter = document.getElementById("ajouter");
let button_annuler = document.getElementById("annuler");
let count = localStorage.length;

function ouvrir() {
    document.getElementById("dialog").style.display = 'flex';
}

button_nouvelle.addEventListener("click", ouvrir);

function ajouterTransaction() {
    localStorage.setItem(count, JSON.stringify(
        {montant: document.getElementById("montant").value,
        type: document.getElementById("type").value,
        description: document.getElementById("description").value,
        date: document.getElementById("date").value}));
}

button_ajouter.addEventListener("click", ajouterTransaction);

function fermer() {
    document.getElementById("dialog").style.display = 'hidden';
}

button_annuler.addEventListener("click", fermer);