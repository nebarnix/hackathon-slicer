## This Fork
I forked the project to make a Kudo3D Titan and Bean version of this slicer. 
Modifications:
* Removed subfolder from zip file. Images are now in root of zip. 
* Changed printer.js to match the 100um xy resolution setting of the titan 1 (4.3 inch wide build plate, 1080p resolution) 

## About
This project is a simple slicer for DLP-based 3D printers.

![Example screenshot](https://github.com/Formlabs/hackathon-slicer/blob/master/example.png)

It runs in your browser, using WebGL and the stencil buffer to voxelize `.stl` files.  
The resulting slices are delivered as a zip file full of `.png` images.

A hosted version and further documentation can be found
[here](http://mattkeeter.com/projects/dlp)

## Quick-start guide
```
npm install
npm start
```

## License
This tool is releated under the [MIT License](https://github.com/Formlabs/hackathon-slicer/blob/master/COPYING.md)

## Disclaimer
This was written in two days by folks with minimal experience in modern Javascript.

It's a cool demo, but shouldn't be considered industrial-strength software.

## Brought to you by
[![Formlabs logo](https://github.com/Formlabs/hackathon-slicer/blob/master/logo.png)](http://formlabs.com/)
