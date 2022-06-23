image = "";

    
function setup(){

    canvas = createCanvas(640,420);

    canvas.center();


}


function preload(){
    pic = localStorage.getItem("pic");

    if (pic == "dog") {
        
        img = loadImage("dog_cat.jpg");


    }

    if (pic == "basket") {
        
        img = loadImage("basket.jpg");


    }

    if (pic == "bottles") {
        
        img = loadImage("bottles.jpg");


    }

    if (pic == "basketball") {
        
        img = loadImage("basketball.jpg");


    }
    
    console.log(pic);
    
}

function draw(){

    image(img,0,0,640,420);



}




