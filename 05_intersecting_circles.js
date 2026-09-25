const window_width = 600;
const window_height = 400;
const circle1_x = 100;
const circle1_y = 100;
const circle1_radius = 50;
const circle2_x = 200;
const circle2_y = 100;
const circle2_radius = 51;

// function distance(circle1X, circle1Y, circle2X, circle2Y) {
//     return ((circle1X - circle2X) ** 2 + (circle1Y - circle2Y) ** 2) ** 0.5;
// }

function overlap_color(
    circle1X,
    circle1Y,
    circle1Radius,
    circle2X,
    circle2Y,
    circle2Radius,
) {
    const distance =
        ((circle1X - circle2X) ** 2 + (circle1Y - circle2Y) ** 2) ** 0.5;
    return distance >= circle1Radius + circle2Radius ? r.BLACK : r.RED;
}

r = require("raylib");

function setup() {
    r.InitWindow(window_width, window_height, "Circles Optical Illusion");
    r.SetTargetFPS(50);
}

function update() {}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    const color = overlap_color(
        circle1_x,
        circle1_y,
        circle1_radius,
        circle2_x,
        circle2_y,
        circle2_radius,
    );
    r.DrawCircle(circle1_x, circle1_y, circle1_radius, color);
    r.DrawCircle(circle2_x, circle2_y, circle2_radius, color);
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
