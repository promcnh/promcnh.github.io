var inputHeight = 10;
var inputWidth = 10;


//Generate div grid
function loadPage(){
  document.getElementById("demo").innerHTML = 	build(inputHeight,inputWidth); 
}
//Generate containers to be populated with boxes 
function build(height,width) {  
  var code = "";  
  var y;
  for (y = 0; y < height; y++) {    
    timing = y * 1000;    
    code += "<div class ='y-container'>";
    code += buildWidth(width);
    code += "</div>";
    }
    return code;
}
//Populate containers with boxes
function buildWidth(width) {
  var codeTemp = "";
  var x;
  codeTemp += "<div class= 'x-container'>";
  for (x = 0; x < width; x++) {   
    codeTemp += "<div class ='boxes'></div>";
  }
  codeTemp += "</div>";
  return codeTemp;
}
function zoom(){
  inputHeight += 1;
  inputWidth += 1;
  loadPage();
}

window.onload = loadPage(); //Run on page load
