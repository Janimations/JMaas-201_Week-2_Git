


// idea: to separate methods from properties and store all data-arrays in another set of objects...
// problem: how to define in the constructor to pair with the right object? 


function pizzaShopData(name) {

    this.shopName = name;

    this.openingHours = [];  // gets populated by related pizzaShop Object






    this.changeOjectName = function (){
        this.shopName = this.shopName + "-Data";
    };

    this.changeOjectName();

}; // pizzaShopData close
