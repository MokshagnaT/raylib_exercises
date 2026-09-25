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

r.InitWindow(window_width, window_height, "Rectangle in the Center");
r.SetTargetFPS(50);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    r.DrawCircle(source_x, source_y, source_radius, r.WHITE);
    r.DrawCircle(target1_x, target1_y, target_radius, r.GRAY);
    r.DrawCircle(target2_x, target2_y, target_radius, r.GRAY);

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
        r.DrawLine(source_x, source_y, target1_x, target1_y, r.RED);
    else if (distance_from_target1 > distance_from_target2)
        r.DrawLine(source_x, source_y, target2_x, target2_y, r.RED);
    else {
        r.DrawLine(source_x, source_y, target1_x, target1_y, r.RED);
        r.DrawLine(source_x, source_y, target2_x, target2_y, r.RED);
    }
    r.EndDrawing();
}

r.CloseWindow();
