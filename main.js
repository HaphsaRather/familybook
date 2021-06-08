var PEOPLE=["ANIKIN.jpeg",
"PADME.jpeg",
 "luke.png",
 "liea.jpeg"
];
  

  var i = 0;

function nextSlide()
{
  
document.getElementById("PEOPLE").innerHTML=PEOPLE[i];
  
  i++;
}