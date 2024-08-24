import {generarFizzBuzz,generarSecuenciaHasta} from "./fizzbuzz";

describe("FizzBuzz", () =>{
    it("generar el mismo si no sigue ninguna regla", () => {
        expect(generarFizzBuzz(1)).toEqual("1");
    });
    it("generar el mismo si para cualquier numero si no sigue ninguna regla", () => {
        expect(generarFizzBuzz(2)).toEqual("2");
    });
    it("generar fizz para el numero 3", () => {
        expect(generarFizzBuzz(3)).toEqual("Fizz");
    });
    it("generar fizz para numeros multimplos de 3", () => {
        expect(generarFizzBuzz(9)).toEqual("Fizz");
    });
    it("generar buzz para el numero 5", () => {
        expect(generarFizzBuzz(5)).toEqual("Buzz");
    });
    it("generar buzz para numeros multimplos de 5.", () => {
        expect(generarFizzBuzz(10)).toEqual("Buzz");
    });
    it("generar fizzbuzz para el numero 15", () => {
        expect(generarFizzBuzz(15)).toEqual("FizzBuzz");
    });
    it("generar buzz para numeros multimplos de 5", () => {
        expect(generarSecuenciaHasta(4)).toEqual("1 2 Fizz 4");
    });
});

//modificar esta prueda para que genere un numero
//TDD y AUTOMATIZACION DE PRUEBAS != NO SON LO MISMO (definir eso claro)

//TDD => partimos con las pruebas y luego desarrollamos 
//no aplicas TDD si primero aplicas produccion en vez de las pruebas 