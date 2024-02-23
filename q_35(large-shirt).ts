function make_shirt(size:string = "L", msg:string = "I love TypeScript")
{
	this.size = size
    this.msg = msg

    console.log("Size: "+ this.size + "  Message: " + this.msg)

}

make_shirt("XL","The boys")
