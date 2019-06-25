// JavaScript Document
var imagenes=
["Imagenes/Arboles.jpg","Imagenes/Arboles1.jpg"]
var x=0;
function slider(){
	document.getElementById("baner").src=imagenes[x];
	x++;
	if(x>=imagenes.length) x=0;
	setTimeout(slider,1000);
}
slider();

$(function(){
	/*1.	En el bloque de clase auspiciadores, al pasar el mouse sobre cada imagen, cámbiela por su imagen a colores correspondiente que se encuentra en la carpeta logos, además cambie su estilo con fadeTo al 50% con un tiempo de 2 segundos, al retirar el mouse cambie la imagen original.*/
	$(".logitos0").mouseover(function(){
		$(this).attr("src","imagenes/facebook_1.png").fadeIn(2000);
	});
	$(".logitos0").mouseout(function(){
		$(this).attr("src","Imagenes/facebook.png").fadeIn(2000);
	});
	
	$(".logitos1").mouseover(function(){
		$(this).attr("src","imagenes/twitter_1.png").fadeIn(2000);
	});
	$(".logitos1").mouseout(function(){
		$(this).attr("src","Imagenes/twitter.png").fadeIn(2000);
	});
	
  $(".logitos2").mouseover(function(){
		$(this).attr("src","Imagenes/instagram_1.jpg").fadeIn(2000);
	});
	$(".logitos2").mouseout(function(){
		$(this).attr("src","Imagenes/instagram.png").fadeIn(2000);
	});
	
});