let article = JSON.parse(sessionStorage.getItem('article'))

let imagepanier= document.getElementById("imagepanier")

if (article.id=='1') {
    imagepanier.src="photo/modele1.jpeg"
} else if (article.id=="2") {
    imagepanier.src="photo/modele2.jpeg"
} else if (article.id=="3") {
    imagepanier.src="photo/modele3.jpeg"
} else if (article.id=="4") {
    imagepanier.src="photo/modele4.jpeg"
} else if (article.id=="5") {
    imagepanier.src="photo/modele5.jpeg"
} else if (article.id=="6") {
    imagepanier.src="photo/modele6.jpeg"
}

"https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=YOUR_MAPBOX_ACCESS_TOKEN"