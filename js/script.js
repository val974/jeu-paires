const pictures = ["img/ane.jpg","img/chat.jpg","img/chien.jpg","img/lama.jpg","img/lapins.jpg","img/lionne.jpg","img/ours.jpg","img/ane.jpg","img/chat.jpg","img/chien.jpg","img/lama.jpg","img/lapins.jpg","img/lionne.jpg","img/ours.jpg"]; //tableau avec les images


function shuffle(a) {
	for (let i = a.length; i; i--) {
		let j = Math.floor(Math.random() * i);
		[a[i - 1], a[j]] = [a[j], a[i - 1]];
	}
}
shuffle(pictures);

let recup = document.querySelectorAll('img'); //pour récupérer mes objets (comprenant les ids/et les sources)
let coup = []; //pour afficher mes deux coups dans un tableau, pour les comparer par la suite;
let compteur = []; //pour compter le nombre de bonnes paires afin d'afficher mon message de fin de partie
for (let i=0;i<pictures.length; i++) {
	recup[i].addEventListener("click", recuperer); //pour récupérer mes éléments du DOM

}

function recuperer(e) { 
	let id= parseInt(e.currentTarget.id); //je convertis mon id en chiffre.
	let source = e.currentTarget.setAttribute("src", pictures[id]); //je change la source de ma carte face cachée 
	if(coup.length<1){ // pour ajouter mon élément cliqué à mon tableau
		coup.push(e.target);
	}
	else if(coup[0].id == e.target.id){ //pour que lorsque que je clique sur une image, elle ne compte pas 2 fois dans mon tableau.
		coup.length = 1;
	}

	else {
		coup.push(e.target);
	}

if(coup.length==2){ //pour que mon tableau n'ait que 2 entrées
	if( coup[0].src==coup[1].src &&(coup[0].id!==coup[1].id)) { //je compare mes cartes
		document.getElementById('resultats').innerHTML = "Les cartes sont les mêmes !"; //j'affiche le résultat dans le DOM
		coup[0].removeEventListener("click",recuperer); //j'enlève l'évènement clic sur les paires trouvées pour que ces paires soient bloquées.
		coup[1].removeEventListener("click",recuperer);
		compteur.push(coup[0],coup[1]);//j'ajoute les paires trouvées dans un tableau pour mon résultat final.
		console.log(compteur);
		if(compteur.length==14){ //affiche mon message de fin de partie
			setTimeout(function arret (){
			(alert("vous avez gagné !"))},500);
		}
		coup=[];
	}
	else {
		document.getElementById('resultats').innerHTML = "Les cartes ne sont pas les mêmes !"; //j'affiche le résultat
		let temps = setTimeout(retourne,1000); //pour que les cartes "se retournent si la condition est fausse"
	}
}
}


function retourne(){
	for (let j=0; j<coup.length;j++) {
		coup[j].setAttribute("src","img/carte.jpg"); //si les cartes ne correspondent pas, alors la carte revient à sa face cachée.
	}
	coup = [];
}

function chronometre(){

}