function pilihanCom(){
	const com = Math.random();
	if(com < 0.36) return 'gunting';
	if(com >= 0.36 && com < 0.64) return 'batu';
	return 'kertas';
}

function peraturan(player, com){
	if(player == com) return 'SERI';
	if(player == 'gunting') return (com == 'kertas') ? 'MENANG' : 'KALAH';
	if(player == 'batu') return (com == 'gunting') ? 'MENANG' : 'KALAH';
	if(player == 'kertas') return (com == 'batu') ? 'MENANG' : 'KALAH';
}

function putar(){
	const imgCom = document.querySelector('.img-komputer');
	const gambar = ['gunting', 'batu', 'kertas'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function(){
		if(new Date().getTime() - waktuMulai > 1000){
			clearInterval;
			return;
		}
		imgCom.setAttribute('src', `img2/${gambar[i++]}.png`);
		if(i == gambar.length) i = 0;
	}, 100)
}

let skorC = 0;
let skorP = 0;

const scoreC = document.querySelector('.skorCom');
const scoreP = document.querySelector('.skorP');

const pilihanPlayer = document.querySelectorAll('li img');
pilihanPlayer.forEach(function(pil){
	pil.addEventListener('click', function(){
		const p = pil.className;
		const c = pilihanCom();
		const hasil = peraturan(p, c);

		putar();

		setTimeout(function(){
			const imgCom = document.querySelector('.img-komputer');
			imgCom.setAttribute('src', `img2/${c}.png`);

			const info = document.querySelector('.info');
			info.innerHTML = hasil;

			if(hasil == 'SERI'){
				skorP += 0;
				skorC += 0;
			}
			else if(hasil == 'MENANG'){
				skorP += 100;
			}
			else{
				skorC += 100;
			}

			scoreP.innerHTML = skorP;
			scoreC.innerHTML = skorC;
		}, 1000)
	})
})

// const pBatu = document.querySelector('.batu');
// pBatu.addEventListener('click', function(){
// 	const p = pBatu.className;
// 	const com = pilihanCom();
// 	const hasil = rules(p, com);

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;

// 	const comImg = document.querySelector('.img-komputer');
// 	comImg.setAttribute('src', `img2/${com}.png`);

// 	if(hasil == 'SERI'){
// 		skorP += 0;
// 		skorC += 0;
// 	}
// 	else if(hasil == 'MENANG'){
// 		skorP += skor;
// 	}
// 	else{
// 		skorC += skor;
// 	}

// 	console.log(`player memilih: ${p}\ncom memilih: ${com}\nhasil: ${hasil}`);

// 	scoreP.innerHTML = skorP;
// 	scoreC.innerHTML = skorC;
// })

// const pKertas = document.querySelector('.kertas');
// pKertas.addEventListener('click', function(){
// 	const p = pKertas.className;
// 	const com = pilihanCom();
// 	const hasil = rules(p, com);

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;

// 	const comImg = document.querySelector('.img-komputer');
// 	comImg.setAttribute('src', `img2/${com}.png`);

// 	if(hasil == 'SERI'){
// 		skorP += 0;
// 		skorC += 0;
// 	}
// 	else if(hasil == 'MENANG'){
// 		skorP += skor;
// 	}
// 	else{
// 		skorC += skor;
// 	}

// 	console.log(`player memilih: ${p}\ncom memilih: ${com}\nhasil: ${hasil}`);

// 	scoreP.innerHTML = skorP;
// 	scoreC.innerHTML = skorC;
// })

// const pGunting = document.querySelector('.gunting');
// pGunting.addEventListener('click', function(){
// 	const p = pGunting.className;
// 	const com = pilihanCom();
// 	const hasil = rules(p, com);

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;

// 	const comImg = document.querySelector('.img-komputer');
// 	comImg.setAttribute('src', `img2/${com}.png`);

// 	if(hasil == 'SERI'){
// 		skorP += 0;
// 		skorC += 0;
// 	}
// 	else if(hasil == 'MENANG'){
// 		skorP += skor;
// 	}
// 	else{
// 		skorC += skor;
// 	}

// 	console.log(`player memilih: ${p}\ncom memilih: ${com}\nhasil: ${hasil}`);

// 	scoreP.innerHTML = skorP;
// 	scoreC.innerHTML = skorC;
// })
