let indexShow = document.querySelector('.showcaseText');
let textShowSwitch = 0;


const newPText = "The world of reality is limited. Imagination is boundless.";
const newPText2 = "Here is more inspirational text. I hope you like switches.";
let newPTextHolder;

let i=0;
//Function that fills the 2 paragraphs with text.
let fillP = function() { 
	if(textShowSwitch === 0){
		newPTextHolder = newPText; 
	}else{
		newPTextHolder = newPText2;
	};

    indexShow.innerHTML += newPTextHolder[i];
    i+=1;
    if( i < newPTextHolder.length ){
        setTimeout( fillP, 30 )
    } else{
          setTimeout(emptyP, 3000);
        };
    if(i===32){
    	indexShow = document.querySelector('.showcaseText2');
    };
};
fillP();



//Erase the contents char by char:
let emptyP = function(){
    let pStrHolder = indexShow.innerHTML;
    i = pStrHolder.length;
    pStrHolder = pStrHolder.substring(0,i-1);
    indexShow.innerHTML = pStrHolder;
    i-=1;
    if(pStrHolder.length >=1){setTimeout(emptyP, 30);};
    if(i==1) {
    	i=26; indexShow = document.querySelector('.showcaseText');
    };
    if(document.querySelector('.showcaseText').innerText == ""){
    	setTimeout(fillP, 1000);

	    if(textShowSwitch === 0) {
	    	textShowSwitch = 1;
	    }else{
	    	textShowSwitch = 0;
	    };
    };
}

