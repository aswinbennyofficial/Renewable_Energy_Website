
function alerter(){

var elec=document.getElementById("electricity").value;
var gas=document.getElementById("gas").value;
var oil=document.getElementById("oil").value;
var mile=document.getElementById("miles").value;
var fa=document.getElementById("flighta").value;
var gb=document.getElementById("flightb").value;
// var news;
// var al;

// if(document.getElementById('new1').checked){
//     news=0;
// }
// else{
//     news=1;
// }

// if(document.getElementById('Al1').checked){
//     al=0;
    
// }
// else{
//     al=1;
// }

// Number(news);
// Number(al);


var total=Number(elec)*.085+Number(gas)*1.640+Number(oil)*2.62+Number(mile)*2.78+Number(fa)*.186+Number(gb)*.13 ;
// +news+al;


var mainDiv = document.getElementById("result");
mainDiv.innerHTML = "<p><em>Your carbon emmission is: </em>"+total+"kg </p>";

}