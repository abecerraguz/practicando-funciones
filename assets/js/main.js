function a() {
    console.log('hola');
}
console.log('Dojo');
// Sale en consola Dojo


function b() {
    console.log('hola');
    return 15;
}
var x = b();
console.log('x es--->', x);
// La funcion retorna x es 15



function a(n) {
    console.log('n es-->', n);
    return n+15;
}
var x = a(3);
console.log('x es--->', x);
// La funcion retorna x es 18


var z = 15;
console.log(z);
function a(z){
   console.log(z);   
   return z;
}
var b = a(10);
console.log(b);
console.log(z);

// Devuelve en consola 15
// Devuelve en consola 10
// Devuelve en consola 10
// Devuelve en consola 15



var c = 15;
console.log(c);
function d(c){
   console.log(c);   
   return c*2;
}
var e = d(10);
console.log(e);
console.log(c);

// Devuelve en consola 15
// Devuelve en consola 10
// Devuelve en consola 20
// Devuelve en consola 15


function a(n) {
    console.log('n es', n);
    y = n*2;
    return y;
}
var x = a(3) + a(5);
console.log('x es', x);
// Devuelve n es 3
// Devuelve n es 5
// Devuelve en consola x es 16



function x(num1, num2) {  
    return num1+num2;
 }
 console.log(x(2,3))
 console.log(x(3,5))
 // Devuelve en consola 5
 // Devuelve en consola 8



function z(a,b) {
    var c = a + b;
    console.log('c es', c);
    return c;
}
var x = z(2,3) + z(3,5);
console.log('x es', x);
// Devuelve en consola c es 5
// Devuelve en consola c es 8
// Devuelve en consola x es 13



function d(a,b) {
    var c = a + b;
    console.log('c es', c);
    return c;
}
var x = d(2,3) + d(3,d(2,1)) + d(d(2,1),d(2,3));
console.log('x es', x);
// Devuelve en consola c es 5
// Devuelve en consola c es 3
// Devuelve en consola c es 6
// Devuelve en consola c es 3
// Devuelve en consola c es 5
// Devuelve en consola 19