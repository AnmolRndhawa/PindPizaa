
const mainContent = document.querySelector('.mainContent');
const paymentStep = document.getElementById('payment-step');
const addressStep = document.getElementById('address-step');

if(mainContent){

    mainContent.onscroll = function(){ progressBar();};
    
    function progressBar() {
        
        let totalScrollableHeight = mainContent.scrollHeight - mainContent.clientHeight;
        let scrollHeight = (mainContent.scrollTop / Number(totalScrollableHeight)) * 100;

        if(mainContent.scrollTop < 400){
            addressStep.classList.remove("text-gray-400");
            paymentStep.classList.add("text-gray-400");
            
        }

        if(mainContent.scrollTop >=400){
            addressStep.classList.add("text-gray-400");
            paymentStep.classList.remove("text-gray-400");
            
        }

        console.log(mainContent.scrollTop + "scrolled pixels");
        console.log(parseInt(scrollHeight) + "% scrolled");
          
       document.querySelector('.progressBar').style.height = `${parseInt(scrollHeight)}%`;

        
        
    };
} else {
    console.log("not available")
}


// form settingz 
// form settingz 

const form = document.querySelector("form"),
statusText= form.querySelector(".buttonSectionInForm span");

form.onsubmit=(e) =>{
    e.preventDefault(); // preventin from submitting the form 
    statusText.style.display = "none";
}