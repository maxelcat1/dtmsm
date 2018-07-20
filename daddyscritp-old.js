// work out which page we are on
const mainLinks= ['home','music','gigs','merch','connect','archive'];
const bodyClass=document.getElementsByTagName("BODY")[0].className;



/*function addActive(mN, mL,bC){
	const linkPosition=mL.indexOf(bC);
	const selec='.'+mN+' li';
	document.querySelectorAll(selec)[linkPosition].className='active';
}
*/
const addActive=(mN, mL, bC) =>{
	const linkPosition=mL.indexOf(bC);
	const selec='.'+mN+' li';
	document.querySelectorAll(selec)[linkPosition].className='active';

}
addActive('mainMenu', mainLinks, bodyClass);
addActive('footerMenu', mainLinks, bodyClass);


var navState =document.getElementById('topNav');
document.querySelector("#menu-toggle").addEventListener("click", function(){
		if (navState.style.display==='none' || navState.style.display===''){
			navState.style.display='block';
		}else{		
			navState.style.display='none';
		}

})
