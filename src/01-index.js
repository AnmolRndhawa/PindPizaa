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
        image:"src/images/banner/SpicyB.webp",
        title:"Fast",
        link:"test.html"
    },
        {
        image:"src/images/banner/SoupB.webp",
        title:"Soup",
        link:"test.html"
    },
        {
        image:"src/images/banner/DrinksB.webp",
        title:"Drinks",
        link:"test.html"
    },
        {
        image:"src/images/banner/HealtyB.webp",
        title:"All Items",
        link:"test.html"
    }
]
 let htmlGenerator="";
 
 
 carouselArray.forEach((item)=>{
     
     htmlGenerator += ` 
     <a href="${item.link}" class=" min-h-36 bg-black carouselItems relative flex flex-col rounded-2xl w-[calc(100vw/3.8)] md:w-[calc(100vw/8)] snap-start">
     <img src="${item.image}" alt="img" loading="lazy">
     <p class="text-[#252525] bg-white absolute pl-4 pr-1">${item.title}</p>
     </a>
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
    showMyProducts.forEach((item)=>{
       let productType= item.dataset.productType;
       let tempArray = productLog.filter(filterItem => filterItem.description.includes(productType));
       console.log(tempArray);
       let tempHtml = displayProductsFunction(tempArray);

       item.innerHTML = tempHtml;
    });
    
    function displayProductsFunction(tempArray){
       let tempHtml='';
       tempArray.forEach((item)=>{
         tempHtml += `<div class="productClass shadow-md grid grid-cols-1 grid-rows-[60%_40%] bg-white border-2 relative min-h-64 bg-[url()] bg-cover overflow-hidden rounded-xl ">
                <img class="row-start-1 row-end-1 h-full w-full object-cover" src="${item.image}" alt="img" loading="lazy">
                <div class="productDetailsDiv row-start-2 row-end-2 flex flex-col justify-between">

                <div class="extraDetailsDiv px-2">
                <span class="text-${item.color} font-PopinsStyle font-bold text-wrap  md:text-2xl">${item.name}</span> 
                <span  class="text-${item.color} text-gray-500 block font-PopinsStyle font-bold text-wrap text-[0.5rem] md:text-[0.6rem]">${item.description}</span> 

                </div>
                <button data-product-name="${item.id}" class="border-t-2 w-full text-black px-4 py-1 mb-1 mt-auto cursor-pointer md:px-10">Add To Cart - <span class=" block md:inline-block"> ₹ ${(item.price).toLocaleString()}</span></button>
              </div>
            </div>`
            
 
        });
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
