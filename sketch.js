var starImg,bgImg;
var star, starBody;
var fairy,fairyImg
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadAnimation("images/starImage.png","images/star.png" );
	//starImg = loadImage("images/starImage.png" );
	bgImg = loadImage("images/starryNight.jpg");
	//load animation for fairy here
    fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
    Sound=loadSound("sound/JoyMusic.mp3")
  //  starry = loadImage("images/star.png");
}

function setup() {
	createCanvas(880, 650);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
    fairy=createSprite(70,490,20,20)
	fairy.addAnimation("happy",fairyImg)
    fairy.scale=0.2
	star = createSprite(650,30);
	star.addAnimation("still",starImg);
	//star.addImage(starImg);
	star.scale = 0.04;

    //var star_options={
	//	isStatic:true
	//}
// {restitution:0.5, isStatic:true}
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 ,{restitution:0.5, isStatic:true} );
	World.add(world, starBody);
	Engine.update(engine);
	if (keyDown("space")) {
		//	star.velocityY=-3
			Matter.Body.setStatic(starBody,false)
		}

}


function draw() {
  background(bgImg);
 if(keyCode===UP_ARROW){
	 star.velocityY=-3
 }
  Sound.loop()
  star.x= starBody.position.x 
  star.y= starBody.position.y 

 console.log(star.y);

  //write code to stop star in the hand of fairy



  if(star.y>470 && starBody.position.y>470){

	  Matter.body.setStatic(starBody,true)
  }
  
 
  drawSprites();

}

function keyPressed() {

	
	if (keyCode===UP_ARROW) {
	//	star.velocityY=-3
		Matter.Body.setStatic(starBody,false)
	}

	//writw code to move fairy left and right
	if(keyCode===LEFT_ARROW){
        fairy.x=fairy.x-20
	}

	if(keyCode===RIGHT_ARROW){
        fairy.x=fairy.x+20}
	
}
