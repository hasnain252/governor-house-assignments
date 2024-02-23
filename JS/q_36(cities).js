function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    this.city = city;
    this.country = country;
    console.log(this.city + " Is in " + this.country);
}
describe_city("Karachi");
describe_city("Paris", "France");
describe_city("New york", "USA");
