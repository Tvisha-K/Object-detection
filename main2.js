object = [];

img= "";

model_status = "";

function setup(){

    canvas = createCanvas(640,420);

    canvas.center();

    cocossd = ml5.objectDetector("cocossd",modelLoaded);

}


function modelLoaded(){

    document.getElementById("status").innerHTML = "Status : Detecting objects"

    console.log("model has been loaded successfully");

    model_status = true;

    cocossd.detect(img, gotResults);

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
    
        if (model_status != ""){
    
            for(i=0; i < object.length; i++){
    
                document.getElementById("status").innerHTML = "Status : Object Detected";
                
                object_name = object[i].label;
    
                object_percentage = floor(object[i].confidence*100);
    
                object_x = object[i].x;
    
                object_y = object[i].y;
    
                object_width = object[i].width;
    
                object_height = object[i].height;
    
                fill("red");
    
                text(object_name + " " + object_percentage + "%" , object_x , object_y);
    
                stroke("red");
    
                noFill();
    
                rect(object_x , object_y , object_width , object_height);
    
            }
    
        }
       
    }
    
    function gotResults(e,r){
    
        if (e){
    
           console.error(e) 
    
        }
    
        else{
    
            console.log(r);
    
            object = r;
    
        }
    
    }






