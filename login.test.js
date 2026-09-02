const { login } = require("./login.js");

describe ("Teste da função de login", () => {
    test("deve permitir login com credenciais corretas", () => {
    const resultado = login("usuario@teste.com", "123456");
        expect(resultado).toBe(true);
    });

    test("deve permitir login com credenciais incorretas", () => {
        const resultado = login("usuario@teste.com", "senhaErrada");
        expect(resultado).toBe(false);
    });

    test("não deve permitir login com e-mail incorreto", () => {
        const resultado = login("errado@teste.com", "123456");
        expect(resultado).toBe(false);
    });
});



