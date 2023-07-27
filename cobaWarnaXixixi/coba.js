const body = document.getElementsByTagName('body')[0];
const h1 = document.getElementsByTagName('h1')[0];
const tombol = document.querySelector('.tombol');
tombol.addEventListener('click', function(){
	body.style.backgroundColor = 'red';
	h1.style.color = 'white';
})

//--------------------------------------------------------

const ngocok = document.createElement('button');
const textNgocok = document.createTextNode('Ngocok');
ngocok.appendChild(textNgocok);
ngocok.setAttribute('type', 'button');
ngocok.classList.add('tombol');
tombol.after(ngocok);
ngocok.addEventListener('click', function(){
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
	h1.style.color = 'rgb('+ r +','+ r +','+ r +')';
})

//-------------------------------------------------------

const slideMerah = document.querySelector('input[name=red]');
const slideHijau = document.querySelector('input[name=green]');
const slideBiru = document.querySelector('input[name=blue]');

const randomText = Math.floor(Math.random() * 10 + 1);

if(randomText < 3){
	h1.innerHTML = 'No one understand me, maybe i am javascript';
	h1.style.color = 'black';
}

slideMerah.addEventListener('input', function(){
	const r = slideMerah.value;
	const g = slideHijau.value;
	const b = slideBiru.value;
	body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';

	const randomText = Math.floor(Math.random() * 10 + 1);
	if(randomText < 3){
		h1.innerHTML = 'KONTOLLLLLL';
		h1.style.color = 'black';
	}
	else if(randomText > 3 && randomText < 6){
		h1.innerHTML = 'xixixixixixi haha';
		h1.style.color = 'gold';
	}
	else{
		h1.innerHTML = 'only a crack in this castle of glass';
		h1.style.color = 'lightblue';
	}
})

slideHijau.addEventListener('input', function(){
	const r = slideMerah.value;
	const g = slideHijau.value;
	const b = slideBiru.value;
	body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';

	const randomText = Math.floor(Math.random() * 10 + 1);
	if(randomText < 3){
		h1.innerHTML = 'Waduh.. tet tet tetetet';
		h1.style.color = 'pink';
	}
	else if(randomText > 3 && randomText < 6){
		h1.innerHTML = 'kono giorno giovana yume ni wa ga aru';
		h1.style.color = 'yellow';
	}
	else{
		h1.innerHTML = 'trying to bend the truth';
		h1.style.color = 'purple';
	}
})

slideBiru.addEventListener('input', function(){
	const r = slideMerah.value;
	const g = slideHijau.value;
	const b = slideBiru.value;
	body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';

	const randomText = Math.floor(Math.random() * 10 + 1);
	if(randomText < 3){
		h1.innerHTML = 'bakwan jagung';
		h1.style.color = 'orange';
	}
	else if(randomText > 3 && randomText < 6){
		h1.innerHTML = 'minna kono arigatou na teme';
		h1.style.color = 'lime';
	}
	else{
		h1.innerHTML = 'its like a sleepwalkenngggg';
		h1.style.color = 'cyan';
	}
})

//------------------------------------------------------

body.addEventListener('mousemove', function(e){
	const posX = Math.floor((e.clientX / window.innerWidth) * 255);
	const posY = Math.floor((e.clientY / window.innerHeight) * 255);
	body.style.backgroundColor = 'rgb('+ posX +','+ posY +',100)';
})

//-----------------------------------------------------

const gila = document.querySelector('.gila');
gila.addEventListener('click', function(){
	gila.classList.toggle('gerak');
})

const merah = document.querySelector('.merah');
const hijau = document.querySelector('.hijau');
const biru = document.querySelector('.biru');

merah.addEventListener('mouseover', function(){
	merah.classList.toggle('merahBaru');
})
hijau.addEventListener('mouseover', function(){
	hijau.classList.toggle('hijauBaru');
})
biru.addEventListener('mouseover', function(){
	biru.classList.toggle('biruBaru');
})