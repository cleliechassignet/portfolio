const rect1 = document.querySelector('.rect1');
const rect1b = document.querySelector('.rect1b');

const rect2 = document.querySelector('.rect2');
const rect2b = document.querySelector('.rect2b');



rect1.onmouseover = function (){
	rect1b.style.display='flex';
}
 
rect1.onmouseout = function (){
	rect1b.style.display='none';
}

rect2.onmouseover = function (){
	rect2b.style.display='flex';
}
 
rect2.onmouseout = function (){
	rect2b.style.display='none';
}

