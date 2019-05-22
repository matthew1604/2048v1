class Grille {
    constructor(tabCase) {
        this.tabCase = tabCase;
    }

    refresh() {
        for (let c of this.tabCase) {
            c.resetChange();
            c.getTd().innerHTML = c.getVal() + "";

            switch (parseInt(c.getVal())) {
                case 2      : c.getTd().style.backgroundColor = "aliceblue"; break;
                case 4      : c.getTd().style.backgroundColor = "cornflowerblue"; break;
                case 8      : c.getTd().style.backgroundColor = "darkorange"; break;
                case 16     : c.getTd().style.backgroundColor = "orangered"; break;
                case 32     : c.getTd().style.backgroundColor = "indianred"; break;
                case 64     : c.getTd().style.backgroundColor = "red"; break;
                case 128    : c.getTd().style.backgroundColor = "yellow"; break;
                case 256    : c.getTd().style.backgroundColor = "yellowgreen"; break;
                case 512    : c.getTd().style.backgroundColor = "forestgreen"; break;
                case 1024   : c.getTd().style.backgroundColor = "blueviolet"; break;
                case 2048   : c.getTd().style.backgroundColor = "violet"; break;

                default     : c.getTd().style.backgroundColor = "white";
            }
        }
    }

    appendValue(times) {
        for (let i = 0; i < times; i++) {
            let numCase = Math.round(Math.random() * 15);
            let nb = Math.round(Math.random() * 4);

            while (!this.tabCase[numCase].isEmpty()) numCase = Math.round(Math.random() * 15);
            while (nb !== 2 && nb !== 4) nb = Math.round(Math.random() * 4);

            this.tabCase[numCase].setVal(nb);
        }
        this.refresh();
    }

    getCaseByCoords(x, y) {
        for (let c of this.tabCase) {
            if (c.getX() == parseInt(x) && c.getY() == parseInt(y)) return c;
        }
    }

    above(c) {
        if (c.getY() > 0) return this.getCaseByCoords(c.getX(), c.getY() - 1);
        else return false;
    }

    below(c) {
        if (c.getY() < 3) return this.getCaseByCoords(c.getX(), c.getY() + 1);
        else return false;
    }

    onleft(c) {
        if (c.getX() > 0) return this.getCaseByCoords(c.getX() - 1, c.getY());
        else return false;
    }

    onright(c) {
        if (c.getX() < 3) return this.getCaseByCoords(c.getX() + 1, c.getY());
        else return false;
    }

    canMoveUp(c) {
        if (this.above(c) !== false) return this.above(c).isEmpty() || (this.above(c).equals(c) && !this.above(c).justChange());
        else return false;
    }

    moveup(c) {
        let cUp = this.above(c);
        if (cUp !== false) {
            if (c.equals(cUp)) {
                cUp.double();
                c.clearVal();
                cUp.hasChanged();
            } else if (cUp.isEmpty()) {
                let tmp = cUp.getTd();

                cUp.setY(cUp.getY() + 1);
                c.setY(c.getY() - 1);

                cUp.setTd(c.getTd());
                c.setTd(tmp);
            }
        }
    }

    canMoveDown(c) {
        if (this.below(c) !== false) return this.below(c).isEmpty() || (this.below(c).equals(c) && !this.below(c).justChange());
        else return false;
    }

    movedown(c) {
        let cDown = this.below(c);
        if (cDown !== false) {
            if (c.equals(cDown)) {
                cDown.double();
                c.clearVal();
                cDown.hasChanged();
            } else if (cDown.isEmpty()) {
                let tmp = cDown.getTd();

                cDown.setY(cDown.getY() - 1);
                c.setY(c.getY() + 1);

                cDown.setTd(c.getTd());
                c.setTd(tmp);
            }
        }
    }

    canMoveLeft(c) {
        if (this.onleft(c) !== false) return this.onleft(c).isEmpty() || (this.onleft(c).equals(c) && !this.onleft(c).justChange());
        else return false;
    }

    moveleft(c) {
        let cLeft = this.onleft(c);
        if (cLeft !== false) {
            if (c.equals(cLeft)) {
                cLeft.double();
                c.clearVal();
                cLeft.hasChanged();
            } else if (cLeft.isEmpty()) {
                let tmp = cLeft.getTd();

                cLeft.setX(cLeft.getX() + 1);
                c.setX(c.getX() - 1);

                cLeft.setTd(c.getTd());
                c.setTd(tmp);
            }
        }
    }

    canMoveRight(c) {
        if (this.onright(c) !== false) return this.onright(c).isEmpty() || (this.onright(c).equals(c) && !this.onright(c).justChange());
        else return false;
    }

    moveright(c) {
        let cRight = this.onright(c);
        if (cRight !== false) {
            if (c.equals(cRight)) {
                cRight.double();
                c.clearVal();
                cRight.hasChanged();
            } else if (cRight.isEmpty()) {
                let tmp = cRight.getTd();

                cRight.setX(cRight.getX() - 1);
                c.setX(c.getX() + 1);

                cRight.setTd(c.getTd());
                c.setTd(tmp);
            }
        }
    }

    up() {
        let c, moved = false;
        for (let y = 1; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                c = this.getCaseByCoords(x, y);
                if (!c.isEmpty()) while (this.canMoveUp(c)) {
                    moved = true;
                    this.moveup(c);
                }
            }
        }

        if (moved) this.appendValue(1);
        this.refresh();
    }

    down() {
        let c, moved = false;
        for (let y = 2; y >= 0; y--) {
            for (let x = 0; x < 4; x++) {
                c = this.getCaseByCoords(x, y);
                if (!c.isEmpty()) while (this.canMoveDown(c)) {
                    moved = true;
                    this.movedown(c);
                }
            }
        }

        if (moved) this.appendValue(1);
        this.refresh();
    }

    left() {
        let c, moved = false;
        for (let x = 1; x < 4; x++) {
            for (let y = 0; y < 4; y++) {
                c = this.getCaseByCoords(x, y);
                if (!c.isEmpty()) while (this.canMoveLeft(c)) {
                    moved = true;
                    this.moveleft(c);
                }
            }
        }

        if (moved) this.appendValue(1);
        this.refresh();
    }

    right() {
        let c, moved = false;
        for (let x = 2; x >= 0; x--) {
            for (let y = 0; y < 4; y++) {
                c = this.getCaseByCoords(x, y);
                if (!c.isEmpty()) while (this.canMoveRight(c)) {
                    moved = true;
                    this.moveright(c);
                }
            }
        }

        if (moved) this.appendValue(1);
        this.refresh();
    }

}