function degrees_to_radians(degrees) {
    "use strict";
    var coefficient = Math.PI / 180;
    return (coefficient * degrees);
}

function Gregory_Leibniz(limit) {
    "use strict";
    var n, approximation = 0.0;

    for (n = 0; n < limit; n += 1) {
        approximation += Math.pow(-1, n) / (2 * n + 1);
    }
    return (4 * approximation);
}
function Vieta_formula(limit) {
    "use strict";
    var i, approximation = 1.0, base = 0;

    for (i = 0; i < limit; i += 1) {
        base = Math.sqrt(base + 2);
        approximation *= base / 2;
    }
    return (2 / approximation);
}
function Riemann_zeta(limit) {
    "use strict";
    var i, approximation = 0.0;

    for (i = 1; i < limit + 1; i += 1) {
        approximation += 1 / (i * i);
    }
    return Math.sqrt(6 * approximation);
}

function Archimedian_area(n_sides) {
    "use strict";
    var radians, ratio;

    radians = degrees_to_radians(360) / n_sides;
    ratio = n_sides * Math.sin(radians) / 2;
 /* area = ratio * radius * radius; // As n --> Infinity, ratio --> pi. */
    return ratio;
}
function Archimedian_perimeter(n_sides) {
    "use strict";
    var radians, ratio;

    radians = degrees_to_radians(180) / n_sides;
    ratio = n_sides * Math.sin(radians);
 /* perimeter = 2 * ratio * radius; // As n --> Infinity, ratio --> pi. */
    return ratio;
}
