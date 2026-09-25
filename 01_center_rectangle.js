const window_width = 800;
const window_height = 400;
const rectangle_width = 300;
const rectangle_height = 200;

const r = require("raylib");

function setup() {
    r.InitWindow(window_width, window_height, "Rectangle in the Center");
    r.SetTargetFPS(50);
}

function x_coordinate(r_width, w_width) {
    // const center_x = w_width / 2;
    // const half_of_width = r_width / 2;
    // const x = center_x - half_of_width;

    return (w_width - r_width) / 2;
}

function y_coordinate(r_height, w_height) {
    // const center_y = w_height / 2;
    // const half_of_height = r_height / 2;
    // const y = center_y - half_of_height;

    return (w_height - r_height) / 2;
}

function update() {}

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);
    const x = x_coordinate(rectangle_width, window_width);
    const y = y_coordinate(rectangle_height, window_height);
    r.DrawRectangle(x, y, rectangle_width, rectangle_height, r.WHITE);

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
