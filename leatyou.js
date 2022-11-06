//Collect product id and price from the url

let produit_id = new URLSearchParams(window.location.search).get("id")
let produit_price = new URLSearchParams(window.location.search).get("price")

// Set default image of the product and update
let image= document.getElementById("image");


if (produit_id=="1") {
    image.src="photo/01/Blanc.png"
} else if (produit_id=="2") {
    image.src="photo/02/Blanc.png"
} else if (produit_id=="3") {
    image.src="photo/03/Blanc.png"
}

//Create a function to store product info and pass that value to session storage so that we can use it on the cart page

function panieronclick(){

    //update product price if user choose any pattern
    if(document.getElementById('patronage').value !=''){
        produit_price = parseInt(produit_price)+2;
    }

    //update product price if user custom note
    if(document.getElementById('note').value !=''){
        produit_price = parseInt(produit_price)+2;
    }

    //create JSON data and store to session storage
    let article={
        id: produit_id,
        price: produit_price,
        material: document.getElementById('cuir').value,
        color: document.getElementById('couleur').value,
        pattern: document.getElementById('patronage').value,
        note: document.getElementById('note').value,
        img: document.getElementById("image").getAttribute('src')

    }

    sessionStorage.setItem('article',JSON.stringify(article))
    window.location.href='panier1.html'

}



///let boutonMoins60 = document.getElementById("filtre60");
///boutonMoins60.addEventListener('click', function() {
  ///  let articles = document.getElementsByClassName("flex-item")
    ///Array.from(articles).forEach(function(article) {
       /// if (article.dataset.prix < 60) {
          ///  article.style.display = "block"
        ///} else {
           /// article.style.display = "none"
        ///}
    ///});
///})

// let filtreprix=document.getElementById("filtreprix");
// filtreprix.addEventListener('change', function(){
//     let valeurprix=document.getElementById("valeurprix")
//     valeurprix.innerText= "Filtre prix="+this.value
//     let valeur = this.value;
//     let articles = document.getElementsByClassName("flex-item")
//     Array.from(articles).forEach(function(article) {
//         if (parseInt(article.dataset.prix) < valeur) {
//             article.style.display = "block"
//         } else {
//             article.style.display = "none"
//         }
//
// })
// })

// let prix=document.getElementById("prix");
// let cuir=document.getElementById('cuir')
// cuir.addEventListener('change', function(){
//     prix.innerText= "+5"
// })
// let daim=document.getElementById('daim')
// daim.addEventListener('change', function(){
//     prix.innerText= "+5"
// })
// let text=document.getElementById('text')
// text.addEventListener('change', function(){
//     prix.innerText= "+5"
// })
// let couleur=document.getElementById('couleur')
// couleur.addEventListener('change', function(){
//     prix.innerText= "+5"
// })

