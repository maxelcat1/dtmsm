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



const closeNav=() =>{
	document.getElementById("topNav").style.width="0px";	
}
const openNav=() =>{
	//console.log('open menu');
	 document.getElementById("topNav").style.width = "100%";
}
