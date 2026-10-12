class Vehicle {
    vehicleno: Number = 1001
    brand: String = "BMW"
    color: String = "Black"
    price: Number = 1000000
    
    getVehicleData() 
    {
        console.log("Vehicle No: " + this.vehicleno + "\n" + "Brand: " + this.brand + "\n" + "Color: " + this.color + "\n" + "Price: " + this.price)
    }
}
let v = new Vehicle()
v.getVehicleData()