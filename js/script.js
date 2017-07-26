const pictures = ["img/ane.jpg","img/chat.jpg","img/chien.jpg","img/lama.jpg","img/lapins.jpg","img/lionne.jpg","img/ours.jpg","img/ane.jpg","img/chat.jpg","img/chien.jpg","img/lama.jpg","img/lapins.jpg","img/lionne.jpg","img/ours.jpg"];


function shuffle(a) {
	for (let i = a.length; i; i--) {
		let j = Math.floor(Math.random() * i);
		[a[i - 1], a[j]] = [a[j], a[i - 1]];
	}
}
shuffle(pictures);


let coup = [];
let recup = document.querySelectorAll('img');
let compteur = [];
for (let i=0;i<pictures.length; i++) {
	recup[i].addEventListener("click", recuperer);

}

function recuperer(e) {
	let id= parseInt(e.currentTarget.id);
	let source = e.currentTarget.setAttribute("src", pictures[id]);
	if(coup.length<1){
		coup.push(e.target);
	}
	else if(coup[0].id == e.target.id){
		coup.length = 1;
	}

	else {
		coup.push(e.target);
	}

if(coup.length==2){
	if( coup[0].src==coup[1].src &&(coup[0].id!==coup[1].id)) {
		document.getElementById('resultats').innerHTML = "Les cartes sont les mêmes !";
		coup[0].removeEventListener("click",recuperer);
		coup[1].removeEventListener("click",recuperer);
		compteur.push(coup[0],coup[1]);
		console.log(compteur);
		if(compteur.length==14){
			setTimeout(function arret (){
			(alert("vous avez gagné"))},500);
		}
		coup=[];
	}
	else {
		document.getElementById('resultats').innerHTML = "Les cartes ne sont pas les mêmes !";
		let temps = setTimeout(retourne,1000);
	}
}
}


function retourne(){
	for (let j=0; j<coup.length;j++) {
		coup[j].setAttribute("src","img/carte.jpg");
	}
	coup = [];
}
