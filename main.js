var canvas = new fabric.Canvas ('myCanvas');

ball_y=0;
ball_x=0;

hole_x=800;
hole_y=400;

hi_width = 50;
hi_height = 50;


function load_img()
{
	fabric.Image.fromURL("golf-h.png",function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(60);
		hole_obj.scaleToHeight(60);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	 });
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png",function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
	   });
		canvas.add(ball_obj);
	   });	
}

function check()
{
if((ball_x==hole_x)&&(ball_y==hole_y))
{
	canvas.remove(ball_obj);
	document.getElementById("hd3").innerHTML="GAME OVER!!!";
	document.getElementById("myCanvas").style.borderColor="red";
    }
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if(keyPressed == '38')
		{
			up();
			check();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			check();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			check();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			check();
			console.log("right");
		}
	
	
	function up()
	{
		if(ball_y >=10)
{
    ball_y = ball_y - hi_height;
    console.log("block image height = " + hi_height);
    console.log("when up arrow key is pressed, X =" + ball_x +",y ="+ ball_y);
    canvas.remove (ball_obj);
    new_image();
}
	}

	function down()
	{
		if(ball_y <= 440)
		{
		ball_y = ball_y + hi_height;
		console.log("block image height = " + hi_height);
		console.log("when down arrow key is pressed, X = " + ball_x +",y ="+ ball_y);
		canvas.remove (ball_obj);
		new_image();	
	    } 
	}

	function left()    
	{
		if(ball_x >5)		
{
    ball_x = ball_x - hi_width;
    console.log("block image width =" + hi_width);
    console.log("when left arrow key is pressed, X =" + ball_x +",y ="+ ball_y);
    canvas.remove (ball_obj);
    new_image();
}
	}

	function right()
	{
		if(ball_x <=1040)
		{
			ball_x = ball_x + hi_width;
    console.log("block image width =" + hi_width);
    console.log("when right arrow key is pressed, X =" + ball_x +",y ="+ ball_y);
    canvas.remove (ball_obj);
    new_image();
		}
	}
	
}
