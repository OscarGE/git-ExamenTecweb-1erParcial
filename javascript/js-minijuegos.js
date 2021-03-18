var titulo=document.getElementById("titulo");
var zonaJuego=document.getElementById("zonaJuego");
var b1=document.getElementById("0");
var b2=document.getElementById("1");
b1.addEventListener('click',mostrarJuego, false);
b2.addEventListener('click',mostrarJuego, false);
var listaJuegos=["Clasifica a los animales","Rompecabezas"];

function mostrarJuego(e){
	if(e.target.nodeName.toString()=="BUTTON"){
	    b1.removeAttribute("disabled");
	    b2.removeAttribute("disabled");
	    e.target.setAttribute("disabled", false);
	    titulo.innerHTML=listaJuegos[e.target.id];
	    if(e.target.id==0){
	    	codigoI=`
	    		<div class="row">
				    <div class="col-lg-6 col-md-6 col-sm-12">
				      <h4>Vivíparos</h4>
				      <canvas id="lienzo1" width="300px" height="200px"></canvas>
				    </div>
				    <div class="col-lg-6 col-md-6 col-sm-12">
				      <h4>ovíparos</h4>
				      <canvas id="lienzo2"  width="300px" height="200px"></canvas>
				    </div>
			  	</div>
			  	<section id="cajaImagenes">
   			`;
   			for(i=0; i<6;i++){
   				codigoI+=`<img id="${i+1}" src="img-animales/${i+1}.jpg" alt="imagen" width="110px"> `;
   				if(i==5){
					codigoI+="</section>";
   				}
   			}
   			
   			zonaJuego.innerHTML=codigoI;
   			var imagenesDestino=document.querySelectorAll("#cajaImagenes>img");
   			for(i=0; i<imagenesDestino.length; i++){
   				imagenesDestino[i]=addEventListener("dragstart",arrastrando,false);
   				imagenesDestino[i]=addEventListener("dragend",finalizado,false);
   			}
   			destino1=document.getElementById("lienzo1");
   			lienzo1=destino1.getContext('2d')
   			destino1.addEventListener("dragenter",function(e){e.preventDefault();},false);
   			destino1.addEventListener("dragover",function(e){e.preventDefault();},false);
   			destino1.addEventListener("drop",soltado,false);

   			destino2=document.getElementById("lienzo2");
   			lienzo2=destino2.getContext('2d');
   			destino2.addEventListener("dragenter",function(e){e.preventDefault();},false);
   			destino2.addEventListener("dragover",function(e){e.preventDefault();},false);
   			destino2.addEventListener("drop",soltado2,false);
   			
   			function finalizado(e){
   				elemento=e.target;
   				elemento.style.visibility="hidden";
   			}

   			function arrastrando(e){
   				elemento=e.target
   				e.dataTransfer.setData("Text",elemento.getAttribute('id'));
   				e.dataTransfer.setDragImage(e.target,0,0);
   			}
   			function soltado(e){
   				e.preventDefault();
				var id=e.dataTransfer.getData('Text');
				var elemento=document.getElementById(id);
				var posx=e.pageX-destino1.offsetLeft;
				var posy=e.pageY-destino1.offsetTop;
				lienzo1.drawImage(elemento,posx,posy,110,80);
   			}
   			function soltado2(e){
   				e.preventDefault();
				var id=e.dataTransfer.getData('Text');
				var elemento=document.getElementById(id);
				var posx=e.pageX-destino2.offsetLeft;
				var posy=e.pageY-destino2.offsetTop;
				lienzo2.drawImage(elemento,posx,posy,110,80);
   			}

			
		}
		else if(e.target.id==1){
			codigoI=`
				<div class="row">
				    <div class="col-lg-6 col-md-6 col-sm-12">
			  			<section id="cajaImagenes">
   			`;
   			for(i=7; i<13;i++){
   				codigoI+=`<img id="${i+1}" src="img-animales/${i+1}.jpg" alt="imagen" width="90px"> `;
   				if(i==12){
					codigoI+=`</section> 
					</div>
					<div class="col-lg-6 col-md-6 col-sm-12">
					   	<canvas id="lienzo1" width="300px" height="200px"></canvas>
					</div></div>
					`;
   				}
   			}
   			codigoI+='<img src="img-animales/7.jpg" alt="imagen" width="350px">';
   			zonaJuego.innerHTML=codigoI;

   			var imagenesDestino=document.querySelectorAll("#cajaImagenes>img");
   			for(i=0; i<imagenesDestino.length; i++){
   				imagenesDestino[i]=addEventListener("dragstart",arrastrando,false);
   				imagenesDestino[i]=addEventListener("dragend",finalizado,false);
   			}
   			destino1=document.getElementById("lienzo1");
   			lienzo1=destino1.getContext('2d')
   			destino1.addEventListener("dragenter",function(e){e.preventDefault();},false);
   			destino1.addEventListener("dragover",function(e){e.preventDefault();},false);
   			destino1.addEventListener("drop",soltado,false);
   			
   			function finalizado(e){
   				elemento=e.target;
   				elemento.style.visibility="hidden";
   			}

   			function arrastrando(e){
   				elemento=e.target
   				e.dataTransfer.setData("Text",elemento.getAttribute('id'));
   				e.dataTransfer.setDragImage(e.target,0,0);
   			}
   			function soltado(e){
   				e.preventDefault();
				var id=e.dataTransfer.getData('Text');
				var elemento=document.getElementById(id);
				var posx=e.pageX-destino1.offsetLeft;
				var posy=e.pageY-destino1.offsetTop;
				lienzo1.drawImage(elemento,posx,posy,90,90);
   			}
   			
		}
	} 
}
