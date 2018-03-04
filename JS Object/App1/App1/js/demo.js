// explicitly declare global preload variable
var preload;

var timerID = -1; // My timer ID, retrieved later

// Class and Array examples
var arr = null;
arr = new Array(); // standard syntax
arr = []; // shorthand array syntax
arr = ['Ryan', 'Kevin', 'Simone']; // initialized with strings

var objArr = {}; // shorthand OBJECT syntax - careful
// initialize as property_name : value, a mix of object/array syntax effectively
//  describes what JSON is Javascript Object Notation
var objArr = { 'prop_name' : 'Alec', 'grade' : 85, 'max_score' : 115 };

var clsNames = [];

//Pseudo-class example :
function ClassName( name, num ){
  this.Name = name;
  this.Num = num;
}
ClassName.prototype.Up = function( byWhat ){
  this.Num += byWhat;
};
ClassName.prototype.Show = function() {
  return this.Name + " : " + this.Num;
};

window.onload = function(){
  document.getElementById("btnLoad").onclick = fLoad; // bind listener to fLoad
  document.getElementById("btnStart").onclick = fStart;
  document.getElementById("btnStop").onclick = function(e){
    window.clearInterval( timerID );
    timerID = -1; // initialize back to no Timer
  };
  preload = new Image(); // new Image object
  var i = 2;
  preload.src = "tux" + i + ".png"; // once src defined, browser will load from net
  // verify by looking in net tab, see the pull.. now add the show...
  document.getElementById("flyImage").src = 'tux1.png';
  
  // Arrays and objects
  for( var x in objArr )
    console.log( x + " : " + objArr[x]);
  console.log( objArr['prop_name'] + ' got : ' + ( objArr['grade']/objArr['max_score']));
  
  // Create a Class instance and push() into array
  var tmpClass = new ClassName( arr[0], 0 );
  // or make a bunch
  for (var i = 0; i < arr.length; i++) {
    clsNames.push( new ClassName( arr[i], i ));
  }
  
};
function fStart(e){
  // start interval timer, call Move every 40ms and save our ID for clearing later
  if( timerID < 0 ) // No timer yet, OK then
    timerID = window.setInterval( Move, 40 ); 
}
function Move( e ) {
  var tux = document.getElementById("fly"); // got div object
  tux.style.left = ( tux.offsetLeft + 5 ) + 'px';// (numeric_expression) + string = string
  console.log( ( tux.offsetLeft + 5 ) + 'px' );
  if( tux.offsetLeft > window.innerWidth )
    tux.style.setProperty( 'left', '${-tux.offsetWidth}px');
  
  // Process our class
  for( var item in clsNames ) // or for() loop with index
    clsNames[item].Up( 2 );

  document.getElementById('status').innerHTML = '';
  for (var i = 0; i < clsNames.length; i++) {
    document.getElementById('status').innerHTML += clsNames[i].Show() + '<br/>';
  }
}


function fLoad(e){
  var img = document.getElementById("flyImage"); // save image object
  img.src = preload.src;
}


