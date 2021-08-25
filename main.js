function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    tintColour="";
}

function draw(){
    image(video,0,0,600,400);
    tint(tintColour);
}

function setTint(){
    tintColour=document.getElementById("colourInput").value;
}

function take_snapshot(){
    save("FilteredPic.png");
}