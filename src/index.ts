

import fs = require('fs');
import { types } from 'util';
var file = fs.readFileSync('coords.txt','utf8');
console.log(file); 

const chars = [...file];

chars.forEach((c:string, i:Number) => console.log(c, i));

class MyClass {

    // Here we import the File System module of node
    private fs = require('fs');

    constructor() { }

    createFile() {

        this.fs.writeFile('file.txt', 'I am cool!',  function(err:any) {
            if (err) {
                return console.error(err);
            }
            console.log("File created!");
        });
    }

    showFile() {

        this.fs.readFile('coords.txt', function (err:any, data:any) {
            if (err) {
                return console.error(err);
            }
            console.log("Asynchronous read: \n" + data.toString());
        });
    }
}



interface Coord{

    x:number;
    y:number;
}

function xy2angle(a:Coord, b:Coord):number{

    /** claculates the angle between two coords 
     *  according to the 2nd fundamental problem of geodesy
     */
    var DX = b.x-a.x;
    var DY = b.y-a.y; 

    var angle = Math.atan((DX)/(DY)) * 200/Math.PI ; // convert radians to grads 


    if(DX>0){

        if(DY>0){

            angle = angle 
            
        }else{
            angle = angle + 200 ; 
        }

    }
        
    else if (DY<0){

        if(DY>0){

            angle = angle + 400;
        
        }else{
            angle = angle + 200 ; 
        }
    }else if(DX == 0 && DY>0){
        angle = 0; 
    }else if(DX == 0 && DY<0){
        angle = 200; 
    }else if(DX > 0 && DY==0){
        angle = 100; 
    }else if(DX < 0 && DY==0){
        angle = 300; 
    }
        
    return angle; 
}

var test = xy2angle({x:100,y:500},{x:200,y:500}); 
console.log(test);


function xy2Dist(a:Coord, b:Coord):number{

    /** claculates the distance between two coords 
     *  according to the 2nd fundamental problem of geodesy
    */

    var DX = b.x - a.x; 
    var DY = b.y-a.y; 

    return Math.sqrt(Math.pow(DX,2) - Math.pow(DY,2)); 

}

var test = xy2Dist({x:100,y:500},{x:200,y:500}); 
console.log(test);




// Usage
//var obj = new MyClass();
// obj.createFile();
//obj.showFile();

//import { mat, vec, Matrix, Vector } from '@josh-brown/vector';

// const A: Matrix<number> = mat([
//     [1, 0],
//     [0, 2]
//   ]);

// const x: Vector<number> = vec([3, 4]);
// const transformedVector: Vector<number> = A.apply(x);
// console.log(transformedVector); 