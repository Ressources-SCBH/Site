/*** Construction de l'entête ***/

element = document.createElement("div");
element.id = "titrePrincipal";
document.getElementById("blocTitre").appendChild(element);

element = document.createElement("div");
element.id = "logo";
document.getElementById("titrePrincipal").appendChild(element);

element = document.createElement("img");
element.setAttribute("src", "images/logo_scbh.png");
element.setAttribute("alt", "...Logo SCBH");
document.getElementById("logo").appendChild(element);

element = document.createElement("h1");
element.textContent = "Systèmes Constructifs Bois & Habitat";
document.getElementById("logo").appendChild(element);


/*** Construction des menus ***/
element = document.createElement("div");
element.id = "div1";
document.getElementById("menu").appendChild(element);
document.getElementById("div1").innerHTML += '<a href="index.html" title="Acceuil"><img src="images/home.png" class="imgMenu"></a>';

element = document.createElement("div");
element.id = "div2";
document.getElementById("menu").appendChild(element);
document.getElementById("div2").innerHTML += '<a href="cours.html" title="Cours"><img src="images/cours.png" class="imgMenu"></a>';

element = document.createElement("div");
element.id = "div3";
document.getElementById("menu").appendChild(element);
document.getElementById("div3").innerHTML += '<a href="administratif.html" title="Administratif"><img src="images/administratif.png" class="imgSousMenu"></a>';

element = document.createElement("div");
element.id = "div4";
document.getElementById("menu").appendChild(element);
document.getElementById("div4").innerHTML += '<a href="batiment.html" title="Bâtiment"><img src="images/batiment.png" class="imgSousMenu"></a>';

element = document.createElement("div");
element.id = "div5";
document.getElementById("menu").appendChild(element);
document.getElementById("div5").innerHTML += '<a href="chantier.html" title="Chantier"><img src="images/chantier.png" class="imgSousMenu"></a>';

element = document.createElement("div");
element.id = "div6";
document.getElementById("menu").appendChild(element);
document.getElementById("div6").innerHTML += '<a href="charpente.html" title="Charpente"><img src="images/charpente.png" class="imgSousMenu"></a>';

element = document.createElement("div");
element.id = "div7";
document.getElementById("menu").appendChild(element);
document.getElementById("div7").innerHTML += '<a href="escalier.html" title="Escaliers"><img src="images/escalier.png" class="imgSousMenu"></a>';

element = document.createElement("div");
element.id = "div8";
document.getElementById("menu").appendChild(element);
document.getElementById("div8").innerHTML += '<a href="architecture.html" title="Etude architecturale"><img src="images/architecture.png" class="imgSousMenu"></a>';

element = document.createElement("div");
element.id = "div9";
document.getElementById("menu").appendChild(element);
document.getElementById("div9").innerHTML += '<a href="fabrication.html" title="Fabrication"><img src="images/fabrication.png" class="imgSousMenu"></a>';

element = document.createElement("div");
element.id = "div10";
document.getElementById("menu").appendChild(element);
document.getElementById("div10").innerHTML += '<a href="inclassables.html" title="Inclassables"><img src="images/inclassables.png" class="imgSousMenu"></a>';

element = document.createElement("div");
element.id = "div11";
document.getElementById("menu").appendChild(element);
document.getElementById("div11").innerHTML += '<a href="materiaux.html" title="Matériaux"><img src="images/materiaux.png" class="imgSousMenu"></a>';

element = document.createElement("div");
element.id = "div12";
document.getElementById("menu").appendChild(element);
document.getElementById("div12").innerHTML += '<a href="mecanique.html" title="Mécanique"><img src="images/mecanique.png" class="imgSousMenu"></a>';

element = document.createElement("div");
element.id = "div13";
document.getElementById("menu").appendChild(element);
document.getElementById("div13").innerHTML += '<a href="organisation.html" title="Organisation"><img src="images/organisation.png" class="imgSousMenu"></a>';

element = document.createElement("div");
element.id = "div14";
document.getElementById("menu").appendChild(element);
document.getElementById("div14").innerHTML += '<a href="physique.html" title="Physique du bâtiment"><img src="images/physique.png" class="imgSousMenu"></a>';

element = document.createElement("div");
element.id = "div15";
document.getElementById("menu").appendChild(element);
document.getElementById("div15").innerHTML += '<a href="repondre.html" title="Répondre à une affaire"><img src="images/repondre.png" class="imgSousMenu"></a>';

element = document.createElement("div");
element.id = "div16";
document.getElementById("menu").appendChild(element);
document.getElementById("div16").innerHTML += '<a href="representation.html" title="Représentation graphique"><img src="images/representation.png" class="imgSousMenu"></a>';

element = document.createElement("div");
element.id = "div17";
document.getElementById("menu").appendChild(element);
document.getElementById("div17").innerHTML += '<a href="securite.html" title="Sécurité"><img src="images/securite.png" class="imgSousMenu"></a>';

element = document.createElement("div");
element.id = "div18";
document.getElementById("menu").appendChild(element);
document.getElementById("div18").innerHTML += '<a href="structures.html" title="Structures bois"><img src="images/structures.png" class="imgSousMenu"></a>';

element = document.createElement("div");
element.id = "div19";
document.getElementById("menu").appendChild(element);
document.getElementById("div19").innerHTML += '<a href="stages.html" title="Stages en entreprise"><img src="images/stages.png" class="imgMenu"></a>';

element = document.createElement("div");
element.id = "div20";
document.getElementById("menu").appendChild(element);
document.getElementById("div20").innerHTML += '<a href="divers.html" title="Documents divers"><img src="images/divers.png" class="imgMenu"></a>';

element = document.createElement("div");
element.id = "div21";
document.getElementById("menu").appendChild(element);
document.getElementById("div21").innerHTML += '<a href="lycee.html" title="Le Lycée Laplace"><img src="images/lycee.png" class="imgMenu"></a>';