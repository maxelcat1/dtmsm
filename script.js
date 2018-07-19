console.log('hello');


var achieveContainer = document.querySelector("#archieveImages");


const archieveImages = [
 {
    id: 1,
    arcurl: 'vibrating-daddies.jpg',
    altText: 'supporting the vibrators'
  },
 {
    id: 1,
    arcurl: 'scared-photo.jpg',
    altText: 'flyer for the Dublin Castle'
  },
 {
    id: 1,
    arcurl: 'scared-cat.jpg',
    altText: 'flyer for Maddens Ale House'
  },



  {
    id: 1,
    arcurl: 'daddies-and-spizz-energi-1st-july-2017.jpg',
    altText: 'Daddy Those Men Scare Me support Spizz Energy poster'
  },
{
    id: 2,
    arcurl: 'dublin-castle-with-spizz-energi-2017-07-01a.jpg',
    altText: 'Daddy Those Men Scare Me playing live'
  },
  {
    id: 3,
    arcurl: 'daddy-those-men-scare-me-1.jpg',
    altText: 'Daddy Drummer'
  },
  {
    id: 4,
    arcurl: 'daddy-those-men-scare-me-2.jpg',
    altText: 'Set List'
  },
  {
    id: 5,
    arcurl: 'daddy-those-men-scare-me-4.jpg',
    altText: 'Daddy Those Men Scare Me live'
  },

{
    id: 6,
    arcurl: 'daddy-those-men-scare-me-5.jpg',
    altText: 'old flyer'
  },

  {
    id: 7,
    arcurl: 'daddy-those-men-scare-me-23.jpg',
    altText: 'jeff'
  },

{
    id: 8,
    arcurl: 'daddy-those-men-scare-me-52.jpg',
    altText: 'Daddy Those Men Scare Me live'
  },

{
    id: 9,
    arcurl: 'daddy-those-men-scare-me-56.jpg',
    altText: 'flyer'
  },

  {
    id: 10,
    arcurl: 'daddy-those-men-scare-me-65.jpg',
    altText: 'Daddy Those Men Scare Me live'
  },

  {
    id: 11,
    arcurl: 'daddy-those-men-scare-me-566.jpg',
    altText: 'flyer - Dublin Castle'
  },

  {
    id: 12,
    arcurl: 'daddy-those-men-scare-me-fulham-swan.jpg',
    altText: 'Fulham Swan'
  },


  {
    id: 13,
    arcurl: 'daddy-those-men-scare-me-jeffrey.jpg',
    altText: 'Jeff'
  },  

  {
    id: 14,
    arcurl: 'daddy-those-men-scare-me-mar5.jpg',
    altText: 'Daddy Those Men Scare Me live'
  },

  {
    id: 15,
    arcurl: 'daddy-those-men-scare-me-mark-and-jeff.jpg',
    altText: 'pre-gig'
  },

  {
    id: 16,
    arcurl: 'daddy-those-men-scare-me-marquee.jpg',
    altText: 'Daddy Those Men Scare Me live'
  },

  {
    id: 17,
    arcurl: 'daddy-those-men-scare-ponders-end.jpg',
    altText: 'green flyer'
  },
  {
    id: 18,
    arcurl: 'daddy-those-men-scare-me-mar1.jpg',
    altText: 'The Marquee - ohhhh'
  },
  {
    id: 19,
    arcurl: 'img001.jpg',
    altText: 'tea for the Wicked - flyer'
  },
  {
    id: 20,
    arcurl: 'img001-2.jpg',
    altText: 'dunno who that is'
  },
  {
    id: 21,
    arcurl: 'img002.jpg',
    altText: 'yet another flyer'
  },
  {
    id: 22,
    arcurl: 'img002-2.jpg',
    altText: 'red guitar'
  },
  {
    id: 23,
    arcurl: 'img003.jpg',
    altText: 'some flyer or other'
  },
  {
    id: 24,
    arcurl: 'img003-2.jpg',
    altText: 'Stoke Newington Flyer'
  },
  {
    id: 25,
    arcurl: 'img003-3.jpg',
    altText: 'sunset strip'
  },
  {
    id: 26,
    arcurl: 'img003-4.jpg',
    altText: 'Daddy Those Men Scare Me live'
  },
  {
    id: 27,
    arcurl: 'img003-5.jpg',
    altText: 'r u staggerin this christmas?'
  },
  {
    id: 28,
    arcurl: 'img003-6.jpg',
    altText: 'Dublin Castle mailing list'
  },
  {
    id: 29,
    arcurl: 'img003-7.jpg',
    altText: 'Christmas party'
  },
  {
    id: 30,
    arcurl: 'img004.jpg',
    altText: 'Daddy Those Men Scare Me live'
  },
  {
    id: 31,
    arcurl: 'img004-2.jpg',
    altText: 'Hope an Anchor'
  },
  {
    id: 32,
    arcurl: 'img004-3.jpg',
    altText: 'Daddy Those Men Scare Me live'
  },
    {
    id: 33,
    arcurl: 'img004-4.jpg',
    altText: 'flyer'
  },
    {
    id: 34,
    arcurl: 'img005.jpg',
    altText: 'another flyer'
  },
	{
    id: 35,
    arcurl: 'img005-2.jpg',
    altText: 'Hope and Anchor - Wicker Man poster'
  },
  {
    id: 36,
    arcurl: 'img006-2.jpg',
    altText: 'gig list'
  },
  	{	
    id: 36,
    arcurl: 'img004-5.jpg',
    altText: 'Bugbear Promotions'
  }
  ]

 archieveImageStrings  = archieveImages.map((num) =>{
		return 'archieveImages/'+num.arcurl;
	})


archieveImages.forEach(function(value){
	var newImage = document.createElement("img");
	newImage.src = 'archieveImages/'+value.arcurl;
  newImage.alt = value.altText;
	achieveContainer.appendChild(newImage);

})