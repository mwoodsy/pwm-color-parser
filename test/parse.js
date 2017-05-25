var PwmColorParser = require('../pwmcolorparser');
var assert = require('assert');

describe("PWM Color Code Converter", function() {
  describe("RGB to PWM conversion", function() {
    it("converts the basic colors", function() {
      var red   = PwmColorParser.parseRGB([255, 0, 0]);
      var green = PwmColorParser.parseRGB([0, 255, 0]);
      var blue  = PwmColorParser.parseRGB([0, 0, 255]);
      var yellow  = PwmColorParser.parseRGB([255, 255, 0]);
      var magenta  = PwmColorParser.parseRGB([255, 0, 255]);
      var cyan  = PwmColorParser.parseRGB([0, 255, 255]);
      var white  = PwmColorParser.parseRGB([255, 255, 255]);
      
      assert.deepEqual(red, [100, 0, 0]);
      assert.deepEqual(green, [0, 100, 0]);
      assert.deepEqual(blue, [0, 0, 100]);      
      assert.deepEqual(yellow, [100, 100, 0]);      
      assert.deepEqual(magenta, [100, 0, 100]);     
      assert.deepEqual(cyan, [0, 100, 100]);      
      assert.deepEqual(white, [100, 100, 100]);      
    });
    it("converts the complex colors", function() {
      var orange   = PwmColorParser.parseRGB([255, 165, 0]);
      var purple = PwmColorParser.parseRGB([128, 0, 128]);
      var pink  = PwmColorParser.parseRGB([255, 192, 203]);
      
      assert.deepEqual(orange, [100, 65, 0]);
      assert.deepEqual(purple, [50, 0, 50]);
      assert.deepEqual(pink, [100, 75, 80]);      
    });
  });

  describe("Hex to PWM conversion", function() {
        it("converts the basic colors", function() {
      var red   = PwmColorParser.parseHex('#FF0000');
      var green = PwmColorParser.parseHex('#00FF00');
      var blue  = PwmColorParser.parseHex('#0000FF');
      var yellow  = PwmColorParser.parseHex('#FFFF00');
      var magenta  = PwmColorParser.parseHex('#FF00FF');
      var cyan  = PwmColorParser.parseHex('#00FFFF');
      var white  = PwmColorParser.parseHex('#FFFFFF');
      
      assert.deepEqual(red, [100, 0, 0]);
      assert.deepEqual(green, [0, 100, 0]);
      assert.deepEqual(blue, [0, 0, 100]);      
      assert.deepEqual(yellow, [100, 100, 0]);      
      assert.deepEqual(magenta, [100, 0, 100]);     
      assert.deepEqual(cyan, [0, 100, 100]);      
      assert.deepEqual(white, [100, 100, 100]);      
    });
    it("converts the complex colors", function() {
      var orange   = PwmColorParser.parseHex('#FFA500');
      var purple = PwmColorParser.parseHex('#800080');
      var pink  = PwmColorParser.parseHex('#FFC0CB');
      
      assert.deepEqual(orange, [100, 65, 0]);
      assert.deepEqual(purple, [50, 0, 50]);
      assert.deepEqual(pink, [100, 75, 80]);      
    });
  });
  
  describe("Color to PWM conversion", function() {
        it("converts the basic colors", function() {
      var red   = PwmColorParser.parseColor('red');
      var lime = PwmColorParser.parseColor('lime');
      var blue  = PwmColorParser.parseColor('blue');
      var yellow  = PwmColorParser.parseColor('yellow');
      var magenta  = PwmColorParser.parseColor('magenta');
      var cyan  = PwmColorParser.parseColor('cyan');
      var white  = PwmColorParser.parseColor('white');
      
      assert.deepEqual(red, [100, 0, 0, 1]);
      assert.deepEqual(lime, [0, 100, 0, 1]);
      assert.deepEqual(blue, [0, 0, 100, 1]);      
      assert.deepEqual(yellow, [100, 100, 0, 1]);      
      assert.deepEqual(magenta, [100, 0, 100, 1]);     
      assert.deepEqual(cyan, [0, 100, 100, 1]);      
      assert.deepEqual(white, [100, 100, 100, 1]);      
    });
    it("converts the complex colors", function() {
      var orange   = PwmColorParser.parseColor('orange');
      var purple = PwmColorParser.parseColor('purple');
      var pink  = PwmColorParser.parseColor('pink');
      
      assert.deepEqual(orange, [100, 65, 0, 1]);
      assert.deepEqual(purple, [50, 0, 50, 1]);
      assert.deepEqual(pink, [100, 75, 80, 1]);      
    });
    it("converts the colors from hex", function() {
      var red   = PwmColorParser.parseColor('#F00');
      var blue = PwmColorParser.parseColor('#0000FF');
      
      assert.deepEqual(red, [100, 0, 0]);
      assert.deepEqual(blue, [0, 0, 100]);    
    });
  });
});