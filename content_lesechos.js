console.log("content loaded");

function injectScriptAndGetReactData() {
  const injectedScript = document.createElement("script");
  injectedScript.src = chrome.runtime.getURL("page_lesechos.js");
  document.documentElement.appendChild(injectedScript);
  injectedScript.remove();
}

function handleReactData(event) {
    const reactData = event.detail;
    chrome.storage.local.set({ articleData: reactData }, () => {
      console.log("Article data saved.");
    });
  }

document.addEventListener("REACT_DATA", handleReactData);
injectScriptAndGetReactData();