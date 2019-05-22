// v0.1

let td = document.getElementsByTagName('td');

function color() {
    let value;
    for (let i = 0; i < td.length; i++) {
        value = parseInt(td[i].innerHTML);

        switch (value) {
            case 2      : td[i].style.backgroundColor = "aliceblue"; break;
            case 4      : td[i].style.backgroundColor = "cornflowerblue"; break;
            case 8      : td[i].style.backgroundColor = "darkorange"; break;
            case 16     : td[i].style.backgroundColor = "orangered"; break;
            case 32     : td[i].style.backgroundColor = "indianred"; break;
            case 64     : td[i].style.backgroundColor = "red"; break;
            case 128    : td[i].style.backgroundColor = "yellow"; break;
            case 256    : td[i].style.backgroundColor = "yellowgreen"; break;
            case 512    : td[i].style.backgroundColor = "forestgreen"; break;
            case 1024   : td[i].style.backgroundColor = "blueviolet"; break;
            case 2048   : td[i].style.backgroundColor = "violet"; break;

            default     : td[i].style.backgroundColor = "white";
        }
    }
}

function appear() {
    if (!isFull()) {
        let i = Math.round(Math.random() * 15);
        let value = Math.round(Math.random() * 4);

        while(td[i].innerHTML !== "") i = Math.round(Math.random() * 15);
        while(value !== 2 && value !== 4) value = Math.round(Math.random() * 4);

        td[i].innerHTML = "" + value;
    }
}

function isFull() {
    for (let i = 0; i < td.length; i++) if (td[i].innerHTML === "") return false;
    return true;
}

function up() {
    let value;
    let move = false;

    for (let i = 4; i <= 7; i++) {
        value = td[i].innerHTML;

        if (value !== "") {
            if (td[i - 4].innerHTML === "") {
                td[i - 4].innerHTML = value;
                td[i].innerHTML = "";
                move = true;
            } else if (td[i - 4].innerHTML === value) {
                td[i - 4].innerHTML = value * 2 + "";
                td[i].innerHTML = "";
                move = true;
            }
        }
    }

    for (let i = 8; i <= 11; i++) {
        value = td[i].innerHTML;

        if (value !== "") {
            if (td[i-4].innerHTML === "") {
                if (td[i - 8].innerHTML === "") {
                    td[i - 8].innerHTML = value;
                    td[i].innerHTML = "";
                    move = true;
                } else if (td[i - 8].innerHTML === value) {
                    td[i - 8].innerHTML = value * 2 + "";
                    td[i].innerHTML = "";
                    move = true;
                } else {
                    td[i - 4].innerHTML = value;
                    td[i].innerHTML = "";
                    move = true;
                }
            } else if (td[i-4].innerHTML === value) {
                td[i-4].innerHTML = value*2 + "";
                td[i].innerHTML = "";
                move = true;
            }
        }
    }

    for (let i = 12; i <= 15; i++) {
        value = td[i].innerHTML;

        if (value !== "") {
            if (td[i-4].innerHTML === "") {
                if (td[i - 8].innerHTML === "") {
                    if (td[i - 12].innerHTML === "") {
                        td[i - 12].innerHTML = value;
                        td[i].innerHTML = "";
                        move = true;
                    } else if (td[i - 12].innerHTML === value) {
                        td[i - 12].innerHTML = value * 2 + "";
                        td[i].innerHTML = "";
                        move = true;
                    } else {
                        td[i-8].innerHTML = value;
                        td[i].innerHTML = "";
                        move = true;
                    }
                } else if (td[i - 8].innerHTML === value) {
                    td[i - 8].innerHTML = value * 2 + "";
                    td[i].innerHTML = "";
                    move = true;
                } else {
                    td[i-4].innerHTML = value;
                    td[i].innerHTML = "";
                    move = true;
                }
            } else if (td[i-4].innerHTML === value) {
                td[i-4].innerHTML = value*2 + "";
                td[i].innerHTML = "";
                move = true;
            }
        }
    }

    if (move) {
        appear();
        color();
    }
}

