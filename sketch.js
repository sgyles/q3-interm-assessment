var x = -5;
var y = 12;
sizes = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(66,244,101);
    pinkRect();
    yellowStripe();
    blackLines();
    changeBackground();
    rowCircles(45);
    rowCircles(145);
    rowCircles(255);
    flowers();
}
 function flowers(){
 //petals
    noStroke();
    fill(185, 66, 244);
    ellipse(x+10,y-10,35,35);
    ellipse(x+10,y+10,35,35);
      ellipse(x-10,y-10,35,35);
        ellipse(x-10,y+10,35,35);
    
    //bulb
    fill(255,200,0);
    ellipse(x,y,25,25);
    }

function pinkRect(){
    noStroke();
    fill(241,66,244);
    rect(mouseX, mouseY, 150, 10);
}

function yellowStripe(){
    fill(244,241,66);
    x = 200;
    y+=23;
    rect(x, y, 25, height);
    
    if(y > height){
        y = 0 - height;
    }
}

function blackLines(){
    var i = 0;
    var yLine = 20;
    while(i<10){
        strokeWeight(4);
        stroke(7,6,5);
        line(100, yLine, 500, yLine);
        i++;
        yLine += 20;
    }
}

function changeBackground(){
    if(mouseIsPressed && mouseY < 200){
        background(244,176,66);
    }
    else if(mouseIsPressed && mouseY >=200){
        background(170,66,244);
    }
}

function rowCircles(yRow){
    var xCircle = 40;
    for(var i = 0; i < 10; i++){
        noStroke();
        fill(66,244,212);
        ellipse(xCircle, yRow, sizes[i], sizes[i]);
        xCircle += 50;
    }
}