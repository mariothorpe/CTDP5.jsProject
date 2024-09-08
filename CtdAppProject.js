function setup() {
  createCanvas(400, 470);
}

function draw() {
  //background(100,27,88);
  changeBackground(); //custom function 
  airplaneFunction();
  textSize(15);
  textFont('Helvetica');
  fill("black");
  text('J.D.T.', 300, 415); //signed with my intials 
  fill("black");
  text('The Kraken', 150, 40); //signed with volleyball nickname
  text('LIVE, LOVE, VOLLEYBALL :)', 95, 390);//decorative text
  text('Welcome To Code The Dream : Intro To Programming 2024', 0, 450);
  decorativeCircles();

}

function changeBackground() {
  frameRate(10);
  let currentTime = new Date().getMilliseconds();
  if (currentTime < 333) {
      background(55, 187, 200);
  } else if (currentTime < 667) {
      background(138, 250, 21);
  } else {
      background(250, 49, 185);
  }
}

function airplaneFunction() {
  strokeWeight(5);
  //make 1000 random colored triangles, with random coordinates within a predetermined square area
  for (j = 1; j <= 1000; j++) {
      let randomColorR = Math.random() * 255;
      let randomColorG = Math.random() * 255;
      let randomColorB = Math.random() * 255;
      fill(randomColorR, randomColorG, randomColorB);
      let startX = (Math.random() * 300) + 50;
      let startY = (Math.random() * 300) + 50;
      let startX2 = (Math.random() * 300) + 50;
      let startY2 = (Math.random() * 300) + 50;
      let startX3 = (Math.random() * 300) + 50;
      let startY3 = (Math.random() * 300) + 50;

      triangle(startX, startY, startX2, startY2, startX3, startY3);

  }
}


function decorativeCircles() {
  for (k = 1; k <=500; k++) {
    let randomColorR= Math.random() * 300;
    let randomColorG = Math.random() * 300;
    let randomColorB = Math.random() * 300;
    fill(randomColorR, randomColorG, randomColorB);
  strokeWeight(5);
  ellipse(50, 350, 75, 75);
  ellipse(330, 50, 75, 75);
  ellipse(50,50,75,75);
  ellipse(330,350,75,75);
  }
}


