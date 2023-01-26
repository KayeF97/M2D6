//Shopping cart and ambassadors - BuildTime #2

/*
Details:    Today you are in charge of building the shopping cart logic for a website that supports ambassadors. 
            Your job is to build a program flow that will elaborate a list of prices, a user and a shipping cost to calculate the correct cart total. 

            If the user is an ambassador, the cart should be discounted of 30% BEFORE shipping cost (ambassadors still pay shipping)
            If the user is NOT an ambassador, the cart should NOT be discounted
            Either way, if the cart goes over 100, shipping cost should be 0.

            Some users as examples are already provided.
            
           
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
};

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
};

const prices = [100, 5, 2];
const shippingCost = 50;




//this if else loops tells us if the customer is an ambassador or not
   if (paul.isAmbassador === true){
        console.log("discount")
    }
    else {
        console.log("no discount")
    } 

    
 //this function gives the sum of the prices
    const totalCart = prices.reduce(function(a,b){
            return a +b;
           
        });
        //console.log(totalCart); 

  //these variables give the total prices after discount      
const ambassadorDiscount = ((30/100)*totalCart);
const finalDiscount = ((totalCart - ambassadorDiscount).toFixed(2));

//console.log(finalDiscount);



//these variables and if else loop give the final price customer needs to pay
const finalPrice = (parseInt(finalDiscount) + parseInt(shippingCost));

if (totalCart > 100){
    console.log("£" + finalDiscount);
}
else {
    console.log("£" + finalPrice);

}



console.log(finalPrice);


   


