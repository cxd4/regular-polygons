var polygon = [];
var X = 0, Y = 1;
var n = 4;
var offset = 90;

function calculate_vertices() {
    "use strict";
    var i;
    var stride;

    n = parseFloat(document.getElementById("n").value);
    offset = parseFloat(document.getElementById("theta").value);
    if (!n || n < 1) {
        n = 1;
    }
    if (!offset) {
        offset = 0;
    }

    stride = 2; /* Just P(x, y), as 3-D isn't necessary for polygons. */
    i = 0;
    while (i < n) {
        var degrees = (360 / n) * i + offset;
        var radians = (degrees / 180) * Math.PI;

        polygon[stride * i + X] = Math.cos(radians);
        polygon[stride * i + Y] = Math.sin(radians);
        i += 1;
    }

    polygon[stride * n + X] = polygon[stride * n + Y] = 0;
    glVertexPointer(stride, GL_FLOAT, 0, polygon);
    return;
}

function draw() {
    "use strict";

    glClear(GL_COLOR_BUFFER_BIT); /*
    glColor4f(0, 0, 0, 1); */

    glDrawArrays(GL_LINE_LOOP, 0, n); /*
    glColor4f(1, 0, 0, 1);
    glDrawArrays(GL_POINTS, n, 1); */
    return;
}

function main_GL() {
    "use strict";
    var error_code;

    if (GL_get_context(document, "GL_canvas") === null) {
        alert("Failed to initialize WebGL.");
        return;
    }

    glClearColor(1, 1, 1, 1);
    glEnableClientState(GL_VERTEX_ARRAY);
    calculate_vertices();

    glColor4f(0, 0, 0, 1);
    glPointSize(5);

    do {
        error_code = glGetError();
    } while (error_code !== GL_NO_ERROR);
    setInterval(draw, 1000 / 10);
    return;
}
