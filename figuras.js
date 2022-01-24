// Codigo del cuadrado
console.group("Cuadrado")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ladoCuadrado+" u^2");

const perimetroCuadrado = ladoCuadrado*4;
console.log("El perimetro del cuadrado es: "+perimetroCuadrado+" u^2");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area es: "+areaCuadrado+" u^2");
console.groupEnd();

// Codigo del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 3;
const ladoTriangulo3 = 6;
const alturaTriangulo = 5.5;

console.log("Los lados del triangulo miden: "+ladoTriangulo1+" u, "+
ladoTriangulo2+" u, "+ladoTriangulo3+" u");
console.log("La altura del triangulo es: "+alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+ladoTriangulo3;
console.log("El perimetro del triangulo es: "+perimetroTriangulo);

const areaTriangulo = (ladoTriangulo2*alturaTriangulo)/2;
console.log("El area del triangulo es: "+areaTriangulo);
console.groupEnd();

//Codigo del circulo
console.group("Circulo");

// Radio
const radioCirculo = 4;

// Diametro
const diametroCirculo = radioCirculo*2;

// PI
const pi = Math.PI;

// Circunferencia
const perimetroCirculo = diametroCirculo * pi;

// Area
const areaCirculo = Math.pow(radioCirculo,2) * pi;

// Console circulo
console.log("El radio del circulo es: "+radioCirculo+"u");
console.log("El diametro del circulo es: "+diametroCirculo+"u");
console.log("El perimetro del circulo es: "+perimetroCirculo+"u");
console.log("El area del circulo es: "+areaCirculo+"u^2")
console.log("PI es: "+pi);

console.groupEnd();
