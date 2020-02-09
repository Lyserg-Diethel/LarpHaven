let hours, regimen, regimenRate, finalPrice;
let calcButton = document.getElementById('calcBtn');
let output = document.getElementById('output');

function regimenCases() {
	switch(regimen) {
	case 'Foil': regimenRate = 25; break;
	case 'Sabre': regimenRate = 15; break;
	case 'Epee': regimenRate = 20; break;
	case 'Longsword': regimenRate = 45; break;
	case 'Foil & Dagger': regimenRate = 35; break;
	case 'Archery': regimenRate = 25; break;
	}
}

calcButton.onclick = function(){
	hours = +document.getElementById('hourInput').value;
	regimen = document.getElementById('regimenSelect').value;
	regimenCases();
	if(hours/hours !== 1){
		output.textContent = 'Please input a valid number';
	}else if(hours <= 0){
		output.textContent = 'Please input a valit hour count!';
	}else{
	finalPrice = `This regimen with this style will cost BGN ${hours * regimenRate}.`;
	output.textContent = finalPrice;
	};
};