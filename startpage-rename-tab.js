function getQuery() {
  const params = new URLSearchParams(window.location.search);
  return params.get("q") || params.get("query")
    || document.querySelector("#q")?.value.trim()
    || "";
}

function updateTitle() {
  const query = getQuery();
  if (query) document.title = `${query} - Startpage`;
}

updateTitle();

