import { productLog } from "./productsLog.js";

//MenuForPhone
//MenuForPhone
const menuForPhone = document.getElementById('menuForPhone');
document.querySelectorAll('.menuForPhoneButton').forEach((btn)=>{
    btn.addEventListener("click",()=>{
        openMenu();
    })
})
;

function openMenu(){

    menuForPhone.classList.toggle('hidden');
    console.log("working!")
   document.querySelector('main').classList.toggle('hidden');

};

    // menu Hover effect
    document.querySelectorAll('.js-headerLinks').forEach((linkItem)=>{
    
             linkItem.addEventListener("mouseover",()=>{
                blurBgFunction("add");     
                 
   });
             linkItem.addEventListener("mouseout",()=>{
                blurBgFunction("remove");     
                 
   });
})

    // carousel items 
    const carousel = document.querySelector('.carousel');

    const carouselArray =[
        {
        title:"Popular",
        tag:"popular"
    },
        {
        title:"New",
        tag:"new"
    },
        {
        title:"Feature",
        tag:"featuring"
    }
]
 let htmlGenerator="";
 
 
 carouselArray.forEach((item)=>{
     
     htmlGenerator += ` 
     <div data-tag-name = "${item.tag}" class="carouselItems min-h-max relative flex flex-col rounded-2xl cursor-pointer w-max snap-start hover:bg-black">
     <p class="text-black font-PopinsStyle font-normal p-2 md:text-lg lg:text-xl hover:text-white ">${item.title}</p>
     </div>
        `
        
     
    });
   
    carousel.innerHTML=htmlGenerator;

    

    // buttons
    // buttons
    document.querySelectorAll('.carouselButton').forEach((item)=>{
        item.addEventListener("click",()=>{
            
            let buttonName = item.dataset.buttonName;
            
            let carouselElementSize = carousel.querySelector('.carouselItems').clientWidth;
            
            carousel.scrollLeft += buttonName==="rightBtn"? carouselElementSize : - carouselElementSize;
        });
        
    });
    // buttons



  //showMy products
  //showMy products
  let showMyProducts = document.querySelectorAll('.showMyProducts');

  function defaultProducts(){
    showMyProducts.forEach((item)=>{
        let productType= item.dataset.productType;
        let tempArray = productLog.filter(filterItem => filterItem.description.includes(productType));
        let tempHtml = displayProductsFunction(tempArray);
        item.innerHTML = tempHtml;
     });

  };
  defaultProducts();

    //tags products
    //tags products
    
    document.querySelectorAll('.carouselItems').forEach((carouselItem)=>{
        carouselItem.addEventListener("click",()=>{
         showMyProducts.forEach((item)=>{

                item.dataset.productType = carouselItem.dataset.tagName;

            });

             //showMy products
             //showMy products
            showMyProducts.forEach((item)=>{
                   let productType= item.dataset.productType;
                   let tempArray = productLog.filter(filterItem => filterItem.description.toLowerCase().includes(productType));
                   let tempHtml = displayProductsFunction(tempArray);
                   item.innerHTML = tempHtml;
                });
              
        });// click event ends here
    })
   
    
    function displayProductsFunction(tempArray){
       let tempHtml='';
       if(tempArray){
           tempArray.forEach((item)=>{
               tempHtml += `<div class="productClass shadow-md lg:shadow-none grid grid-cols-1 grid-rows-[50%_50%] place-items-cente bg-${item.color} border-2 lg:border-none relative min-h-full bg-[url()] bg-cover overflow-hidden rounded-xl">
               <img class="row-start-1 row-end-1 h-[70%] md:min-h-full w-50 object-center m-auto" src="${item.image}" alt="img" loading="lazy">
               <div class="productDetailsDiv row-start-2 row-end-2 flex flex-col justify-between">
               
               <div class="extraDetailsDiv px-4 flex flex-col gap-4 items-center overflow-x-scroll md:overflow-x-hidden">
               <span class=" font-PopinsStyle font-bold text-wrap  md:text-2xl">${item.name}</span> 
               <span  class=" text-gray-500 block font-PopinsStyle font-bold text-wrap text-[0.5rem] md:text-[0.6rem] lg:text-[0.8rem] ">${item.description}</span> 
               
               </div>
               <button data-product-id="${item.id}" class="orderButton border-t-2 lg:border-b-2 border-b-0 w-full text-black lg:hover:bg-black lg:hover:text-white  px-4 py-1 mb-1 mt-auto cursor-pointer md:px-10">Order - <span class=" block md:inline-block"> ₹ ${(item.price).toLocaleString()}</span></button>
               </div>
               </div>`
               
               
            });
        }
        return tempHtml;
    }


    // showing SubMenu 
    // showing SubMenu
   const blurBgFunction= (actionParam)=>{

       const main = document.querySelector('main');
       if(actionParam==="add"){
           main.classList.add("blur-lg");
        
       }
       else if(actionParam==="remove"){
           main.classList.remove("blur-lg");
        
       }
   }

   //background blur hover on subMenu
   

   document.querySelectorAll('.subMenus').forEach((subMenuItem)=>{
       subMenuItem.addEventListener("mouseover",()=>{
         let spanElement = subMenuItem.parentElement.querySelector('span');
         spanElement.classList.add("visiblespan");
         blurBgFunction("add");
        });
        subMenuItem.addEventListener("mouseout",()=>{
            let spanElement = subMenuItem.parentElement.querySelector('span');
         spanElement.classList.remove("visiblespan");
            blurBgFunction("remove");
        });
        subMenuItem.querySelectorAll('.sublinks').forEach((linkItem)=>{
            linkItem.addEventListener("click",()=>{
                blurBgFunction("remove");

            });

        });
    })
    
    //background blur hover on headerNavClass


