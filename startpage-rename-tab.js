// Startpage Tab Title — content.js
// Updates the browser tab title to: "<query> - Startpage"

function getQuery() {
  const params = new URLSearchParams(window.location.search);
  // Startpage uses "q" or "query" depending on the URL format
  return params.get("q") || params.get("query") || "";
}

function updateTitle() {
  const query = getQuery();
  if (query) {
    document.title = `${query} - Startpage`;
  }
}

// Run on initial page load
updateTitle();

// Watch for Startpage's client-side navigation (it's a SPA in some modes)
let lastUrl = location.href;
const observer = new MutationObserver(() => {
  if (location.href !== lastUrl) {
    lastUrl = location.href;
    updateTitle();
  }
  // Also re-apply if the page itself resets the title
  const query = getQuery();
  if (query && !document.title.startsWith(query)) {
    updateTitle();
  }
});

observer.observe(document, { subtree: true, childList: true });
