const window_width = 600;
const window_height = 400;

r = require("raylib");

function setup() {
    r.InitWindow(window_width, window_height, "Circle Optical Illusion");
    r.SetTargetFPS(50);
}

function update() { }

function draw() {
    r.BeginDrawing();

    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        update();
        draw();
    }
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();
