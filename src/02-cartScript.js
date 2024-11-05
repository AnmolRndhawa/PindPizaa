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

let cartProducts =[];
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
            cartIconAnimaion();
            notiFyMeFunction();
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


// cart products structre
// cart products structre
// cart products structre


console.log(cartProducts);
// adding cartProducts on cartItemsDiv
// adding cartProducts on cartItemsDiv
function displayCart(){

    let tempHtml ="";
    
    cartProducts.forEach((item)=>{
        tempHtml +=`<div class="flex items-center gap-x-4 overflow-hidden">
        
        <div class="h-10 w-12 relative">
        <img class="object-center object-cover" src="${item.image}">
        </div>

        <div class="">
        <p class="">${item.name}<span class="block"> Qty: ${item.quantity}</span></p>
        </div>
       
         <div data-item-id="${item.id}" class="removeItemInCart h-[30px] w-[30px] flex items-center text-center opacity-[0.5] ml-auto cursor-pointer">
          <img class="min-h-full w-full" src="src/images/icons/cross-svgrepo-com.svg" type="svg" alt="Img">
         </div>
        
        </div>`;
    })
    
    document.querySelector('.cartItemsDiv').innerHTML = tempHtml;

    // dispkaying total amount and totol products

   const totalPrice = cartProducts.reduce((accumulator, item)=>{
         return accumulator + item.totalPrice;
   },0);

   const totalPoducts = cartProducts.reduce((accumulator, item)=>{
         return accumulator + item.quantity;
   },0);

   document.querySelector('.cartTotalAmount').innerText = totalPrice.toLocaleString();
   document.querySelector('.cartTotalProduct').innerText = totalPoducts.toLocaleString();
}





// removing item from add to cart function
// removing item from add to cart function
// removing item from add to cart function

document.querySelectorAll('.cartItemsDiv').forEach((divItem)=>{
    
    divItem.addEventListener("click",(event)=>{
        if(event.target.closest(".removeItemInCart")){
            let targetItem = event.target.closest(".removeItemInCart");
            let itemId = targetItem.dataset.itemId;
            
            if(itemId){
                removeItemFromCart(itemId);
            }else{
                console.log("itemId not avai");

            }
            
        };

        displayCart();
    });
    
    
})
function removeItemFromCart(idParam){
    cartProducts = cartProducts.filter(productItem=> productItem.id !==idParam);

}

// extra functions 
// extra functions 


// cartIconAnimaion 

function cartIconAnimaion(){
const cartButton = document.querySelector('.cartButton');
cartButton.classList.add("AnimateMe-gadient");

setTimeout(()=>{
    cartButton.classList.remove("AnimateMe-gadient");

},1000);
}

//nofication notiFyMe

function notiFyMeFunction(){
    document.querySelector('.notiFyMe').classList.remove("hidden");
    document.querySelector('.notiFyMe').classList.add("flex");
    setTimeout(()=>{
        document.querySelector('.notiFyMe').classList.remove("flex");
        document.querySelector('.notiFyMe').classList.add("hidden");

    },2000);
}