function down() {
    let value;
    let move = false;

    for (let i = 8; i <= 11; i++) {
        value = td[i].innerHTML;

        if (value !== "") {
            if (td[i + 4].innerHTML === "") {
                td[i + 4].innerHTML = value;
                td[i].innerHTML = "";
                move = true;
            } else if (td[i + 4].innerHTML === value) {
                td[i + 4].innerHTML = value * 2 + "";
                td[i].innerHTML = "";
                move = true;
            }
        }
    }

    for (let i = 4; i <= 7; i++) {
        value = td[i].innerHTML;

        if (value !== "") {
            if (td[i+4].innerHTML === "") {
                if (td[i + 8].innerHTML === "") {
                    td[i + 8].innerHTML = value;
                    td[i].innerHTML = "";
                    move = true;
                } else if (td[i + 8].innerHTML === value) {
                    td[i + 8].innerHTML = value * 2 + "";
                    td[i].innerHTML = "";
                    move = true;
                } else {
                    td[i + 4].innerHTML = value;
                    td[i].innerHTML = "";
                    move = true;
                }
            } else if (td[i+4].innerHTML === value) {
                td[i+4].innerHTML = value*2 + "";
                td[i].innerHTML = "";
                move = true;
            }
        }
    }

    for (let i = 0; i <= 3; i++) {
        value = td[i].innerHTML;

        if (value !== "") {
            if (td[i+4].innerHTML === "") {
                if (td[i + 8].innerHTML === "") {
                    if (td[i + 12].innerHTML === "") {
                        td[i + 12].innerHTML = value;
                        td[i].innerHTML = "";
                        move = true;
                    } else if (td[i + 12].innerHTML === value) {
                        td[i + 12].innerHTML = value * 2 + "";
                        td[i].innerHTML = "";
                        move = true;
                    }  else {
                        td[i+8].innerHTML = value;
                        td[i].innerHTML = "";
                        move = true;
                    }
                } else if (td[i + 8].innerHTML === value) {
                    td[i + 8].innerHTML = value * 2 + "";
                    td[i].innerHTML = "";
                    move = true;
                }  else {
                    td[i+4].innerHTML = value;
                    td[i].innerHTML = "";
                    move = true;
                }
            } else if (td[i+4].innerHTML === value) {
                td[i+4].innerHTML = value*2 + "";
                td[i].innerHTML = "";
                move = true;
            }
        }
    }

    if (move) {
        appear();
        color();
    }
}

function left() {
    let value;
    let move = false;

    for (let i = 1; i <= 13; i += 4) {
        value = td[i].innerHTML;

        if (value !== "") {
            if (td[i-1].innerHTML === "") {
                td[i-1].innerHTML = value;
                td[i].innerHTML = "";
                move = true;
            } else if (td[i-1].innerHTML === value) {
                td[i-1].innerHTML = value * 2 + "";
                td[i].innerHTML = "";
                move = true;
            }
        }
    }

    for (let i = 2; i <= 14; i += 4) {
        value = td[i].innerHTML;

        if (value !== "") {
            if (td[i-1].innerHTML === "") {
                if (td[i-2].innerHTML === "") {
                    td[i-2].innerHTML = value;
                    td[i].innerHTML = "";
                    move = true;
                } else if (td[i-2].innerHTML === value) {
                    td[i-2].innerHTML = value * 2 + "";
                    td[i].innerHTML = "";
                    move = true;
                } else {
                    td[i-1].innerHTML = value;
                    td[i].innerHTML = "";
                    move = true;
                }
            } else if (td[i-1].innerHTML === value) {
                td[i-1].innerHTML = value*2 + "";
                td[i].innerHTML = "";
                move = true;
            }
        }
    }

    for (let i = 3; i <= 15; i += 4) {
        value = td[i].innerHTML;

        if (value !== "") {
            if (td[i-1].innerHTML === "") {
                if (td[i-2].innerHTML === "") {
                    if (td[i-3].innerHTML === "") {
                        td[i-3].innerHTML = value;
                        td[i].innerHTML = "";
                        move = true;
                    } else if (td[i-3].innerHTML === value) {
                        td[i-3].innerHTML = value * 2 + "";
                        td[i].innerHTML = "";
                        move = true;
                    }  else {
                        td[i-2].innerHTML = value;
                        td[i].innerHTML = "";
                        move = true;
                    }
                } else if (td[i-2].innerHTML === value) {
                    td[i-2].innerHTML = value * 2 + "";
                    td[i].innerHTML = "";
                    move = true;
                }  else {
                    td[i-1].innerHTML = value;
                    td[i].innerHTML = "";
                    move = true;
                }
            } else if (td[i-1].innerHTML === value) {
                td[i-1].innerHTML = value*2 + "";
                td[i].innerHTML = "";
                move = true;
            }
        }
    }

    if (move) {
        appear();
        color();
    }
}

