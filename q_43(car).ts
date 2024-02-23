function createCar(manufacturer: string, model: string, arbitrary:number, color?:string)

{
	this.manufacturer = manufacturer
    this.model = model
    this.arbitrary = arbitrary
    this.color = color
    
    if(typeof this.color !== 'undefined')
    {
    	console.log("Manufacturer: " + this.manufacturer)
        console.log("Model: " + this.model)
        console.log("Abitrary Num: " + this.arbitrary)
        console.log("Color: " + this.color)
    }
    else{
    	console.log("Manufacturer: " + this.manufacturer)
        console.log("Model: " + this.model)
        console.log("Abitrary Num: " + this.arbitrary)
    }
    
  
}

createCar("Toyota", "Corolla",3929923)
createCar("Toyota", "Corolla",3929923, "red")