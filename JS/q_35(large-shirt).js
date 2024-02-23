function make_shirt(size, msg) {
    if (size === void 0) { size = "L"; }
    if (msg === void 0) { msg = "I love TypeScript"; }
    this.size = size;
    this.msg = msg;
    console.log("Size: " + this.size + "  Message: " + this.msg);
}
make_shirt("XL", "The boys");
