// hasil sendiri
// const close = document.querySelector('.close');

// close.addEventListener('click', function(){
// 	const card = document.querySelector('.card');
// 	card.remove();
// })

// Event Handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');
// close.addEventListener('click', function(){
// 	card.style.display = 'none';
// })

// DOM Traversal
// const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');      salah
// for(let i = 0; i < close.length; i++){
// 	close[i].addEventListener('click', function(){
// 		card[i].style.display = 'none';
// 	})
// }

// const close = document.querySelectorAll('.close');
// for(let i = 0; i < close.length; i++){
// 	close[i].addEventListener('click', function(){
// 		close[i].parentElement.style.display = 'none';
// 	})
// }

// const close = document.querySelectorAll('.close');
// for(let i = 0; i < close.length; i++){
// 	close[i].addEventListener('click', function(e){
// 		e.target.parentElement.style.display = 'none';
// 	})
// }

const close = document.querySelectorAll('.close');
const containerCard = document.querySelector('.container');
const kulkas = [];
close.forEach(function(el){
	el.addEventListener('click', function(e){
		const card = document.querySelector('.card');
		// card.style.display = 'none';
		card.remove();
		kulkas.push(card);
	})
})

const tombol = document.createElement('button');
tombol.setAttribute('type', 'button');
const tulisan = document.createTextNode('tambah');
tombol.append(tulisan);
const list = document.querySelector('.list');
list.before(tombol);

tombol.addEventListener('click', function(){
	if(kulkas.length > 0){
		const card = kulkas.shift();
		containerCard.appendChild(card);
	}
})


const nama = document.querySelector('.nama');
console.log(nama.parentElement); // card
console.log(nama.parentNode); // card
console.log(nama.parentElement.parentElement); // container
console.log(nama.parentElement.parentElement.parentElement); // body

console.log(nama.nextSibling); // text (enter) dri sourcecode html (yg di ambil node)
console.log(nama.nextElementSibling); // telp

console.log(nama.previousSibling) // text enter
console.log(nama.previousElementSibling) // img
console.log(nama.previousElementSibling.previousElementSibling); // (null)udh abis 
console.log(nama.nextElementSibling.nextElementSibling); // close