const navBar = document.querySelector('.navbar');
const navbarOptions = document.querySelector('.navbarOptions');
const serviceOptionsContainer = document.querySelector('.serviceOptionsContainer');
const services = document.querySelector('.services');


const checkWindowSize = function(){
	if(window.innerWidth > 600){
		console.log('fixing');
		navbarOptions.classList.remove('notDisplayed');
		serviceOptionsContainer.classList.remove('notDisplayed');
	}else{
		 serviceOptionsContainer.classList.add('notDisplayed');
	}
}

const toggleNavbarVisibility = function(e){
	if(window.innerWidth <= 600){	
	    if(e.target === navBar){
	        navbarOptions.classList.toggle('notDisplayed');
	    }else if(e.target === services){
				serviceOptionsContainer.classList.toggle('notDisplayed');
		}else{
			navbarOptions.classList.add('notDisplayed');
		}
	}
}
const toggleServiceOptsVisibility = function(){
	/*if(window.innerWidth <= 600){
	    serviceOptionsContainer.classList.toggle('notDisplayed');
	}*/
}

	checkWindowSize();

document.body.addEventListener('click', toggleNavbarVisibility);
services.addEventListener('click', toggleServiceOptsVisibility);
window.addEventListener('resize', checkWindowSize);