let graphics;
let graphicsSize = 2000;
let canvasSize;

function setup() {
    pg = createGraphics(graphicsSize, graphicsSize);
    canvasSize = min(windowHeight, windowWidth);
    createCanvas(canvasSize, canvasSize);

    noLoop();
}

function draw() {
    pg.noStroke();
    pg.background(90)
    for (let i = 0; i < 20; i++) {
        pg.fill(randRT() * 255, 0, 0);
        pg.circle(
            randRT() * graphicsSize,
            randRT() * graphicsSize,
            randRT() * 0.1 * graphicsSize
        );
    }
    image(pg, 0, 0, canvasSize, canvasSize);
    triggerPreview()
}

function windowResized() {
    let canvasSize = min(windowHeight, windowWidth);
    resizeCanvas(canvasSize, canvasSize, true);
    image(pg, 0, 0, canvasSize, canvasSize);
}
