const games = [
    {title: "BALDUR'S GATE II: SHADOWS OF AMN", genre: "Role-Playing", years: 2000, rating: 95},
    {title: "PORTAL 2", genre: "Action", years: 2011, rating: 95},
    {title: "MASS EFFECT 2", genre: "Role-Playing", years: 2010, rating: 94},
    {title: "SID MEIER'S CIVILIZATION II", genre: "Strategy", years: 1996, rating: 94},
    {title: "THE ELDER SCROLLS IV: OBLIVION", genre: "Role-Playing", years: 2006, rating: 94},
    {title: "DIABLO", genre: "Role-Playing", years: 1996, rating: 94},
    {title: "THE WITCHER 3: WILD HUNT", genre: "Action RPG", years: 2015, rating: 93},
    {title: "DIVINITY: ORIGINAL SIN II", genre: "Action RPG", years: 2017, rating: 93}
];

const elemPage = document.querySelector(".games");
const btnSort = document.querySelectorAll(".btn");

const ulGame = document.createElement("ul");
const togSymbol = document.createElement("span");

togSymbol.setAttribute("id", "toggle__elem");

let toggle = false;

const addListOfGame = () => {
    for (let element of games) {
        ulGame.innerHTML +=`<li class="game_elem_title">${element.title}, genre ${element.genre}, years ${element.years}, rating ${element.rating}</li>`;
    }
    elemPage.appendChild(togSymbol);
    elemPage.appendChild(ulGame);
}

const removeData = () => {
    ulGame.innerHTML = '';
}

const sortedByTitle = () => {
    if (toggle === false) {
        games.sort((a, b) => a.title > b.title ? 1 : -1);
        togSymbol.innerHTML = "▼";
        toggle = true;
    } else {
        games.sort((a, b) => a.title < b.title ? 1 : -1);
        togSymbol.innerHTML = "▲";
        toggle = false;
    }
}

const sortedByYear = () => {
    if (toggle === false) {
        games.sort((a, b) => a.years > b.years ? 1 : -1);
        togSymbol.innerHTML = "▼";
        toggle = true;
    } else {
        games.sort((a, b) => a.years < b.years ? 1 : -1);
        togSymbol.innerHTML = "▲";
        toggle = false;
    }
}

const sortedByRating = () => {
    if (toggle === false) {
        games.sort((a, b) => a.rating > b.rating ? 1 : -1);
        togSymbol.innerHTML = "▼";
        toggle = true;
    } else {
        games.sort((a, b) => a.rating < b.rating ? 1 : -1);
        togSymbol.innerHTML = "▲";
        toggle = false;
    }
}

const pushBtn = () => {
    for (let elem of btnSort) {
        elem.addEventListener("click", (e) => {
            switch (e.target.id) {
                case "alphabetGame":
                    sortedByTitle();
                    removeData();
                    addListOfGame();
                    break;
                case "yearGame":
                    sortedByYear();
                    removeData();
                    addListOfGame();
                    break;
                case "ratingGame":
                    sortedByRating();
                    removeData();
                    addListOfGame();
                    break;
            }
        });
    }
}

const init = () => {
    addListOfGame();
    pushBtn();
}

init();