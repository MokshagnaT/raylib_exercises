const window_width = 600;
const window_height = 400;
const bigRectangleX = 100;
const bigRectangleY = 100;
const big_rectangle_width = 180;
const big_rectangle_height = 200;
const small_rectangle_width_requirement = 0.5;
const small_rectangle_height_requirement = 0.5;

function relative_dimension(
    big_rectangle_dimension,
    small_rectangle_dimension_requirement,
) {
    return big_rectangle_dimension * small_rectangle_dimension_requirement;
}

function relative_coordinate(
    big_rectangle_coordinate,
    big_rectangle_dimension,
    small_rectangle_dimension,
) {
    return (
        big_rectangle_coordinate +
        (big_rectangle_dimension - small_rectangle_dimension) / 2
    );
}

const r = require("raylib");

function setup() {
    r.InitWindow(window_height, window_height, "Rectangle in a Rectangle");
    r.SetTargetFPS(50);
}

function update() {}

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    r.DrawRectangle(
        bigRectangleX,
        bigRectangleY,
        big_rectangle_width,
        big_rectangle_height,
        r.GRAY,
    );

    const small_rectangle_width = relative_dimension(
        big_rectangle_width,
        small_rectangle_width_requirement,
    );
    const small_rectangle_height = relative_dimension(
        big_rectangle_height,
        small_rectangle_height_requirement,
    );
    const small_rectangle_x = relative_coordinate(
        bigRectangleX,
        big_rectangle_width,
        small_rectangle_width,
    );
    const small_rectangle_y = relative_coordinate(
        bigRectangleY,
        big_rectangle_height,
        small_rectangle_height,
    );

    r.DrawRectangle(
        small_rectangle_x,
        small_rectangle_y,
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
