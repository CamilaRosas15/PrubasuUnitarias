import generarFizzBuzz from "./fizzbuzz";

describe("FizzBuzz", () =>{
    it("generar el mismo si no sigue ninguna regla", () => {
        expect(generarFizzBuzz(1)).toEqual("1");
    });
    it("generar el mismo si para cualquier numero si no sigue ninguna regla", () => {
        expect(generarFizzBuzz(2)).toEqual("2");
    });
    it("generar fizz para el numero es 3", () => {
        expect(generarFizzBuzz(3)).toEqual("Fizz");
    });
    it("generar fizz para numeros multimplos de 3", () => {
        expect(generarFizzBuzz(6)).toEqual("Fizz");
    });
});

//modificar esta prueda para que genere un numero