function right() {
    let value;
    let move = false;

    for (let i = 2; i <= 14; i += 4) {
        value = td[i].innerHTML;

        if (value !== "") {
            if (td[i+1].innerHTML === "") {
                td[i+1].innerHTML = value;
                td[i].innerHTML = "";
                move = true;
            } else if (td[i+1].innerHTML === value) {
                td[i+1].innerHTML = value * 2 + "";
                td[i].innerHTML = "";
                move = true;
            }
        }
    }

    for (let i = 1; i <= 13; i += 4) {
        value = td[i].innerHTML;

        if (value !== "") {
            if (td[i+1].innerHTML === "") {
                if (td[i+2].innerHTML === "") {
                    td[i+2].innerHTML = value;
                    td[i].innerHTML = "";
                    move = true;
                } else if (td[i+2].innerHTML === value) {
                    td[i+2].innerHTML = value * 2 + "";
                    td[i].innerHTML = "";
                    move = true;
                } else {
                    td[i+1].innerHTML = value;
                    td[i].innerHTML = "";
                    move = true;
                }
            } else if (td[i+1].innerHTML === value) {
                td[i+1].innerHTML = value*2 + "";
                td[i].innerHTML = "";
                move = true;
            }
        }
    }

    for (let i = 0; i <= 12; i += 4) {
        value = td[i].innerHTML;

        if (value !== "") {
            if (td[i+1].innerHTML === "") {
                if (td[i+2].innerHTML === "") {
                    if (td[i+3].innerHTML === "") {
                        td[i+3].innerHTML = value;
                        td[i].innerHTML = "";
                        move = true;
                    } else if (td[i+3].innerHTML === value) {
                        td[i+3].innerHTML = value * 2 + "";
                        td[i].innerHTML = "";
                        move = true;
                    }  else {
                        td[i+2].innerHTML = value;
                        td[i].innerHTML = "";
                        move = true;
                    }
                } else if (td[i+2].innerHTML === value) {
                    td[i+2].innerHTML = value * 2 + "";
                    td[i].innerHTML = "";
                    move = true;
                }  else {
                    td[i+1].innerHTML = value;
                    td[i].innerHTML = "";
                    move = true;
                }
            } else if (td[i+1].innerHTML === value) {
                td[i+1].innerHTML = value*2 + "";
                td[i].innerHTML = "";
                move = true;
            }
        }
    }

    if (move) {
        appear();
        color();
    }
}

document.addEventListener("keydown", event => {
    switch (event.key) {
        case "ArrowUp"      : up(); break;
        case "ArrowDown"    : down(); break;
        case "ArrowLeft"    : left(); break;
        case "ArrowRight"   : right();
    }
});

//begin of the game
appear(); appear();
color();