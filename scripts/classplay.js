"use strict";
function Car ( model,brand,year) {

    this.model = model;
    this.brand = brand;
    this.year = year;

    this.getInfo = function () {
        return this.model + ' ' + brand + ' ' + year;
    }
    this.setInfo = function (newModel, newBrand,newYear) {
        this.model = newModel;
        this.brand = newBrand;
        this.year = newYear;
    }
    this.loggin = function () {
        console.log(this);
    }
}

let myCar = new Car("mustang","ford","2020");
console.log(myCar);
myCar.setInfo ("Countach","lambo","2020");
console.log(myCar);
myCar.loggin();