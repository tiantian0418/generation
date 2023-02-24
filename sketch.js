let h;

function setup() 
{
	let l = 0.9*min(windowWidth, windowHeight);
	// createCanvas(windowWidth,windowHeight);
	colorMode(RGB);
	blendMode(HARD_LIGHT);
	frameRate(2);
	smooth();
	h = random(0, 20); // 0 - 360
}

function draw() 
{
	
  createCanvas (windowWidth, windowHeight);
	noStroke ();
	fill (255,random (100,130),random (100,130),100);

	circle (mouseX+random(0,20), mouseY, random(50,130));
  
	let h1 = (h * 60) % 300;
	let h2 = (h1 + 100) % 300;
	
	if(random(0, 50)<40)
	{
		push();
		fill(random(h1, h2), 239, 23, 50);
		noStroke();
		bubble();
		pop();
	}
	else
	{
		push();
		stroke(random(h1, h2), 239, 23, 50);
		strokeWeight(random(5, 10));
		noFill();
		bubble();
		pop();
	}
}

function bubble()
{
	push();
		// mouse control
		// drawingContext.filter = "blur(" + int(random(5,30)) + "px)";
		// circle(mouseX + random(-10, 10), mouseY + random(-10, 10), random(10, 100));
		
		// random by position
		for(let t=0; t<random(3, 6); t++)
		{
			drawingContext.filter = "blur(" + int(random(15,30)) + "px)";
			let x = random(0, width), y = random(0, height);
			circle(x, y, x/random(4, 8) + y/random(6, 10) + random(0, 50));
		}
		
		// all random
		drawingContext.filter = "blur(" + int(random(5,15)) + "px)";
		circle(random(0, width), random(0, height), random(10, 50));
	pop();
}

// function keyPressed() 
// {
//   if (key == 's')  save('bubble.png');
// }


// function draw () {
//   createCanvas (windowWidth, windowHeight);
// 	noStroke ();
// 	fill (random (90,251),random (130,192),random (50,209),200);

// 	circle (mouseX+random(0,20), mouseY, random(50,130));
// }

function mouseClicked() {
  //noStroke();
	//fill(random(255));
	fill(random(160, 255), random(150, 255), random(180, 255), random(255));
	ellipse(mouseX, mouseY, random(50, 150));
}
