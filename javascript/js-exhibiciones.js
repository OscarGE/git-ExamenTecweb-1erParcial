var info1={
  titulo:"Gran Esfinge de Guiza",
  texto:`Es una monumental escultura que se encuentra en la ribera occidental del río Nilo, 
        en la ciudad de Guiza, unos veinte kilómetros al suroeste del centro de El Cairo. Los 
        egiptólogos estiman que fue esculpida c. siglo XXVI a. C., formando parte del complejo 
        funerario del rey, durante la dinastía IV de Egipto.`
};
var info2={
  titulo:"Gran Pirámide de Guiza",
  texto:`Es, además de la mayor de las pirámides de Egipto, la más antigua de las siete maravillas 
        del mundo antiguo y la única que aún perdura. Fue ordenada construir por el faraón Keops de 
        la cuarta dinastía del Antiguo Egipto. Acerca del arquitecto de dicha obra algunos estudiosos 
        nombran a Hemiunu, pero no está comprobado.​ La fecha estimada de terminación de la construcción 
        de la Gran Pirámide es alrededor de 2570 a. C., siendo la primera y mayor de las tres grandes 
        pirámides de la necrópolis de Guiza, situada en las afueras de El Cairo.`
};
var info3={
  titulo:"Sarcófagos",
  texto:`Un sarcófago es un recipiente, generalmente tallado en piedra, destinado a contener un cadáver. 
        En el Antiguo Egipto, los sarcófagos de la realeza albergaban al menos un ataúd, generalmente de 
        madera, donde se custodiaba la momia del difunto que previamente era sometido a un proceso de 
        embalsamamiento. Muchos sarcófagos fueron construidos para permanecer en mausoleos, templos o 
        criptas visitables, y por tanto solían estar elaborados, tallados, o adornados esmeradamente.`
};
var info4={
  titulo:"Busto de Buda",
  texto:`Siddhārtha Gautama fue un asceta, meditante, eremita y sabio en cuyas 
        enseñanzas se fundó el budismo. Enseñó principalmente en el noroeste del subcontinente Indio 
        durante unos cuarenta años. Su enseñanza se basa en una visión del sufrimiento y el fin del 
        sufrimiento (nirvāṇa). Después de su muerte, la comunidad budista compiló sus enseñanzas en 
        extensas colecciones, los Discursos (Sutras) y los Códigos Monásticos (Vinaya). Estas enseñanzas 
        se transmitieron en dialectos prácritos como Pali, a través de una tradición oral en las diversas 
        comunidades que se extendieron por la India.`
};
var info5={
  titulo:"Estatua de Aristóteles",
  texto:`Aristóteles fue un filósofo, polímata y científico nacido en la ciudad de Estagira, al norte de 
  Antigua Grecia. Es considerado junto a Platón, el padre de la filosofía occidental. Sus ideas han ejercido 
  una enorme influencia sobre la historia intelectual de Occidente por más de dos milenios. Fue discípulo 
  de Platón y de otros pensadores, como Eudoxo de Cnido, durante los veinte años que estuvo en la Academia 
  de Atenas.`
};
var info6={
  titulo:"Los pensadores",
  texto:`El pensamiento es la actividad y creación de la mente; se dice de todo aquello que es traído a la 
        existencia mediante la actividad del intelecto. El término es comúnmente utilizado como forma genérica 
        que define todos los productos que la mente puede generar incluyendo las actividades racionales y 
        reflexivas del intelecto o las abstracciones de la imaginación; todo aquello que sea de naturaleza 
        mental es considerado pensamiento, bien sean estos abstractos, racionales, creativos, artísticos, etc.`
};
var info7={
  titulo:"Bodegones",
  texto:`Un bodegón, también conocido como naturaleza muerta, es una obra de arte que representa animales, 
        flores y otros objetos, que pueden ser naturales (frutas, comida, plantas, rocas o conchas) o hechos 
        por el hombre (utensilios de cocina, de mesa o de casa, antigüedades, libros, joyas, monedas, pipas, etc.) 
        en un espacio determinado. Esta rama de la pintura se sirve normalmente del diseño, el cromatismo y la 
        iluminación para producir un efecto de serenidad, bienestar y armonía.`
};
var info8={
  titulo:"Cuadros de Anton van Dyck",
  texto:`Anton van Dyck (Amberes, 22 de marzo de 1599-Londres, 9 de diciembre de 1641) fue un pintor y grabador 
        flamenco especialmente dedicado a la elaboración de retratos. Dado que alcanzó gran fama internacional, 
        su nombre se adaptó a diferentes idiomas: en inglés, Sir Anthony van Dyck; en español, Antonio o Antón 
        van Dick. Llegó a ser el primer pintor de corte en Inglaterra tras una larga estancia en Italia.`
};
var info9={
  titulo:"Pinturas Sumi-e",
  texto:`Sumie (墨絵; también "水墨画;"?) es una técnica de dibujo monocromático en tinta negra de la escuela de 
        pintura china. Se desarrolló en China durante la dinastía Tang (618 - 907) y se implantó como estilo 
        durante la dinastía Song (960 - 1279). Fue introducida en el Japón a mediados del siglo XIV por monjes 
        budistas zen y creció en popularidad hasta su apogeo durante el Período Muromachi (1338 - 1573).`
};

var infoLista=[info1,info2,info3,info4,info5,info6,info7,info8,info9]
var imagenes = [1,2,3,4,5,6,7,8,9];
var salas=["Antiguo Egipto","Esculturas","Cuadros"]
var tamDismi =imagenes.length; 
var tamAumen =0;
var galeria = document.getElementById("contenidoG");
//Número de veces que se repetirá el ciclo for
var num=Math.trunc(imagenes.length/3);
if(imagenes.length%3){
  num++;
}
var codigo="";
var control=0;
var active="";
for(var i=0;i<num;i++){
  if(i==0)
     active="active";  
  else
    active="";
  codigo+=`
      <div class="carousel-item ${active}">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <h1><i class="fas fa-arrow-left"></i>&nbsp;&nbsp;&nbsp;</h1>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
            <h1>${salas[i]}</h1>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
            <h1>&nbsp;&nbsp;&nbsp;<i class="fas fa-arrow-right"></i></h1>
          </div>
        <hr noshade size=5px>
    `;
    if(tamDismi>=3)
      control=3;
    else if(tamDismi==2)
      control=2;
    else
      control=1;
    for(j=0;j<control;j++){
      codigo+=`<div class="col-lg-4 col-md-6 col-sm-12"><img class="img-thumbnail" 
              id="${imagenes[tamAumen]}" src="img-exhibiciones//${imagenes[tamAumen]}.jpg" alt="imagen">
              </div>\n
      `;
      tamAumen++;
      tamDismi--;
    } 
    codigo+=`</div></div>`; 
}
galeria.innerHTML=codigo;

var muestra=document.getElementById("muestra");
var muestraInfo=document.getElementById("presentacionTxt");
galeria.addEventListener('click',mostrarImg, false);
function mostrarImg(e){
  if(e.target.nodeName.toString()=="IMG"){
    muestra.innerHTML=`<img src="${e.target.src.toString()}" class="img-fluid" alt="imagen">`;
    muestraInfo.innerHTML=`
      <h3>${infoLista[(e.target.id)-1].titulo}</h3>
      <p>${infoLista[(e.target.id)-1].texto}</p>
    `;
    muestra.scrollIntoView();
  } 
}