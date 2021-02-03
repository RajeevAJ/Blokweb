// Om meerdere cards te slecten in de slider heb ik een loop gemaakt. de id van de knoppen op de cards heb ik "hartknop0 tot 6 genoemd"

for (let i = 0; i < 7; i++) {
  var stringid = '#hartknop'+i
  var likeknop = document.querySelector(stringid)
  likeknop.addEventListener('click',function(){change(i)});
  // BRON: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
}

// Om meerdere 

var image_tracker = '0'
function change (imageIndex){
  var image = document.getElementById('hart'+imageIndex);
  if(image_tracker=='0') {
    image.src ='/images/hart5-5hdpi.png';
    image_tracker = '5';
    
  }else{
    image.src = '/images/hart0-5hdpi.png';
    image_tracker = '0';
  }
}

