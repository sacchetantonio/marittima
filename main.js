const urlString = window.location.href;
let url = new URL(urlString);
let username = url.searchParams.get("count");


let moveX=0


function setup() {
  //canvas
  createCanvas(windowWidth, windowHeight);
 




  
}

function draw() {
  if(moveX >width){
    moveX=0
  }

  moveX+=2
 textAlign(LEFT,CENTER);
 

  background("black");
  if (frase) {
    for (key in frase) {
   
      const fr = frase[key];
      let testo = fr.text;
      let translationX= fr.randomX;
  
      
      testo=testo.toUpperCase()
      textFont("Roboto Mono");
  textStyle(BOLD);
  textSize(50);
fill('white');


text(testo,-windowWidth-moveX,windowHeight-50*counter);

text(testo,windowWidth-windowWidth-moveX,windowHeight-50*counter);
// text(testo,windowWidth-windowWidth/2-moveX,50);
text(testo,windowWidth-moveX,windowHeight-50*counter);
// text(testo,windowWidth+windowWidth/2-moveX,50);
text(testo,2*windowWidth-moveX,windowHeight-50*counter);
// text(testo,2*windowWidth+windowWidth/2-moveX,50);
text(testo,3*windowWidth-moveX,windowHeight-50*counter)

translate(translationX,50)


    }
      
}
}