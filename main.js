const urlString = window.location.href;
let url = new URL(urlString);
let username = url.searchParams.get("count");

let x=0
let y=0
let a=2
let b=0.5
let speedX=a
let speedY=b

function setup() {
  //canvas
  createCanvas(windowWidth, windowHeight);
 




  
}

function draw() {
 textAlign(LEFT);
  x = x+speedX
  y= y+speedY
  if (x> width/2){
    x= -a
  }
  if (y> height/3){
    speedY=-b
  }
  if (x< -width/3){
    speedX=a
  }
  if (y< -height/3){
    speedY=b
  }

  background("black");
  if (frase) {
    for (key in frase) {
      const fr = frase[key];
      let testo = fr.text;
      console.log(key.length)
      testo=testo.toUpperCase()
      textFont("Roboto Mono");
  textStyle(BOLD);
  textSize(50);
fill('white');

      text(testo,-20+x,50);
    
    

      translate(0,50)
      
      
    }
  }

      
}