// Priemr canvas============================
var elemento = document.getElementById('lienzo');
var lienzo = elemento.getContext('2d');
/*Gradiente lineal*/
lienzo.globalAlpha=1;
var gradiente=lienzo.createLinearGradient(0,0,790,310);
gradiente.addColorStop(0.2, '#FFC900 ');
gradiente.addColorStop(0.6, '#FF7400');
gradiente.addColorStop(1, '#FF0400');
lienzo.fillStyle=gradiente;
lienzo.fillRect(0,0,790,310);
/*Imágenes*/
var imagen= new Image();
imagen.src="img-museo/museo1.jpg";
imagen.addEventListener("load",function(){
lienzo.drawImage(imagen,0,130,250,180)},false);
var imagen2= new Image()
imagen2.src="img-museo/museo2.jpg";
imagen2.addEventListener("load",function(){
lienzo.drawImage(imagen2,285,130,250,180)},false);
var imagen3= new Image()
imagen3.src="img-museo/museo3.jpg";
imagen3.addEventListener("load",function(){
lienzo.drawImage(imagen3,570,30,220,280)},false);
/*Texto con canvas*/
lienzo.font = "30px Comic Sans MS";
lienzo.fillStyle = "#FFFFFF";
lienzo.fillText("Descubre, Aaprende y Diviertete", 50, 80);

// Segundo canvas============================
elemento2 = document.getElementById('lienzo2');
lienzo2 = elemento2.getContext('2d');
/*Imágenes*/
imagen4= new Image();
imagen5= new Image();
imagen6= new Image();
pos_x=0;
pos_y=200;
pos2_x=650;
pos2_y=50;
botonAccion = document.getElementById("botonAccion");
imagen4.src="img-espacio/espacio.jpg";
imagen4.addEventListener("load",function(){
lienzo2.drawImage(imagen4,0,0,790,310)},false);
imagen5.src="img-espacio/cohete.png";
imagen5.addEventListener("load",function(){
lienzo2.drawImage(imagen5,pos_x,pos_y,100,110)},false);
imagen6.src="img-espacio/satelite.png";
imagen6.addEventListener("load",function(){
lienzo2.drawImage(imagen6,pos2_x,pos2_y,130,90)},false);

//Animación 
botonAccion.addEventListener("click",anim)

function anim(){
  //Botón activado
  botonAccion.disabled=true;
  //Redibujado
  imagen4.src="img-espacio/espacio.jpg";
  imagen4.addEventListener("load",function(){
  lienzo2.drawImage(imagen4,0,0,790,310)},false);
  imagen5.src="img-espacio/cohete.png";
  imagen5.addEventListener("load",function(){
  lienzo2.drawImage(imagen5,pos_x,pos_y,100,110)},false);
  imagen6.src="img-espacio/satelite.png";
  imagen6.addEventListener("load",function(){
  lienzo2.drawImage(imagen6,pos2_x,pos2_y,130,90)},false);
  lienzo2.clearRect(0,0,790,310);
  //Actualización de posición 
  pos_x+=2;
  pos_y-=2;
  pos2_x-=1;
  //Fin de la animación
  if(pos_x>380 && pos_y<280){
    pos_x=0;
    pos_y=200;
    pos2_x=650;
    botonAccion.disabled=false;
  }
  else{
    setTimeout(anim,25);
  }

}