let tds = document.getElementsByTagName('td');
let tabCase = [];

for (td of tds) {
    tabCase.push(new Case(td));
}

let grille = new Grille(tabCase);
grille.appendValue(2);

document.addEventListener("keydown", event => {
    switch (event.key) {
        case "ArrowUp"      : grille.up(); break;
        case "ArrowDown"    : grille.down(); break;
        case "ArrowLeft"    : grille.left(); break;
        case "ArrowRight"   : grille.right();
    }
});