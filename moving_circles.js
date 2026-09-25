// use the window center and initial coordinates to calculate other points with the same distance.
// keep changing the initial coordinates to get multiple rounds of circles until it reaches a point in the center.
// keep decreasing the size of the circles for each round.
// using a flag(?) move alternative rounds in the opposite directions.

const { DrawCircle } = require("raylib");

const window_width = 500;
const window_height = 500;
const window_center_x = window_width / 2;
const window_center_y = window_height / 2;
let circle_radius = 1;
let circle_x = window_width / 2;
let circle_y = 0;
let left_move = 1;

r = require("raylib");

function deg2rad(degree) {
    const radian = degree * r.PI / 180;
    console.log(radian);
}

function dimension_offset(window_center_x, window_center_y, radius) {

    let radian = 6.283185307179586; //- 0.017453292519943295 * 5;
    let color = r.RED;
    while (radian >= 0) { //6.283185307179586
        let offsetX = radius * Math.sin(radian);
        let offsetY = radius * Math.cos(radian);
        let x = offsetX + window_center_x;
        let y = offsetY + window_center_y;
        color = color === r.BLACK ? r.RED : r.BLACK;
        r.DrawCircle(x, y, circle_radius, color);
        radian -= 0.017453292519943295 * 2;
    }

}

function distance(sourceX, sourceY, targetX, targetY) {
    return ((sourceX - targetX) ** 2 + (sourceY - targetY) ** 2) ** 0.5;
}

function setup() {
    r.InitWindow(window_width, window_height, "Circles Optical Illusion");
    r.SetTargetFPS(50);

    let bigger_screen_dimension =
        window_width > window_height ? window_width : window_height;
    while (Math.floor(bigger_screen_dimension) > 1) {
        circle_radius = circle_radius + 3;
        bigger_screen_dimension -= 100;
    }
}

function update() {
    //if (left_move <= window_width / 10) {
    // if (circle_x > -(circle_radius + 1)) {
    //     circle_x = circle_x + 2.2;
    //     circle_y = circle_y + 2;
    //     // circle_x++;
    // }
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    let x = (y = 50);
    // let circle_flag = 0;
    let color = r.BLACK;
    /*while (x <= window_width) {
        while (y <= window_height) {
            if (
                distance(x, y, window_center_x, window_center_y) ===
                distance(circle_x, circle_y, window_center_x, window_center_y)
            ) {
                // if(circle_flag === 0){}
                let c_color = r.RED;
                //let c_color = color === r.BLACK ? r.RED : r.BLACK;
                r.DrawCircle(x, y, circle_radius, c_color);
            }
            y++;
        }
        x++;
    }*/

    dimension_offset(window_center_x, window_center_y, 100);

    //r.DrawCircle(-circle_x, circle_y, circle_radius, r.WHITE);
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
