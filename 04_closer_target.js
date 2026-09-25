const window_width = 600;
const window_height = 400;

const source_x = 100;
const source_y = 50;
const source_radius = 50;

const target1_x = 200;
const target1_y = 60;

const target2_x = 300;
const target2_y = 170;

const target_radius = 30;

function distance(sourceX, sourceY, targetX, targetY) {
    return ((sourceX - targetX) ** 2 + (sourceY - targetY) ** 2) ** 0.5;
}

const r = require("raylib");

function setup() {
    r.InitWindow(window_width, window_height, "Rectangle in the Center");
    r.SetTargetFPS(50);
}

function update() {}

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.WHITE);

    r.DrawCircle(source_x, source_y, source_radius, r.BLUE);
    r.DrawCircle(target1_x, target1_y, target_radius, r.RED);
    r.DrawCircle(target2_x, target2_y, target_radius, r.RED);

    const distance_from_target1 = distance(
        source_x,
        source_y,
        target1_x,
        target1_y,
    );
    const distance_from_target2 = distance(
        source_x,
        source_y,
        target2_x,
        target2_y,
    );

    if (distance_from_target1 < distance_from_target2)
        r.DrawLine(source_x, source_y, target1_x, target1_y, r.BLACK);
    else if (distance_from_target1 > distance_from_target2)
        r.DrawLine(source_x, source_y, target2_x, target2_y, r.BLACK);
    else {
        r.DrawLine(source_x, source_y, target1_x, target1_y, r.BLACK);
        r.DrawLine(source_x, source_y, target2_x, target2_y, r.BLACK);
    }
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
