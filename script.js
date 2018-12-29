let img;

function setup() {
    createCanvas(window.innerWidth - 10, window.innerHeight - 12, WEBGL);
    img = loadImage('/gradient.png');
}

function draw() {
    background('#fff');
    let count = 0;
    for (let i = -100; i < window.innerHeight; i += 100) {
        for (let j = 0; j < window.innerWidth; j += 100) {
            if (i > 200) {
                count += 0.5;
            } else {
                count -= 0.5;
            }
            push();
            translate(j - (window.innerWidth / 2), i - (window.innerHeight / 2 - 100));
            rotateX(frameCount * 0.01);
            rotateY(frameCount * 0.01);
            texture(img);
            // noStroke();
            strokeWeight(1);
            stroke(255);
            box(60 + count);
            // sphere(60 + count, 12, 8);
            pop();
        }
    }
    push();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    texture(img);
    strokeWeight(1);
    stroke(255);
    sphere(200, 12, 8);
    pop();
}