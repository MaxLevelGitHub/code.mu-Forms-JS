//      №1
// let p = document.querySelector(`p`)
// let elem = document.querySelector('#elem');
// elem.addEventListener(`blur`, ()=>{
//     p.textContent = elem.value
// })

//      №2
// let elem = document.querySelector('#elem');
// let but = document.querySelector(`#but1`)
// but1.addEventListener(`click`, ()=>{
//     if(elem.disabled){
//         elem.disabled = false;
//     }else{
//         elem.disabled = true
//     }    
// })

//      №3
// let elem = document.querySelector('#elem');
// let but1 = document.querySelector(`#but1`)
// let but2 = document.querySelector(`#but2`)
// but1.addEventListener(`click`, fanc1)
// but2.addEventListener(`click`, fanc2)   
// function fanc1(){
//     elem.removeAttribute(`disabled`);
// }
// function fanc2(){
//      elem.setAttribute(`disabled`, true);
// }

//      №4
// let elem = document.querySelector('#elem');
// let but1 = document.querySelector(`#but1`)
// but1.addEventListener(`click`, ()=>{
//     console.log(elem.disabled);
// })

//      №5
// let elem = document.querySelector('#elem1');
// let but1 = document.querySelector(`#but1`)
// but1.addEventListener(`click`, ()=>{
//     if(elem.checked){
//         elem.checked = false
//     }else{
//         elem.checked = true
//     }
// })

//      №6
// let p = document.querySelector(`p`)
// let elem = document.querySelector('#elem1');
// let but1 = document.querySelector(`#but1`)
// but1.addEventListener(`click`, ()=>{
//     if(elem.checked == true){
//         p.textContent = `привет`
//     }else{
//         p.textContent = `пока`
//     }
// })

//      №7
// let elem = document.querySelector('#elem1');
// let but = document.querySelector(`#but1`)
// but.addEventListener(`click`, ()=>{
//     elem.checked = !elem.checked;
// })

//      №8
// let radios = document.querySelectorAll('input[type="radio"]');
// let button = document.querySelector('#but1');
// let p = document.querySelector(`p`)
// button.addEventListener('click', function() {
// 	for (let radio of radios) {
// 		if (radio.checked) {
// 			p.textContent = radio.value
// 		}
// 	}
// });

//      №9
// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');
// elem.addEventListener('change', function() {
// 	p.textContent = this.value;
// });

//      №10
// let elem = document.querySelector('#elem1');
// let p = document.querySelector('p');
// elem.addEventListener('change', function() {
// 	p.textContent = elem.checked;
// });

//      №11
// let elem = document.querySelector(`#elem`)
// elem.addEventListener(`change`, ()=>{
//         if(elem.value.length <= 5){
//             elem.style.backgroundColor = `green`
//         }else{
//             elem.style.backgroundColor = `red`
//         }   
// })

//      №12
// let elem = document.querySelector(`#elem`)
// elem.addEventListener(`input`, ()=>{
//         if(elem.value.length > 5){
//             alert(`угомонись порося`)
//         }else{

//         }   
// })

//      №13
// let elem = document.querySelector(`#elem`)
// let p = document.querySelector(`p`)
// elem.addEventListener(`input`, ()=>{
//     for(let i = 0; i <= elem.value.length; i++){
//         if(elem.value.length < 5){
//             p.textContent = 5 - i
//         }else{
//             p.textContent = i - 5
//         }
//     }
// })

//      №14
// let elem1 = document.querySelector(`#elem1`)
// let elem2 = document.querySelector(`#elem2`)
// elem1.addEventListener(`input`, ()=>{
//    if(elem1.value.length >= 2){
//     elem2.focus();
//    }
// })
// elem2.addEventListener('input', ()=>{
//     if(elem2.value.length >= 2){
//         elem2.blur();
//        }
// })

//      №15
// let p = document.querySelector(`p`)
// let select = document.querySelector('#select');
// select.addEventListener('change', function(){
// 	p.textContent = this.value
// });

//      №16
// let p = document.querySelector(`p`)
// let select = document.querySelector('#select');
// select.addEventListener('change', function(){
// 	if(this.value % 4 == 0){
//         p.textContent = `высокосный год`
//     }else{
//         p.textContent = `ne высокосный год`
//     }
// });

//      №17
// let p = document.querySelector(`p`)
// let select = document.querySelector('#select');
// select.addEventListener('change', function(){
// 	if(this.valu - 5 > 3){
//         p.textContent = `одых`
//     }else{
//         p.textContent = `тоже одых`
//     }
// });

//      №18
// let select = document.querySelector('#select');
// select.addEventListener('change', function(){
//     select.value = this.value
// });

//      №19
// let select = document.querySelector('#select');
// for(let elem of select){
//     elem.textContent = elem.textContent + ' ' + elem.value
// }

//      №20
// let select = document.querySelector('#select');
// select.addEventListener('change', function(){
//     for(let elem of select)
//  elem.textContent = elem.textContent + '!';
// })

//      №21
// let select = document.querySelector('#select');
// let button = document.querySelector('#but1');
// button.addEventListener('click', function(){
//  document.write(select.value)
// })