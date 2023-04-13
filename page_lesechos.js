console.log("pageloaded");
/* var DATAS;
function handleContentLoaded() {
    const exampleVarValue = window.__REACT_QUERY_STATE__;
    console.log('Valeur de exampleVar:', exampleVarValue);
    if (
        window.__REACT_QUERY_STATE__ &&
        window.__REACT_QUERY_STATE__.queries &&
        window.__REACT_QUERY_STATE__.queries[1] &&
        window.__REACT_QUERY_STATE__.queries[1].state &&
        window.__REACT_QUERY_STATE__.queries[1].state.data &&
        window.__REACT_QUERY_STATE__.queries[1].state.data.stripes &&
        window.__REACT_QUERY_STATE__.queries[1].state.data.stripes[0] &&
        window.__REACT_QUERY_STATE__.queries[1].state.data.stripes[0].mainContent &&
        window.__REACT_QUERY_STATE__.queries[1].state.data.stripes[0].mainContent[0] &&
        window.__REACT_QUERY_STATE__.queries[1].state.data.stripes[0].mainContent[0].data &&
        window.__REACT_QUERY_STATE__.queries[1].state.data.stripes[0].mainContent[0].data.access
      ) {
        console.log('Data exist');
        const data = JSON.parse(JSON.stringify(window.__REACT_QUERY_STATE__));

        chrome.runtime.sendMessage({
            action: 'sendReactData',
            data: data
        });

      }
}
  
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', handleContentLoaded);
} else {
  // Le DOM est déjà chargé
  console.log('DOM content loaded')
  handleContentLoaded();
}
*/
(function() {
    document.dispatchEvent(new CustomEvent('REACT_DATA', { detail: window.__REACT_QUERY_STATE__ }));
})();