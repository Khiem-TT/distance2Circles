import {Circle} from "./Circle";

function distance(circle1: Circle, circle2: Circle, d: number) {
    let dd = Math.pow(Math.abs(circle1.radius - circle2.radius), 2) + Math.pow(d, 2);
    return Math.sqrt(dd);
}

let circle1 = new Circle(5);
let circle2 = new Circle(9);

console.log(distance(circle1, circle2, 24));