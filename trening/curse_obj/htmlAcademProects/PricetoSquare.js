let materialPrice = {
    'wood': 1000,
    'stone': 1500,
    'brick': 2000
};

let house = {
    rooms: 10,
    floors: 5,
    material: 'wood',
    coefficient: 10.5,

    calculateSquare: function(){
        return this.rooms * this.coefficient * this.floors;
    },

    calculatePrice: function(){
        return house.calculateSquare() *   materialPrice[this.material];
    }
};

console.log(house.calculateSquare() + " " +  house.calculatePrice());