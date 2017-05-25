# pwm-color-parser
JavaScript parser for PWM color values

Installation
------------

```
npm install pwmcolorparser
```

Sample 
```js
var pwmColorParser = require('pwmcolorparser');

console.log(pwmColorParser.parseHex('#FF0000')); // outputs [100, 0, 0]
console.log(pwmColorParser.parseRGB([255, 0 , 0])) // outputs [100, 0, 0]
console.log(pwmColorParser.parseColor('red')); // outputs [100, 0, 0, 1]

```