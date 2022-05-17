canvas=document.getElementById("myCanvas");
ctx= canvas.getContext('2d');

rover_height= 100;
rover_width=100;

var array_of_mars_images=["mars.jpg", "mars1.jpg" ,"mars2.png", "mars3.jpg","mars4.jpg" ];

var random_number= Math.floor( Math.random()*5);

var bg_img= array_of_mars_images[random_number];
var robot_img="rover.png";


rover_x=10;
rover_y=10;
 

function add(){
background_img= new  Image();
background_img.onload= upload_background;
background_img.src=  bg_img;

rover_img= new  Image();
rover_img.onload= upload_rover;
rover_img.src= robot_img;
}

function upload_background(){
    ctx.drawImage(background_img,0,0,canvas.width, canvas.height);

}

function upload_rover(){
    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);
}
 
 window.addEventListener("keydown", my_keydown)
 
 function my_keydown(e){
 key_pressed= e.keyCode;
 console.log(key_pressed);
 if(key_pressed=='37'){
     left();
     console.log("left");
 }
 if(key_pressed=='38'){
   up();
    console.log("up");

}
if(key_pressed=='39'){
    right();
    console.log("right");
}
if(key_pressed=='40'){
   down();
    console.log("down");
}

 }

 function up(){
    if(rover_y>=0)
    {
        rover_y=rover_y-10;
        console.log("Up arrow pressed" + rover_x + "," + rover_y)
        upload_background();
        upload_rover();
    }

 }
 function down(){
    if(rover_y<=500)
    {
        rover_y=rover_y+10;
        console.log("Down arrow pressed" + rover_x + "," + rover_y)
        upload_background();
        upload_rover();
    }

 }

 function right(){
    if(rover_x<=700)
    {
        rover_x=rover_x+ 10;
        console.log("Right arrow pressed" + rover_x + "," + rover_y)
        upload_background();
        upload_rover();
    }

 }
 function left(){
    if(rover_x>=0)
    {
        rover_x=rover_x-10;
        console.log("Left arrow pressed" + rover_x + "," + rover_y)
        upload_background();
        upload_rover();
    }

 }
 