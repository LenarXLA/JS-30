const endpoint = "https://gist.githubusercontent.com/gorborukov/0722a93c35dfba96337b/raw/435b297ac6d90d13a68935e1ec7a69a225969e58/russia";

const cities = [];

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".results");

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, "gi");
        return place.city.match(regex) || place.region.match(regex)
    });
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    suggestions.innerHTML = matchArray.map(place => {
        const regex = new RegExp(this.value, "gi");
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.region.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
<li>
<span class="name">${cityName}, ${stateName}</span>
</li>
`;
    }).join("");
}

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);