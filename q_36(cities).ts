function describe_city(city:string, country:string = "Pakistan")
{
	this.city = city
    this.country = country

    console.log(this.city  + " Is in "+this.country)

}

describe_city("Karachi")
describe_city("Paris","France")
describe_city("New york","USA")


