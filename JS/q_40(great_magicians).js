var magicianNames = ["Merlin", "Houdini", "Gandalf", "David Copperfield"];
function make_great(magician) {
    for (var _i = 0, magician_1 = magician; _i < magician_1.length; _i++) {
        var great = magician_1[_i];
        console.log("Great " + great);
    }
}
make_great(magicianNames);
