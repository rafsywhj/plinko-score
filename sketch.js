const Engine = Matter.Engine,
	World = Matter.World,
	Events = Matter.Events,
	Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var score = 0;
var particle;
var turn = 0;
var gameState = 'start';

var divisionHeight = 300;

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(width / 2, height, width, 20);

	for (var k = 0; k <= width; k = k + 80) {
		divisions.push(new Division(k, height - divisionHeight / 2, 10, divisionHeight));
	}

	for (var j = 75; j <= width; j = j + 50) {
		plinkos.push(new Plinko(j, 75));
	}

	for (var j = 50; j <= width - 10; j = j + 50) {
		plinkos.push(new Plinko(j, 175));
	}

	for (var j = 75; j <= width; j = j + 50) {
		plinkos.push(new Plinko(j, 275));
	}

	for (var j = 50; j <= width - 10; j = j + 50) {
		plinkos.push(new Plinko(j, 375));
	}
}

function draw() {
	background('black');
	textSize(20);
	text('Score : ' + score, 20, 30);
	text('100', 20, 525);
	text('200', 100, 525);
	text('300', 180, 525);
	text('400', 260, 525);
	text('500', 340, 525);
	text('500', 420, 525);
	text('400', 500, 525);
	text('300', 580, 525);
	text('200', 660, 525);
	text('100', 740, 525);

	Engine.update(engine);

	for (var i = 0; i < plinkos.length; i++) {
		plinkos[i].display();
	}
	/*
    if (frameCount % 60 === 0) {
      particles.push(new Particle(random(100, 900), 10, 10));
      score++;
    }

    for (var j = 0; j < particles.length; j++) {
      particles[j].display();
    }
    */
	for (var k = 0; k < divisions.length; k++) {
		divisions[k].display();
	}
	ground.display();

	if (particle != null) {
		particle.display();
		if (particle.body.position.y > 760) {
			if (particle.body.position.x < 40) {
				score += 100;
				particle = null;
			} else if (particle.body.position.x < 120) {
				score += 200;
				particle = null;
			} else if (particle.body.position.x < 200) {
				score += 300;
				particle = null;
			} else if (particle.body.position.x < 300) {
				score += 400;
				particle = null;
			} else if (particle.body.position.x < 400) {
				score += 500;
				particle = null;
			} else if (particle.body.position.x < 480) {
				score += 500;
				particle = null;
			} else if (particle.body.position.x < 560) {
				score += 400;
				particle = null;
			} else if (particle.body.position.x < 640) {
				score += 300;
				particle = null;
			} else if (particle.body.position.x < 720) {
				score += 200;
				particle = null;
			} else if (particle.body.position.x < 800) {
				score += 100;
				particle = null;
			}
		}
		if (turn >= 5) {
			gameState = 'end';
		}
	}
	if (gameState === 'end' && particle === null) {
		fill(0, 0, 0);
		rect(400, 400, 800, 800);
		fill('white');
		textSize(20);
		text('Score : ' + score, 20, 30);
		textSize(50);
		text('Game Over!', 300, 300);
	}
}

function keyPressed() {
  console.log("hi")
  if(keyCode === 32){
	if (gameState === 'start') {
		turn++;
    particle = new Particle(mouseX, 10, 10, 10);
    console.log(turn);
  }
}
  console.log(gameState);
}
