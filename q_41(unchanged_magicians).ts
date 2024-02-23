var magicianNames: string[] = ["Merlin", "Houdini", "Gandalf", "David Copperfield"];

function make_great(magician:string[])
{
    for(var great of magician)
    {
        console.log("Great "+great)
    }
}
make_great(magicianNames)

console.log("---------------------------------------------------")

function showMagicians(magicians: string[]){
    for (var magician of magicians) {
        console.log(magician);
    }
}

var magicianNames: string[] = ["Merlin", "Houdini", "Gandalf", "David Copperfield"];

showMagicians(magicianNames);
