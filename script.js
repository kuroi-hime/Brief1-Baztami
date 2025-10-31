let button_nouvelle = document.getElementById("nouvelle");
let button_ajouter = document.getElementById("ajouter");
let button_annuler = document.getElementById("annuler");
let myForm = document.getElementById('myForm');
let count = localStorage.length;
let total_revenus = 0;
let total_depenses = 0;

function loadData(){
    for(let i=0; i<count; i++){
        let argent = JSON.parse(localStorage.getItem(i));
        if(argent.status != 'deleted'){
            if(argent.type=="revenu")
                total_revenus += Number(argent.montant);
            else{
                total_depenses += Number(argent.montant);
            }
        }
    }
    document.getElementById("revenus").innerText = total_revenus;
    document.getElementById("depenses").innerText = total_depenses;
    document.getElementById("solde").innerText = total_revenus-total_depenses;
}

function ouvrir() {
    document.getElementById("dialog").style.display = 'flex';
}

button_nouvelle.addEventListener("click", ouvrir);

function validateForm() {

  let montant = document.forms["myForm"]["montant"].value;
  let date = document.forms["myForm"]["date"].value;
  let description = document.forms["myForm"]["description"].value;

  if (montant && date && description != "") {
    button_ajouter.removeAttribute('disabled');
  }
}

myForm.addEventListener('change', validateForm);

function ajouterTransaction() {
    localStorage.setItem(count, JSON.stringify(
        {status: 'added',
        id: count,
        montant: document.getElementById("montant").value,
        type: document.getElementById("type").value,
        description: document.getElementById("description").value,
        date: document.getElementById("date").value}));
    count++;
}

button_ajouter.addEventListener("click", ajouterTransaction);

function fermer() {
    document.getElementById("dialog").classList.add('hidden');
}

button_annuler.addEventListener("click", fermer);
