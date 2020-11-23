"use strict";
// console.log('Hello there amigos!'); 
// console.log('How you doin !!!'); 
// console.log('doin just great !!!');
// console.log('How about you !'); 
// console.log("Is it something I can do for you?");  
Object.defineProperty(exports, "__esModule", { value: true });
// import fs = require('fs');
// var file = fs.readFileSync('src/foo.txt','utf8');
// console.log(file); 
var MyClass = /** @class */ (function () {
    function MyClass() {
        // Here we import the File System module of node
        this.fs = require('fs');
    }
    MyClass.prototype.createFile = function () {
        this.fs.writeFile('file.txt', 'I am cool!', function (err) {
            if (err) {
                return console.error(err);
            }
            console.log("File created!");
        });
    };
    MyClass.prototype.showFile = function () {
        this.fs.readFile('node-commands.txt', function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("Asynchronous read: " + data.toString());
        });
    };
    return MyClass;
}());
// Usage
var obj = new MyClass();
function xy2angle(a, b) {
    var angle = Math.atan((b.x - a.x) / (b.y - a.y));
    return angle;
}
xy2angle({ x: 100, y: 500 }, { x: 100, y: 100 });
