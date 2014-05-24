var rojo=0, azul=0, verde=0;
var interval= setInterval(colorFondo,1000/250);
var boolRojo=true;
var boolAzul=true;
var boolVerde=true;

function colorFondo(){
	cambiaColor();
	document.body.style.background='rgba('+ rojo + ','+ azul + ',' + verde +  ',0.5)'; 
}

function cambiaColor(){	
	if(boolRojo){
		rojo++;
		if(rojo>255){
			boolRojo=false;
			rojo=255;
			rojo--;
		}
		
	}else{
		rojo--;
		if(rojo<0){
			rojo=0;
			rojo++;
			boolRojo=true;
		}
	}
	if(boolAzul){
		azul++;
		if(azul>255){
			boolAzul=false;
			azul=255;
			azul--;
		}
		
	}else{
		azul--;
		if(azul<0){
			azul=0;
			azul++;
			boolAzul=true;
		}
	}
	if(boolVerde){
		verde++;
		if(verde>255){
			boolVerde=false;
			verde=255;
			verde--;
		}
		
	}else{
		verde--;
		if(verde<0){
			verde=0;
			verde++;
			boolVerde=true;
		}
	}
	console.log("rojo: "+ rojo + " ,azul: " + azul + " ,verde: " + verde);
}

function colorInicial(){
	rojo=aleatorio(0,255);
	azul=aleatorio(0,255);
	verde=aleatorio(0,255);
}

function aleatorio(inferior,superior){
	var diferencia= superior-inferior;
	 return Math.floor((Math.random()* diferencia)+inferior);	
}

window.addEventListener('load' , init, false);

function init(){
colorInicial();

}