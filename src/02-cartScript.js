import { productLog } from "./productsLog.js";


document.querySelectorAll('.cartButton').forEach((buttonItem)=>{
    buttonItem.addEventListener("click",()=>{

        let action = buttonItem.dataset.action;
        const cartPannel = document.querySelector('.cartPannel');
            if(action==="open"){
                cartPannel.classList.toggle("right-[-100%]");
                cartPannel.classList.toggle("right-0");
            }
    })
});


//creating addToCart products Array

const cartProducts =[];
//order button eventListener 
document.querySelector('.showMyProducts').addEventListener("click",(event)=>{

     let triggerButton = event.target.closest('.orderButton');
        if(triggerButton){
         //getting product id from button dataset
         let productId = triggerButton.dataset.productId;
         console.log(productId);
         
         // find product in prductLog array
         let myProduct = findMyProduct(productId);
         
         //checking if we found out the product on not??
         let productAvailability =false;
         
         
         // updating product in cartProducts array if product is available already
         cartProducts.forEach((cartProductsItem)=>{
             if(myProduct.id === cartProductsItem.id){
                 //updating quantity 
                 cartProductsItem.quantity += 1;
                 //updating total price 
                 cartProductsItem.totalPrice =  Number(cartProductsItem.price.replace(/,/g,"")) *  cartProductsItem.quantity;
                 productAvailability = true;
                };
            });
            
            // push product in cartProducts array if not available
            if(!productAvailability){
                myProduct.quantity = 1; // Initial quantity
                myProduct.totalPrice = Number(myProduct.price.replace(/,/g, "")) * myProduct.quantity; // Calculate total price
                cartProducts.push(myProduct);
            }
            
            
            
            displayCart();
        }
 });



function findMyProduct(productIdParam){

    let myProduct = productLog.find(filterItem=> filterItem.id === productIdParam);
    if(myProduct){
        return{
            ...myProduct,
            quantity:1,
            totalPrice: Number(myProduct.price.replace(/,/g,""))
        };

    }

 return null
};

console.log(cartProducts);
// adding cartProducts on cartItemsDiv
// adding cartProducts on cartItemsDiv
function displayCart(){

    let tempHtml ="";
    
    cartProducts.forEach((item)=>{
        tempHtml +=`<div class="flex gap-x-2 px-4 py-8 overflow-y-scroll">
        <div class="h-5 w-12">
        <img class="min-h-full w-full" src="${item.image}">
        </div>
        <div class=""></div>
        <p>${item.name}<span class="block"> quant: ${item.quantity}</span></p>
        </div>`;
    })
    
    document.querySelector('.cartItemsDiv').innerHTML = tempHtml;

    // dispkaying total amount and totol products

   const totalPrice = cartProducts.reduce((accumulator, item)=>{
         return accumulator + item.totalPrice;
   },0);

   document.querySelector('.cartTotalAmount').innerText = totalPrice.toLocaleString();
}
