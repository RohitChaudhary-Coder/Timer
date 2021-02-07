drinks=["White Russian","Pina Colada","Beer","Champagne","Gin and Tonic","Madonna","Whiskey Sour","Tequila","Pomegranate Martini"]
var costumer=["Jennifer","Kim","Barack","Taylor","Angelina","Madonnas","Jay","Rowling"]
drink_like_by_costumer={"Jennifer":"White Russian","Kim":"Pina Colada","Barack":"Beer",
"Taylor":"Whiskey Sour","Angelina":"Tequila","Madonna":"Pomegranate Martini",
"Jay":"Champagne","Rowling":"Gin and Tonic"}

for (  i in  Object.values(drink_like_by_costumer)){
    console.log(i)
    if ( i in drinks ){
        drinks.pop(i); 
        console.log(drinks)
        // console.log(drink_like_by_costumer)
        delete drink_like_by_costumer.i;
   }
    else {       
        console.log("drinks")
    }    
}
// console.log(drink_in_odj);
// console.log(drink_like_by_costumer.Jay)
// console.log()
// console.log(drinks)
// console.log(drinks)
// console.log(drink_like_by_costumer)
// drink_in_odj=drink_like_by_costumer.values()