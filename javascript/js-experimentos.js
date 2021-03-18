var submenu=document.getElementById("submenu");
var exp1=document.getElementById("exp1");
var exp2=document.getElementById("exp2");
var exp3=document.getElementById("exp3");
var volver=document.getElementsByName("volver");
submenu.addEventListener('click',desplazar, false);
volver.item(0).addEventListener('click',volverF, false);
volver.item(1).addEventListener('click',volverF, false);
volver.item(2).addEventListener('click',volverF, false);

function desplazar(e){
	if(e.target.nodeName.toString()=="BUTTON"){
	    console.log(e.target.id.toString());
	    if(e.target.id==1){
			exp1.scrollIntoView();
	    }
	    else if(e.target.id==2){
			exp2.scrollIntoView();
	    }
	    else if(e.target.id==3){
			exp3.scrollIntoView();
	    }
	}
}
function volverF(e){
	submenu.scrollIntoView();
}