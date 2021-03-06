'use strict';

let resolution = {"x": 1920, "y": 1080}; // Kudo3D projectors are 1080p
let width_mm = 25.4 * 4.3; //Kudo3D beds are 4.3 inches wide

function aspectRatio()
{
    return resolution.x / resolution.y;
}

function pixels()
{
    return resolution.x * resolution.y;
}

// Returns a scale ratio of OpenGL units per mm
function getGLscale()
{
    return 2 * aspectRatio() / width_mm;
}

module.exports = {'resolution': resolution,
                  'aspectRatio': aspectRatio,
                  'pixels': pixels,
                  'getGLscale': getGLscale};
