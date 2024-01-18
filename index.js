
// let Engine = Matter.Engine,
//     World = Matter.World,
//     Events = Matter.Events,
//     Bodies = Matter.Bodies;

// let engine;
// let world;
// let particles = [];


// function setup() {
//   createCanvas(innerWidth, innerHeight);
//     background(200);

//     engine = Engine.create();
//     world = engine.world;
//     world.gravity.y = 1;

//     // let p = new Particle(300, 50, 50);
//     // particles.push(p);
//     for(let i = 0;i<800;i++){
//         let p = new Particle(random(width), random(height),6);
//         p.restitution =1;
//         p.friction=1;
//         particles.push(p);
//     }
    

//     let floor = Bodies.rectangle(width/2,height+10,width,20,{isStatic: true});
//     let ceiling = Bodies.rectangle(width/2,-10,width,20,{isStatic: true});
//     let left = Bodies.rectangle(-10,height/2,20,height,{isStatic: true});
//     let right = Bodies.rectangle(width +10,height/2,20,height,{isStatic: true});
//     let shape = Bodies.circle(width/2,height/2,width/6,{isStatic: true});
//     floor.restitution=1;
//     ceiling.restitution=1;
//     left.restitution=1;
//     right.restitution=1;
//     shape.friction=1;
//     World.add(world, [floor, left, ceiling, right,shape]);

// }
// function draw() {
//     colorMode(RGB, 255);
//     background(30);
//     for(let p of particles){
//         p.show();
//     }

//     world.gravity.y = (Math.round(sin(frameCount/100))*.15);
//     world.gravity.x = (Math.round(cos(frameCount/100))*.15);
//     // world.gravity.x = ((cos(frameCount/50))*.150);
//     // world.gravity.y = ((sin(frameCount/50))*.150);

//     Engine.update(engine);
// }

// class Particle {
//     constructor(x,y,r){
//         this.body = Bodies.circle(x,y,r);
//         this.body.restitution=1;

//         World.add(world, this.body);
//         this.r = r;
//     }
//     show(hue){
        
//         colorMode(HSB, 100);
//         fill(6,(Math.pow(this.body.speed,6)),100);
//         stroke(220);
//         noStroke();
//         let pos = this.body.position;
//         push();
//         translate(pos.x ,pos.y);
//         circle(10,0,this.r*0.8);
//         pop();
//     }
// }




let Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;

let engine;
let world;
let particles = [];
let shape;

function setup() {
    createCanvas(innerWidth, innerHeight);
    background(200);

    engine = Engine.create();
    world = engine.world;
    world.gravity.y = 1;

    let floor = Bodies.rectangle(width / 2, height + 10, width, 20, { isStatic: true });
    let ceiling = Bodies.rectangle(width / 2, -10, width, 20, { isStatic: true });
    let left = Bodies.rectangle(-10, height / 2, 20, height, { isStatic: true });
    let right = Bodies.rectangle(width + 10, height / 2, 20, height, { isStatic: true });
    shape = Bodies.circle(width / 2, height / 2, width / 6, { isStatic: false });
    floor.restitution = 1;
    ceiling.restitution = 1;
    left.restitution = 1;
    right.restitution = 1;
    shape.friction = 1;
    World.add(world, [floor, left, ceiling, right, shape]);
}

function draw() {
    colorMode(RGB, 255);
    background(30);

    // Update the position of the shape based on the mouse movement
    shape.position.x = mouseX;
    shape.position.y = mouseY;

    for (let p of particles) {
        p.show();
    }

    world.gravity.y = (Math.round(sin(frameCount / 100)) * 0.15);
    world.gravity.x = (Math.round(cos(frameCount / 100)) * 0.15);

    Engine.update(engine);
}

function mousePressed() {
    for (let i = 0; i < 10; i++) {
        let p = new Particle(random(width), random(height), 6);
        particles.push(p);
    }
}

class Particle {
    constructor(x, y, r) {
        this.body = Bodies.circle(x, y, r, { restitution: 0.9 });
        World.add(world, this.body);
        this.r = r;
    }

    show() {
        colorMode(HSB, 100);
        fill(6, (Math.pow(this.body.speed, 6)), 100);
        stroke(220);
        noStroke();
        let pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        circle(10, 0, this.r * 0.8);
        pop();
    }
}
