let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createAppendSearchResult(result) {
    let {
        link,
        title,
        description
    } = result
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");
    let titleEl = document.createElement("a");
    titleEl.classList.add("result-title")
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.textContent = title;
    resultItemEl.appendChild(titleEl);
    let titleBreakLine = document.createElement("br");
    resultItemEl.appendChild(titleBreakLine);

    let urlEle = document.createElement("a");
    urlEle.textContent = link;
    urlEle.href = link;
    urlEle.target = "_blank";
    urlEle.classList.add("result-url");
    resultItemEl.appendChild(urlEle);

    let linkBreakEl = document.createElement("br");
    resultItemEl.appendChild(linkBreakEl);

    let descriptionEl = document.createElement("p");
    descriptionEl.textContent = description;
    descriptionEl.classList.add("link-description");
    resultItemEl.appendChild(descriptionEl);

    searchResultsEl.appendChild(resultItemEl)

}



function displayResults(searchResults) {
    spinnerEl.classList.add("d-none")

    for (let result of searchResults) {
        createAppendSearchResult(result)
    }
}



function searchWikipedia(event) {
    if (event.key === "Enter");
    spinnerEl.classList.remove("d-none");
    searchResultsEl.textContent = "";

    let searchInputElVal = searchInputEl.value;
    let url = "https://apis.ccbp.in/wiki-search?search=" + searchInputElVal;
    let optins = {
        method: "GET"
    };
    fetch(url, optins)
        .then(function(reponse) {
            return reponse.json()
        }).then(function(jsonData) {
            let {
                search_results
            } = jsonData;
            displayResults(search_results)
        })
}






searchInputEl.addEventListener("keydown", searchWikipedia)