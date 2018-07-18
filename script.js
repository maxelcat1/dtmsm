console.log('hello');


var achieveContainer = document.querySelector("#archieveImages");


const archieveImages = [
 {
    id: 1,
    arcurl: 'vibrating-daddies.jpg',
    altText: 'some alt text'
  },
 {
    id: 1,
    arcurl: 'scared-photo.jpg',
    altText: 'some alt text'
  },
 {
    id: 1,
    arcurl: 'scared-cat.jpg',
    altText: 'some alt text'
  },



  {
    id: 1,
    arcurl: 'daddies-and-spizz-energi-1st-july-2017.jpg',
    altText: 'some alt text'
  },
{
    id: 2,
    arcurl: 'dublin-castle-with-spizz-energi-2017-07-01a.jpg',
    altText: 'some alt text'
  },
  {
    id: 3,
    arcurl: 'daddy-those-men-scare-me-1.jpg',
    altText: 'some alt text'
  },
  {
    id: 4,
    arcurl: 'daddy-those-men-scare-me-2.jpg',
    altText: 'some alt text'
  },
  {
    id: 5,
    arcurl: 'daddy-those-men-scare-me-4.jpg',
    altText: 'some alt text'
  },

{
    id: 6,
    arcurl: 'daddy-those-men-scare-me-5.jpg',
    altText: 'some alt text'
  },

  {
    id: 7,
    arcurl: 'daddy-those-men-scare-me-23.jpg',
    altText: 'some alt text'
  },

{
    id: 8,
    arcurl: 'daddy-those-men-scare-me-52.jpg',
    altText: 'some alt text'
  },

{
    id: 9,
    arcurl: 'daddy-those-men-scare-me-56.jpg',
    altText: 'some alt text'
  },

  {
    id: 10,
    arcurl: 'daddy-those-men-scare-me-65.jpg',
    altText: 'some alt text'
  },

  {
    id: 11,
    arcurl: 'daddy-those-men-scare-me-566.jpg',
    altText: 'some alt text'
  },

  {
    id: 12,
    arcurl: 'daddy-those-men-scare-me-fulham-swan.jpg',
    altText: 'some alt text'
  },


  {
    id: 13,
    arcurl: 'daddy-those-men-scare-me-jeffrey.jpg',
    altText: 'some alt text'
  },  

  {
    id: 14,
    arcurl: 'daddy-those-men-scare-me-mar5.jpg',
    altText: 'some alt text'
  },

  {
    id: 15,
    arcurl: 'daddy-those-men-scare-me-mark-and-jeff.jpg',
    altText: 'some alt text'
  },

  {
    id: 16,
    arcurl: 'daddy-those-men-scare-me-marquee.jpg',
    altText: 'some alt text'
  },

  {
    id: 17,
    arcurl: 'daddy-those-men-scare-ponders-end.jpg',
    altText: 'some alt text'
  },
  {
    id: 18,
    arcurl: 'daddy-those-men-scare-me-mar1.jpg',
    altText: 'some alt text'
  },
  {
    id: 19,
    arcurl: 'img001.jpg',
    altText: 'some alt text'
  },
  {
    id: 20,
    arcurl: 'img001-2.jpg',
    altText: 'some alt text'
  },
  {
    id: 21,
    arcurl: 'img002.jpg',
    altText: 'some alt text'
  },
  {
    id: 22,
    arcurl: 'img002-2.jpg',
    altText: 'some alt text'
  },
  {
    id: 23,
    arcurl: 'img003.jpg',
    altText: 'some alt text'
  },
  {
    id: 24,
    arcurl: 'img003-2.jpg',
    altText: 'some alt text'
  },
  {
    id: 25,
    arcurl: 'img003-3.jpg',
    altText: 'some alt text'
  },
  {
    id: 26,
    arcurl: 'img003-4.jpg',
    altText: 'some alt text'
  },
  {
    id: 27,
    arcurl: 'img003-5.jpg',
    altText: 'some alt text'
  },
  {
    id: 28,
    arcurl: 'img003-6.jpg',
    altText: 'some alt text'
  },
  {
    id: 29,
    arcurl: 'img003-7.jpg',
    altText: 'some alt text'
  },
  {
    id: 30,
    arcurl: 'img004.jpg',
    altText: 'some alt text'
  },
  {
    id: 31,
    arcurl: 'img004-2.jpg',
    altText: 'some alt text'
  },
  {
    id: 32,
    arcurl: 'img004-3.jpg',
    altText: 'some alt text'
  },
    {
    id: 33,
    arcurl: 'img004-4.jpg',
    altText: 'some alt text'
  },
    {
    id: 34,
    arcurl: 'img005.jpg',
    altText: 'some alt text'
  },
	{
    id: 35,
    arcurl: 'img005-2.jpg',
    altText: 'some alt text'
  },
  {
    id: 36,
    arcurl: 'img006-2.jpg',
    altText: 'some alt text'
  },
  	{	
    id: 36,
    arcurl: 'img004-5.jpg',
    altText: 'some alt text'
  }
  ]

 archieveImageStrings  = archieveImages.map((num) =>{
		return 'archieveImages/'+num.arcurl;
	})


archieveImages.forEach(function(value){
	var newImage = document.createElement("img");
	newImage.src = 'archieveImages/'+value.arcurl;
	achieveContainer.appendChild(newImage);

})