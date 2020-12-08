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

const sorted = type => toggle ? execute(type, "▲") : execute(type, "▼");

const execute = (type, symbol) => {
    games.sort((a, b) => (
        symbol === "▼"
            ? a[type] > b[type]
            : a[type] < b[type]
    )
        ? 1
        : -1);
    togSymbol.innerHTML = symbol;
    toggle = !toggle;
}

const pushBtn = () => {
    for (let elem of btnSort) {
        elem.addEventListener("click", (e) => {
            switch (e.target.id) {
                case "alphabetGame":
                    sorted("title");
                    break;
                case "yearGame":
                    sorted("years");
                    break;
                case "ratingGame":
                    sorted("rating");
                    break;
            }
            removeData();
            addListOfGame();
        });
    }
}

const init = () => {
    addListOfGame();
    pushBtn();
}

init();