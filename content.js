console.log("##### Le script de contenu est chargé. #####");


function replaceBodyContent() {
  const url = window.location.href;
  console.log("##### L'URL detecté est : " + url + " #####");

  // Modifiez le contenu en fonction de l'URL
  if (url.includes("https://www.midilibre.fr/")) {
	  
	console.log("##### Suppression Bandeau #####");

    // Votre nouveau contenu
    var bandeau = document.getElementsByClassName("paywall");
    while(bandeau.length > 0){
        bandeau[0].parentNode.removeChild(bandeau[0]);
    }
	
  	console.log("##### Suppression maxHeight #####");

	// Trouver l'élément div avec la classe "article-full__body-content"
	const targetDiv = document.querySelector('.article-full__body-content');

	// Supprimer les attributs 'style' et 'data-state'
	if (targetDiv) {
	  targetDiv.removeAttribute('style');
	  targetDiv.removeAttribute('data-state');
	}

    console.log("##### Modification midilibre effectuées #####");

  
  } else if (url.includes("https://www.lesechos.fr/")) {
    // Modification du contenu pour le site https://www.lesechos.fr/
	  const newContent = "Nouveau contenu ici";
     //document.body.innerHTML = newContent;
  }
}

window.addEventListener("load", replaceBodyContent);


