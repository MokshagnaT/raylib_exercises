const window_width = 600;
const window_height = 1300;
const big_rectangle_width = 380;
const big_rectangle_height = 900;
const small_rectangle_width = 300;
const small_rectangle_height = 163;

const r = require("raylib");

function setup() {
    r.InitWindow(window_width, window_height, "Rectangle in a Rectangle");
    r.SetTargetFPS(50);
}

function top_rectangle_coordinate(
    big_rectangle_coordinate,
    big_rectangle_dimension,
    top_rectangle_dimension,
) {
    return (
        big_rectangle_coordinate +
        (big_rectangle_dimension - top_rectangle_dimension) / 2
    );
}

function update() { }

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);
    const bigRectangleX = 100;
    const bigRectangleY = 100;
    r.DrawRectangle(
        bigRectangleX,
        bigRectangleY,
        big_rectangle_width,
        big_rectangle_height,
        r.GRAY,
    );
    const smallRectangleX = top_rectangle_coordinate(
        bigRectangleX,
        big_rectangle_width,
        small_rectangle_width,
    );
    const smallRectangleY = top_rectangle_coordinate(
        bigRectangleY,
        big_rectangle_height,
        small_rectangle_height,
    );
    r.DrawRectangle(
        smallRectangleX,
        smallRectangleY,
        small_rectangle_width,
        small_rectangle_height,
        r.WHITE,
    );

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
