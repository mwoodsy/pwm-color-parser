
var cssColor = require('csscolorparser');

function parseColor(color){
     if (typeof color !== 'string') 
		throw new TypeError('Value must be a string');
    
    if (color[0] === '#') 
        return parseHex(color); 

    var rgb = cssColor.parseCSSColor(color);

    if (!Array.isArray(rgb))
        throw new Error('Unknown color name.');
    
    return parseRGB(rgb);
}

function parseHex(hex){
    if (typeof hex !== 'string') 
		throw new TypeError('Value must be a string');
	
    //remove leading #
	hex = hex.replace(/^#/, '');
    
    //if FFF convert to FFFFFF
	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}

    // get int value from hex
	var num = parseInt(hex, 16);
    
    var red = num >> 16;
    var green = num >> 8 & 255;
    var blue = num & 255;
	var rgb = [red, green, blue];
    
    return parseRGB(rgb);
}

function parseRGB(rgb){
    if (!Array.isArray(rgb) || rgb[2] === undefined) 
		throw new TypeError('Value must be in RGB format');

    rgb[0] = numToPWM(rgb[0]);
    rgb[1] = numToPWM(rgb[1]);
    rgb[2] = numToPWM(rgb[2]);
    
    return rgb;
}

function numToPWM(num){
    if (typeof num !== 'number') 
        throw new TypeError('Value must be a string');
    if (num < 0 || num > 255 ) 
        throw new RangeError('Value must be between 0 and 255');
    return Math.round((num/255)*100); 
}

module.exports = {
    parseHex : parseHex,
    parseRGB : parseRGB,
    parseColor : parseColor
};

