console.log("##### Le script de contenu est chargé. #####");

async function replaceBodyContent() {
  const url = window.location.href;
  console.log("##### L'URL detecté est : " + url + " #####");

  // Modifiez le contenu en fonction de l'URL
  if (url.includes("https://www.midilibre.fr/")) {
	  
	  console.log("##### Suppression Bandeau #####");
    var bandeau = document.getElementsByClassName("paywall");
    while(bandeau.length > 0){
        bandeau[0].parentNode.removeChild(bandeau[0]);
    }
	
  	console.log("##### Suppression maxHeight #####");
  	const targetDiv = document.querySelector('.article-full__body-content');
    // Supprimer les attributs 'style' et 'data-state'
    if (targetDiv) {
      targetDiv.removeAttribute('style');
      targetDiv.removeAttribute('data-state');
    }

    console.log("##### Modification midilibre effectuées #####");

  
  } else if (url.includes("https://www.lesechos.fr/")) {

    console.log("get article data")

    const article = await fetchStoredData();
    const node = document.querySelector(".post-paywall");
    const parentNode = node.parentElement;
  

    parentNode.innerHTML = article.queries[1].state.data.stripes[0].mainContent[0].data.description

    classes = parentNode.className;
    var children = parentNode.children;
    for(var i=0; i<children.length; i++){
        var child = children[i];
        child.setAttribute("class", classes);
    }

    const aside = parentNode.parentElement.parentElement;
    console.log("ASIDE: ", aside);
    aside.removeChild(aside.lastChild);
    console.log("##### Modification lesechos effectuées #####");


    
  }
}

/*
function handleMutations(mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      console.log('Un nœud a été ajouté ou supprimé:', mutation);
    } else if (mutation.type === 'attributes') {
      console.log('Les attributs d\'un nœud ont été modifiés:', mutation);
    }
  }
}

const targetNode = document.body; // Le nœud cible à observer
const observerOptions = {
  childList: true, // Surveiller l'ajout et la suppression de nœuds enfants
  attributes: true, // Surveiller les modifications d'attributs
  subtree: true // Surveiller également les modifications dans les sous-arbres du nœud cible
};

const observer = new MutationObserver(handleMutations);
observer.observe(targetNode, observerOptions);
*/


function fetchStoredData() {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get("articleData", (data) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
        reject(chrome.runtime.lastError);
      } else {
        if (data.articleData) {
          resolve(data.articleData);
        } else {
          console.log("No article data found.");
          resolve(null);
        }
      }
    });
  });
}

window.addEventListener("load", replaceBodyContent);


