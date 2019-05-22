class Case {
    constructor(td) {
        this.td = document.getElementById(td.id);
        this.x = td.id % 4;
        this.y = Math.trunc(td.id / 4);
        this.value = td.innerHTML;
        this.justchange = false;
    }

    getVal() {
        return this.value;
    }

    setVal(value) {
        this.value = value;
    }

    getTd() {
        return this.td;
    }

    setTd(td) {
        this.td = td;
    }

    getX() {
        return parseInt(this.x);
    }

    getY() {
        return parseInt(this.y);
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }

    clearVal() {
        this.setVal("");
        this.td.style.backgroundColor = "white";
    }

    double() {
        this.value *= 2;
    }

    isEmpty() {
        return this.getVal() === "";
    }

    equals(c) {
        return parseInt(this.getVal()) === parseInt(c.getVal());
    }

    hasChanged() {
        this.justchange = true;
    }

    justChange() {
        return this.justchange;
    }

    resetChange() {
        this.justchange = false;
    }

}