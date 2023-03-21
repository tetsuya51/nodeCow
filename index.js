
const information = require('./information.js');

var cowsay = require("cowsay");

console.log(cowsay.say({
    text :`I'm a ${information.username} from ${information.school} `,
    e : "oO",
    T : "U "
}));

// or cowsay.think()