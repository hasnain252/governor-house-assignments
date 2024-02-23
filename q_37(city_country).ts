function city_country(city:string, country:string = "Pakistan")
{
	this.city = city
    this.country = country

    console.log("\""+ this.city + ", " + this.country +"\"")

}

city_country("Karachi")
city_country("Paris","France")
city_country("New york","USA")


